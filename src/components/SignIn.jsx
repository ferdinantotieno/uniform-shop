import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

 // initializing hooks
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

 // initializing other hooks like loading,success.error   
    const[loading,setLoading]=useState("")  
   const[error,setError]=useState("")
   const[success,setSuccess]=useState("")

  const navigate=useNavigate();

  const submit=async(e)=>{
     e.preventDefault()
     setLoading("please wait....")

     try {

         const data=new FormData()
          data.append("email",email)
         data.append("password",password)

         // calling the api
         const response=await axios.post("https://ferdinant.alwaysdata.net/api/signin",data)

         setLoading("")

         // Check if the response has user item,

         if (response.data.user){
         // If user is found, store user details in localStorage
         localStorage.setItem("user",JSON.stringify(response.data.user));
         setSuccess(response.data.message)
           // Redirect to /getproducts Component

            setTimeout(()=>{

             navigate("/getproduct");
           },2000)
           }
           else{
             // User Not Found,Show Error message
             setError(response.data.message);
           }
         // if there was an error,clear Loading

        

         // reset your form

         setEmail("")
         setPassword("")
        
         } catch (error) {

         setLoading("")
         setError(error.message)
        
          }
  }
  return (
    <div className='row justify-content-center'>
      <div className='card shadow col-md-6'>
        <h1>SignIn</h1>
        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading}</p>
          <p className='text-success'>{success}</p>
          <p className='text-danger'>{error}</p>

          <input type="email" placeholder='Enter Your Email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)} />
          <br />
          <input type="password" placeholder='Enter Your Password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <input type="submit" value="Sign In" className='form-control bg-primary w-100 text-white' />
          <br />

          <p>Dont have an account? &nbsp; <Link to='/Sign In'>Sign Up</Link></p>

        </form>

      </div>
     </div>
  )
}

export default SignIn