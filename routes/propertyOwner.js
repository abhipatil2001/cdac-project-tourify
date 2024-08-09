const express = require('express')
const mysql =  require('mysql2')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router = express.Router()

router.post('/register', (request,response)=>{
    const{name, email, password, phone, address, role_id=1}  = request.body;
    const statement = 'insert into users_tb(name, email, password, phone, address, role_id) values(?, ?, ?, ?, ?, ?)'
    const encryptedPassword = String(crypto.SHA256(password))
    db.pool.execute(statement,
        [name, email, encryptedPassword, phone, address, role_id],
    (error, result) =>{
        response.send(utils.createResult(error, result))
    }
    )
})

//o/p: for first query {
//     "status": "success",
//     "data": {
//         "fieldCount": 0,
//         "affectedRows": 1,
//         "insertId": 2,
//         "info": "",
//         "serverStatus": 2,
//         "warningStatus": 0,
//         "changedRows": 0
//     }
// }

router.post('/login', (request, response)=>{
    const {email, password}  = request.body
    const statement = 'select id, name, email, password, phone, is_deleted from users_tb where email = ? and password = ?'
    const encryptedPassword = String(crypto.SHA256(password))
    db.pool.query(statement, [email, encryptedPassword], (error, data)=>{
        if(error){
            response.send(utils.createErrorResult(error))
        }else{
            if(data.length == 0){
                response.send(utils.createErrorResult('user does not exists'))
            }
            else{
                const user = data[0]
                if(user.isDeleted){
                    response.send(utils.createErrorResult('your account is closed'))
                }else{

                     // payload for token 
                    const payload = {id: user.id}
                    const token = jwt.sign(payload, config.secret)
                    const userData = {
                        token, 
                        name: `${user['name']} ${user['email']}`,
                        id:`${user['id']}`
                    }
                    response.send(utils.createSuccessResult(userData))
                }
            }
        }

    })
})

router.get('/profile/', (request,response)=>{
    const statement = `select name, email, phone, address, created_at from users_tb where id = ?`
    const userId = request.userId; 
    db.pool.execute(statement, [userId], (error, result)=>{
        if (error) {
            response.send(utils.createErrorResult(error));
        } else {
            if (result.length > 0) {
                const user = result[0];
                const userData = {
                    name: `${user.name}`,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                    created_at: user.created_at
                };
                response.send(utils.createSuccessResult(userData));
            } else {
                response.send(utils.createErrorResult('User not found'));
            }
        }
    })
});

router.post('/addProperty', (request,response)=>{
    // const{from_date, to_date, user_id = request.userId, property_id, status_id, bill, }
    const{title, address, rate, description, place_id, category_id} = request.body
    const statement = `insert into properties_tb(title, address, rate, description, place_id, category_id) values(?, ?, ?, ?, ?, ?)`
    db.pool.execute(statement, [title, address, rate, description, place_id, category_id], (error, result)=>{
    response.send(utils.createResult(error, result))
    })
})

router.get('/bookings/:ownerId', (request, response) => {
    const ownerId = request.params.ownerId; // Get owner ID from request parameters

    const statement = `SELECT 
        b.id, 
        b.from_date, 
        b.to_date, 
        b.status_id, 
        b.bill, 
        u.name, 
        u.email, 
        u.phone,
        p.title,
        bs.status
    FROM 
        bookings_tb b 
    INNER JOIN 
        properties_tb p ON b.property_id = p.id 
    INNER JOIN 
        users_tb u ON b.user_id = u.id
    INNER JOIN 
    booking_status_tb bs ON b.status_id = bs.id
    WHERE 
        p.user_id = ?`; // Use placeholder for owner ID

    db.pool.execute(statement, [ownerId], (error, result) => {
        if (error) {
            response.send(utils.createErrorResult(error));
        } else {
            if (result.length > 0) {
                response.send(utils.createSuccessResult(result));
            } else {
                response.send(utils.createErrorResult("No bookings available"));
            }
        }
    });
});

router.get('/categories', (request, response)=>{
    const statement = `select id, category from categories_tb;`
    db.pool.execute(statement, (error, result) => {
        if(error){
            response.send(utils.createErrorResult(error));
        }else{
            if(result.length > 0){
                response.send(utils.createSuccessResult(result));
            }else{
                response.send(utils.createErrorResult("no categories available"))
            }
        }
    })
})
router.get('/places', (request, response)=>{
    const statement = `select id, name from places_tb;`
    db.pool.execute(statement, (error, result) => {
        if(error){
            response.send(utils.createErrorResult(error));
        }else{
            if(result.length > 0){
                response.send(utils.createSuccessResult(result));
            }else{
                response.send(utils.createErrorResult("no categories available"))
            }
        }
    })
})

// router.get('/bookings', (request, response)=>{
//     const statement = `SELECT 
//     b.id, 
//     b.from_date, 
//     b.to_date, 
//     b.status_id, 
//     b.bill, 
//     u.name, 
//     u.email, 
//     u.phone
// FROM 
//     bookings_tb b 
// INNER JOIN 
//     properties_tb p ON b.property_id = p.id 
// INNER JOIN 
//     users_tb u ON b.user_id = u.id
// WHERE 
//     p.user_id = 2;`
//     db.pool.execute(statement, (error, result)=>{
//         if(error){
//             response.send(utils.createErrorResult(error))
//         }
//         else{
//             if(result.length > 0){
//                 response.send(utils.createSuccessResult(result))
//             }else{
//                 response.send(utils.createErrorResult("no any booking availabe"))
//             }
//         }

//     })
// })

module.exports = router