import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetProduct = () => {

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [quantities, setQuantities] = useState({})
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 8
  const navigate = useNavigate()
  const img_url = "https://ferdinant.alwaysdata.net/static/images/"

  useEffect(() => {
    axios.get("https://ferdinant.alwaysdata.net/api/getproductdetails")
      .then(res => setProducts(res.data))
      .catch(err => setError(err.message))
  }, [])

  const filteredProducts = products.filter(p =>
    p.product_name.toLowerCase().includes(search.toLowerCase())
  )

  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage
  const paginatedProducts = filteredProducts.slice(indexOfFirst, indexOfLast)

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const increaseQty = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }))
  }

  const decreaseQty = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1)
    }))
  }

  const addToCart = (product) => {
    const id = product.id || product.product_id
    const qty = quantities[id] || 1

    let cart = JSON.parse(localStorage.getItem("cart")) || []

    cart.push({
      ...product,
      quantity: qty,
      cartItemId: Date.now()
    })

    localStorage.setItem("cart", JSON.stringify(cart))
    alert("Added to cart!")
  }

  // ✅ NEW FEATURE: PURCHASE NOW
  const purchaseNow = (product) => {
    const id = product.id || product.product_id
    const qty = quantities[id] || 1

    navigate("/mpesa", {
      state: {
        product,
        quantity: qty
      }
    })
  }

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "20px",
      fontFamily: "Arial",
      backgroundColor: "#f4f6f8"
    },

    title: {
      textAlign: "center",
      fontSize: "28px",
      marginBottom: "10px"
    },

    search: {
      width: "100%",
      padding: "12px",
      marginBottom: "20px",
      borderRadius: "8px",
      border: "1px solid #ccc"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px"
    },

    card: {
      background: "white",
      borderRadius: "12px",
      padding: "15px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      textAlign: "center"
    },

    img: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "10px"
    },

    qtyBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      marginTop: "10px"
    },

    btn: {
      padding: "5px 10px",
      border: "none",
      background: "#3498db",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer"
    },

    qty: {
      fontWeight: "bold",
      minWidth: "20px"
    },

    cartBtn: {
      width: "100%",
      marginTop: "10px",
      padding: "8px",
      background: "#f39c12",
      border: "none",
      color: "white",
      borderRadius: "6px",
      cursor: "pointer"
    },

    buyBtn: {
      width: "100%",
      marginTop: "8px",
      padding: "8px",
      background: "#2ecc71",
      border: "none",
      color: "white",
      borderRadius: "6px",
      cursor: "pointer"
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

      <div>

        <h1 style={styles.title}>🛍️ Available Products</h1>

        <input
          style={styles.search}
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p style={{ color: "orange" }}>{loading}</p>
        <p style={{ color: "red" }}>{error}</p>

        <div style={styles.grid}>

          {paginatedProducts.map(product => {

            const id = product.id || product.product_id
            const qty = quantities[id] || 1

            return (
              <div key={id} style={styles.card}>

                <img
                  src={img_url + product.product_photo}
                  alt=""
                  style={styles.img}
                />

                <h3>{product.product_name}</h3>
                <p>{product.product_description}</p>
                <p><b>Ksh {product.product_cost}</b></p>

                <div style={styles.qtyBox}>
                  <button style={styles.btn} onClick={() => decreaseQty(id)}>-</button>
                  <span style={styles.qty}>{qty}</span>
                  <button style={styles.btn} onClick={() => increaseQty(id)}>+</button>
                </div>

                <button
                  style={styles.cartBtn}
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

                {/* ✅ NEW PURCHASE BUTTON */}
                <button
                  style={styles.buyBtn}
                  onClick={() => purchaseNow(product)}
                >
                  Purchase Now
                </button>

              </div>
            )
          })}

        </div>

        {/* PAGINATION */}
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}>
            Prev
          </button>

          <span> Page {currentPage} of {totalPages} </span>

          <button disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
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

export default GetProduct