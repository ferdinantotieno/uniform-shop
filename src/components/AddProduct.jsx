import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = () => {

  const [product_name, setProduct_name] = useState("")
  const [product_description, setProduct_description] = useState("")
  const [product_cost, setProduct_cost] = useState("")
  const [product_photo, setProduct_photo] = useState("")

  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    setLoading("please wait....")

    try {
      const data = new FormData()
      data.append("product_name", product_name)
      data.append("product_description", product_description)
      data.append("product_cost", product_cost)
      data.append("product_photo", product_photo)

      const response = await axios.post(
        "https://ferdinant.alwaysdata.net/api/addproduct",
        data
      )

      setLoading("")
      setSuccess(response.data.message)

      setProduct_name("")
      setProduct_description("")
      setProduct_cost("")
      setProduct_photo("")

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  // ===== FOOTER STYLES =====
  const styles = {
    page: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    },

    container: {
      flex: 1
    },

    footer: {
      background: "#2c3e50",
      color: "white",
      padding: "40px 20px",
      marginTop: "40px"
    },

    footerContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "20px"
    },

    footerBottom: {
      textAlign: "center",
      marginTop: "20px",
      borderTop: "1px solid #7f8c8d",
      paddingTop: "15px",
      color: "#dcdde1"
    }
  }

  return (
    <div style={styles.page}>

      {/* FORM SECTION */}
      <div className='row justify-content-center mt-3' style={styles.container}>
        <div className='card shadow col-md-6'>
          <h1>Upload Products</h1>

          <form onSubmit={submit}>
            <p className='text-warning'>{loading}</p>
            <p className='text-success'>{success}</p>
            <p className='text-danger'>{error}</p>

            <input
              type="text"
              placeholder='Enter Product Name'
              className='form-control'
              required
              value={product_name}
              onChange={(e) => setProduct_name(e.target.value)}
            />
            <br />

            <textarea
              placeholder='Describe your product'
              className='form-control'
              value={product_description}
              onChange={(e) => setProduct_description(e.target.value)}
            />
            <br />

            <input
              type="text"
              placeholder='Enter product cost'
              className='form-control'
              required
              value={product_cost}
              onChange={(e) => setProduct_cost(e.target.value)}
            />
            <br />

            <label><b>Upload Product Photo</b></label>
            <input
              type="file"
              className='form-control'
              required
              accept='image/*'
              onChange={(e) => setProduct_photo(e.target.files[0])}
            />
            <br />

            <input
              type="submit"
              value='Upload Product'
              className='form-control bg-primary text-white w-100'
            />
            <br />
          </form>

        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>

          <div>
            <h3>My Shop</h3>
            <p>Best online shopping platform in Kenya</p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Products</p>
            <p>Upload</p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>📞 +254 712 345 678</p>
            <p>📧 shop@gmail.com</p>
            <p>📍 Nairobi, Kenya</p>
          </div>

        </div>

        <div style={styles.footerBottom}>
          © 2026 My Shop. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default AddProduct