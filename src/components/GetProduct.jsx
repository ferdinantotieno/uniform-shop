import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetProduct = () => {

  // initialize hooks
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[products,setProducts]=useState([])
  const navigate=useNavigate()

  // search variable
  const[search,setSearch]=useState("")

  const filteredProducts =products.filter((product)=>product.product_name.toLowerCase().includes(search.toLowerCase()))

  // a variable to store images
  const img_url="https://ferdinant.alwaysdata.net/static/images/"

  // a function to fetch or get our products from the Api
   const fetchProducts=async()=>{
    setLoading("please wait as we retrive our products")

    try {

      // call your Api
      const response=await axios.get("https://ferdinant.alwaysdata.net/api/getproductdetails")
      setProducts(response.data)
      console.log('The response is', response);
      setLoading("")
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
   }
   useEffect(()=>{
    fetchProducts()
   },[])
  return (
    <div className='row'>
      <h1>Available Products</h1>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <input type="text"
           placeholder='" search products..."'
           value={search}
           onChange={(e)=>setSearch(e.target.value)}
           />

        </div>

      </div>
       <p className='text-warning'>{loading} </p>
       <p className='text-danger'>{error} </p>
       {/* {products.map((product)=>)} */}
       
{ filteredProducts.map((product)=>(
        
      
      
      <div className='col-md-4 justify-content-center'>
        <div className='card shadow mt-4'>


          <img src={img_url + product.product_photo} alt="skin care" className='product_img  img'/>
          <div className='card-body'>

            <h3 className='text-success'>{product.product_name} </h3>
            <p className='text-secondary'>{product.product_description}</p>
            <b className='text-warning'>{product.product_cost}</b>

            <br />
            <input type="button" value='Purchase now' className='btn btn-info' onClick={()=>navigate("/mpesa", {state:{product}})} />


          </div>
        </div>



      </div>
))}
    </div>
  )
}

export default GetProduct