import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const img_url = "https://ferdinant.alwaysdata.net/static/images/"

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  const increase = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decrease = (index) => {
    const updated = [...cart];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product_cost * item.quantity,
    0
  );

  const styles = {
    page: {
      padding: "20px",
      fontFamily: "Arial",
      backgroundColor: "#f4f6f8",
      minHeight: "100vh"
    },
    title: {
      textAlign: "center",
      fontSize: "30px",
      marginBottom: "20px"
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    },
    card: {
      background: "white",
      padding: "15px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      display: "flex",
      gap: "15px",
      alignItems: "center"
    },
    img: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "10px"
    },
    content: {
      flex: 1
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#2c3e50"
    },
    price: {
      color: "#e67e22",
      fontWeight: "bold"
    },
    qtyBox: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginTop: "5px"
    },
    btn: {
      padding: "5px 10px",
      border: "none",
      background: "#3498db",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer"
    },
    removeBtn: {
      background: "#e74c3c",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "6px",
      cursor: "pointer"
    },
    summary: {
      marginTop: "20px",
      padding: "15px",
      background: "white",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center"
    },
    total: {
      fontSize: "22px",
      fontWeight: "bold",
      color: "#27ae60"
    }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cart is empty</p>
      ) : (
        <>
          <div style={styles.grid}>
            {cart.map((item, index) => (
              <div key={item.cartItemId || index} style={styles.card}>

                {/* IMAGE */}
                <img
                  src={img_url + item.product_photo}
                  alt={item.product_name}
                  style={styles.img}
                />

                {/* CONTENT */}
                <div style={styles.content}>
                  <div style={styles.name}>{item.product_name}</div>

                  <div style={styles.price}>
                    Ksh {item.product_cost}
                  </div>

                  <div>
                    Subtotal:{" "}
                    <b>
                      Ksh {item.product_cost * item.quantity}
                    </b>
                  </div>

                  {/* QUANTITY */}
                  <div style={styles.qtyBox}>
                    <button style={styles.btn} onClick={() => decrease(index)}>-</button>
                    <span>{item.quantity}</span>
                    <button style={styles.btn} onClick={() => increase(index)}>+</button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  style={styles.removeBtn}
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div style={styles.summary}>
            <h2>Total Amount</h2>
            <div style={styles.total}>Ksh {total}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;