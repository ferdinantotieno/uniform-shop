import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {

 // initialize hooks
  const[product_name,setProduct_name]=useState("")
  const[product_description,setProduct_description]=useState("")
  const[product_cost,setProduct_cost]=useState("")
  const[product_photo,setProduct_photo]=useState("")

 // initialize other hooks
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to send out data to the server
     const submit=async(e)=>{

        e.preventDefault()

        setLoading("please wait....")

        try {
          const data=new FormData()
          data.append("product_name",product_name)
          data.append("product_description",product_description)
          data.append("product_cost",product_cost)
          data.append("product_photo",product_photo)

         //   calling the Api
         const response=await axios.post("https://ferdinant.alwaysdata.net/api/addproduct",data)

         setLoading("")
         setSuccess(response.data.message)

         // reset form
         setProduct_name("")
         setProduct_description("")
         setProduct_cost("")
         setProduct_photo("")  

            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }

    }


  return (
    <div className='row justify-content-center mt-3'>
        <div className='card shadow col-md-6'>
            <h1>Upload Products</h1>

            <form action="" onSubmit={submit}>
                <p className='text-warning'>{loading}</p>
                <p className='text-success'>{success}</p>
                <p className='text-danger'>{error}</p>

                <input type="text" placeholder='Enter Product Name'  className='form-control' required value={product_name} onChange={(e)=>setProduct_name(e.target.value)} />
                <br />
                <textarea name="" id=""placeholder='Describe your product' className='form-control' value={product_description}  onChange={(e)=>setProduct_description(e.target.value)}></textarea>
                <br />
                <input type="currency" placeholder='Enter product cost'  className='form-control' required value={product_cost} onChange={(e)=>setProduct_cost(e.target.value)} />
                <br />
                <label><b>Upload Product Photo</b></label>
                <input type="file" placeholder='Enter product photo'  className='form-control' required accept='image/*' onChange={(e)=>setProduct_photo(e.target.files[0])} />
                <br />
                <input type="submit" value='Upload Product'
                className='form-control bg-primary text-white w-100' />
                <br />


            </form>

        </div>

    </div>
  )
}

export default AddProduct