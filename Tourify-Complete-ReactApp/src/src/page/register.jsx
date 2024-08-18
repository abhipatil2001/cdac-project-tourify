import { useState } from "react";
import {toast} from 'react-toastify'
import { register } from "../services/user";
import { Link, useNavigate } from "react-router-dom" 
function RegisterOwner(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    
    //navigate creation
    const navigate = useNavigate()

    //onclick fun for btn register
    const onRegister = async () => {
        console.log('onRegister')
    
        // client side validation
        if (name.length === 0) {
          toast.warning('enter first name')
        }else if (email.length === 0) {
          toast.warning('enter email')
        } else if (!isValidEmail()) {
          toast.warning('Email is not valid')
        } else if (password.length === 0) {
          toast.warning('enter password')
        } else if (address.length === 0){
            toast.warning('enter address')
        }
         else {
          // make the API call and receive the result
          const result = await register(name, email, password, phone, address)
          if (result['status'] === 'success') {
            toast.success('successfully registered a user')
            navigate('/login')
          } else {
            toast.error('Failed to register the user')
          }
        }
      }
         // validation for email
    const isValidEmail = () => {
        return email.includes('@')
      }

    return(<div>
        <div>
          <h1 className="page-title">Register</h1>
          <div className="row">
           <div className="col-4"></div>
           <div className="col">
              <div className="mb-3">
              <label htmlFor="">Full Name</label>
              <input onChange={(e)=>{
                  setName(e.target.value)
              }} 
              type="text" className="form-control" 
              />
              </div>
              <div className="mb-3">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" 
              onChange={(e)=>{
                  setEmail(e.target.value)
              }}
              />
              </div>
              <div className="mb-3">
              <label htmlFor="">Password</label>
              <input onChange={(e)=>{
                  setPassword(e.target.value)
              }} 
              type="text" className="form-control" 
              />
              </div>
  
              <div className="mb-3">
              <label htmlFor="">Phone Number</label>
              <input onChange={(e)=>{
                  setPhone(e.target.value)
              }} 
              type="text" className="form-control" 
              />
              </div>
               <div className="mb-3">
              <label htmlFor="">Address</label>
              <input onChange={(e)=>{
                  setAddress(e.target.value)
              }} 
              type="text" className="form-control" 
              />
              
  
              <div className='mb-3'>
                <div>
                  Already have an account?{' '}
                  <Link to='/login'>login here</Link>
                </div>
                <button className='mt-2 btn btn-success' onClick={onRegister}>
                  Register
                </button>
              </div>
              </div>          
           </div>
           <div className="col-4"></div>
        </div>
      </div>
    </div>
   )
}

export default RegisterOwner