import { useState } from "react"
import { toast } from 'react-toastify'
import { login } from "../services/user"
import { Link, Navigate, useNavigate } from "react-router-dom"
function LoginUser(){
   //state members
   const[email, setEmail] = useState('')
   const[password, setPassword]  = useState('')

   const navigate = useNavigate();
   const onSignin = async ()=>{
    //client side validation
    if(email.length === 0){
     toast.warning('enter email')
    }
    else if(password.length === 0){
        toast.warning('enter email')
    }
    else{
        const result = await login(email, password)
        if(result['status'] === 'success'){
            toast.success('welcome to the application')
            //read the token
          const { token, name, id } = result['data'];
          //set the token in session storage
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('name', name)
          sessionStorage.setItem('ownerId', id)
            navigate('/home')
            
        }
        else{
            toast.loading('login unsuccesfull')
        }
    }
   }
    return(
        <div >
            <div className="container-fluid">
                <h1 className="page-title">Login</h1>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col">
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
                        <input type="text" className="form-control" 
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        />
                       </div>
                    <div className="mb-3">
                        <div>
                            Don't have an account yet?{' '}
                            <Link to='/register'>Register here</Link>
                        </div>
                        <button onClick={onSignin} className='mt-2 btn btn-success'>
                            Login
                        </button>
                    </div>
                 </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </div>
        )
}
export default LoginUser