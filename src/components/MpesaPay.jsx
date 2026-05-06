import React,{useState} from 'react'
import {useLocation} from'react-router-dom'
import axios from 'axios'

const MpesaPay = () => {
 const[loading,setLoading]=useState("")
 const[success,setSuccess]=useState("")
 const[error,setError]=useState("")

 const[phone,setPhone]=useState("")
 const{product}=useLocation().state || {}

 // function to submit data to Api
 const submit=async(e)=>{
   e.preventDefault()
   setLoading("Kindly wait as we complete the transaction")

   try {
    const data=new FormData()
    data.append("phone",phone)
    data.append("amount",product.product_cost)

    const response=await axios.post("https://ferdinant.alwaysdata.net/api/mpesa_payment",data)

    setLoading("")
    setSuccess(response.data.message)
    
   } catch (error) {
    setLoading("")
    setError(error.message)
    
   }
 }  

  return (
    <div className='row justify content-center'>
      <h1>Make Payment</h1>
      <p className='text-success'>{product.product_name} </p>
      <p className='text-warning'>{product.product_description}</p>
      <p className='text-secondary'>{product.product_cost}</p>
      <br /><br />

      <div className='card shadow col-md-6'>
        <form action="" onSubmit={submit}>
          <p className='text-warning'>{loading} </p>
          <p className='text-success'>{success} </p>
          <p className='text-danger'>{error} </p>
          <br />
          <input type="tel" className='form-control' placeholder='Enter phone number starting with 254' value={phone} onChange={(e)=>setPhone(e.target.value)} />
          <br />
         <button className='btn btn-info w-100'>Make Payments</button>
         <br /><br />

        </form>

      </div>

    </div>
  )
}

export default MpesaPay