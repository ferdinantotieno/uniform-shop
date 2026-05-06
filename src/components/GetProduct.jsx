import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const GetProduct = () => {

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [quantities, setQuantities] = useState({})

  const navigate = useNavigate()
  const img_url = "https://ferdinant.alwaysdata.net/static/images/"

  const filteredProducts = products.filter((p) =>
    p.product_name.toLowerCase().includes(search.toLowerCase())
  )

  // ➕ INCREASE
  const increaseQty = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: (prev[id] || 1) + 1
    }))
  }

  // ➖ DECREASE
  const decreaseQty = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1)
    }))
  }

  // 🛒 ADD TO CART
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

  const fetchProducts = async () => {
    setLoading("Loading products...")
    try {
      const res = await axios.get(
        "https://ferdinant.alwaysdata.net/api/getproductdetails"
      )
      setProducts(res.data)
      setLoading("")
    } catch (err) {
      setError(err.message)
      setLoading("")
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // 🎨 INLINE STYLES
  const styles = {
    page: {
      padding: "20px",
      fontFamily: "Arial",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh"
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
      textAlign: "center",
      transition: "0.3s"
    },
    img: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "10px"
    },
    name: {
      fontSize: "18px",
      color: "#2c3e50",
      marginTop: "10px"
    },
    price: {
      color: "#e67e22",
      fontWeight: "bold",
      marginBottom: "10px"
    },
    qtyBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      margin: "10px 0"
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
      minWidth: "20px",
      fontWeight: "bold"
    },
    cartBtn: {
      background: "#f39c12",
      color: "white",
      border: "none",
      padding: "8px",
      borderRadius: "6px",
      cursor: "pointer",
      width: "100%",
      marginTop: "5px"
    },
    buyBtn: {
      background: "#2ecc71",
      color: "white",
      border: "none",
      padding: "8px",
      borderRadius: "6px",
      cursor: "pointer",
      width: "100%",
      marginTop: "5px"
    }
  }

  return (
    <div style={styles.page}>

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

        {filteredProducts.map((product) => {

          const id = product.id || product.product_id

          return (
            <div key={id} style={styles.card}>

              <img
                src={img_url + product.product_photo}
                alt=""
                style={styles.img}
              />

              <h3 style={styles.name}>{product.product_name}</h3>
              <p>{product.product_description}</p>
              <p style={styles.price}>Ksh {product.product_cost}</p>

              {/* ➕ QUANTITY CONTROL */}
              <div style={styles.qtyBox}>
                <button style={styles.btn} onClick={() => decreaseQty(id)}>-</button>

                <span style={styles.qty}>
                  {quantities[id] || 1}
                </span>

                <button style={styles.btn} onClick={() => increaseQty(id)}>+</button>
              </div>

              {/* 🛒 ACTION BUTTONS */}
              <button
                style={styles.cartBtn}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <button
                style={styles.buyBtn}
                onClick={() =>
                  navigate("/mpesa", {
                    state: {
                      product,
                      quantity: quantities[id] || 1
                    }
                  })
                }
              >
                Purchase Now
              </button>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default GetProduct