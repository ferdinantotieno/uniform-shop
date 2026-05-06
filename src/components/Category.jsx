import React, { useState } from "react";

const Category = () => {
  const [cart, setCart] = useState([]);

  // 🛒 ADD TO CART (FIXED + SAFE)
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // 📦 PRODUCT DATA (clean structure)
  const products = [
    { id: 1, name: "Hand Gun", price: 2300 },
    { id: 2, name: "Short Gun", price: 2500 },
    { id: 3, name: "Rifle", price: 5000 },
    { id: 4, name: "Machine Gun", price: 8000 },
    { id: 5, name: "Sub Machine Gun", price: 6000 }
  ];

  // 🎨 STYLES
  const styles = {
    page: {
      padding: "20px",
      fontFamily: "Arial",
      background: "#f4f6f8",
      minHeight: "100vh"
    },

    title: {
      textAlign: "center",
      fontSize: "28px",
      marginBottom: "20px",
      color: "#2c3e50"
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px"
    },

    card: {
      background: "white",
      borderRadius: "15px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      transition: "0.3s"
    },

    image: {
      width: "100%",
      height: "160px",
      objectFit: "cover",
      borderRadius: "10px",
      background: "#ddd"
    },

    name: {
      fontSize: "18px",
      marginTop: "10px",
      color: "#2c3e50"
    },

    price: {
      color: "#e67e22",
      fontWeight: "bold",
      margin: "5px 0"
    },

    button: {
      background: "#3498db",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "8px"
    },

    cartBox: {
      marginTop: "30px",
      padding: "15px",
      background: "white",
      borderRadius: "10px"
    }
  };

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>🔥 Weapon Categories</h1>

      {/* PRODUCT GRID */}
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>

            <div style={styles.image}></div>

            <h3 style={styles.name}>{product.name}</h3>

            <p style={styles.price}>Ksh {product.price}</p>

            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>

      {/* CART PREVIEW */}
      <div style={styles.cartBox}>
        <h2>🛒 Cart Preview</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              {item.name} - {item.quantity} pcs
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Category;