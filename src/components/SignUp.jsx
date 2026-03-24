import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    // initialize the hooks
  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[password,setPassword]=useState("")

  // initialize other hooks like loading,succes and error
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // function to send out data to the server
  const submit=async(e)=>{

    e.prevenDefault()

    setLoading("please wait...")

    try {

         const data=new FormData()

      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)

      // calling the api

      const response=await axios.post("https://ferdinant.alwaysdata.net/api/signup",data)

      setLoading("")

      setSuccess(response.data.message)

      // reset your form
      setUsername("")
      setEmail("")
      setPassword("")
      setPhone("")
      
        
    } catch (error) {
        setLoading("")
      setError(error.message)
        
    }
  }
  return (
    <div className='row justify-content-center'>
        <div className='card shadow col-md-6'>
            <h1>SignUp</h1>
            <form action="" onSubmit={submit}>
                {username}
                <p className='text-warning'>{loading}</p>
                <p className='text-success'>{success}</p>
                <p className='text-danger'>{error}</p>

             <input type="text"placeholder='Enter your username'className='form-control' required value={username} onChange={(e)=>setUsername(e.target.value)}/>
             <br /><br />
             {email}

             <input type="email"placeholder='Enter your email'className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)} />
             <br /><br />
             {phone}

             <input type="tel"placeholder='Enterphone number' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
             <br /><br />
             {password}
        
             <input type="password"placeholder='Enter password'className='form-control'  required value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <br /><br />
             <input type="submit" value="SignUP"className='bg-primary form-control  text-white'/>
             <p>Already have an acount?<Link to='/signin'>SignIn</Link>  </p>

            </form>

        </div>

    </div>
  )
}

export default SignUp