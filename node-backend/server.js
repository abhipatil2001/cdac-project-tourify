const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const config = require('./config')
const utils = require('./utils')

const app = express()
app.use(cors())
app.use(express.json())


//middileware to verify the token
app.use((request, response, next) => {
    //check if token is required for the API
    if (
        request.originalUrl === '/propertyOwner/login' ||     //request.url: This property returns the URL string that is present in the request line of the HTTP request. e.g- http://example.com/path?query=string, request.url will return /path.
        request.originalUrl === '/propertyOwner/register'   //request.originalUrl: This property returns the full URL string that was present in the request, including the query parameters. For the same example above, request.originalUrl will return /path?query=string.
        // request.originalUrl.startsWith('/propertyOwner/profile/')

        // we can see for the image also we wil write it later
        //    request.url.startsWith('/image/')
    ) {
        //skip verifying the token
        next()
    } else {
        //get the token
        const token = request.headers['token'];

        if (!token || token.length === 0) {
            response.send(utils.createErrorResult('missing token'))
        } else {
            try {
                //verify the token
                const payload = jwt.verify(token, config.secret) // It checks the token's signature against the secret key to ensure the token is valid and hasn't been tampered with. 
                //If the signature is valid, it decodes the token and returns the payload contained within the token.

                //add the user Id to the request
                request.userId = payload['id']

                //call the real route
                next()
            } catch (ex) {
                response.send(utils.createErrorResult(ex))
            }

        }
    }
})

//add routers
const propertyOwnerRouter = require('./routes/propertyOwner')


//use the router to route
app.use('/propertyOwner', propertyOwnerRouter)


//server port listen
app.listen(4000, '0.0.0.0', () => {
    console.log(`server started on port 4000`)
})