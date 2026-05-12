import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const img_url = "https://ferdinant.alwaysdata.net/static/images/";

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

  // ✅ M-PESA PAYMENT FUNCTION (STK PUSH)
  const purchase = async () => {
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://ferdinant.alwaysdata.net/api/mpesa/stkpush",
        {
          phone,
          amount: total
        }
      );

      alert(response.data.message || "Payment request sent to phone");
    } catch (error) {
      alert("Payment failed: " + error.message);
    }

    setLoading(false);
  };

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
    },

    input: {
      width: "100%",
      padding: "10px",
      marginTop: "10px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: "1px solid #ccc"
    },

    purchaseBtn: {
      marginTop: "10px",
      padding: "12px",
      width: "100%",
      background: "#2ecc71",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px"
    },

    footer: {
      background: "#2c3e50",
      color: "white",
      padding: "40px 20px",
      marginTop: "40px"
    }
  };

  return (
    <div style={styles.page}>
      <div>
        <h1 style={styles.title}>🛒 Your Cart</h1>

        {cart.length === 0 ? (
          <p style={{ textAlign: "center" }}>Cart is empty</p>
        ) : (
          <>
            <div style={styles.grid}>
              {cart.map((item, index) => (
                <div key={index} style={styles.card}>
                  <img
                    src={img_url + item.product_photo}
                    alt={item.product_name}
                    style={styles.img}
                  />

                  <div style={styles.content}>
                    <div style={styles.name}>{item.product_name}</div>
                    <div style={styles.price}>Ksh {item.product_cost}</div>

                    <div>
                      Subtotal:{" "}
                      <b>Ksh {item.product_cost * item.quantity}</b>
                    </div>

                    <div style={styles.qtyBox}>
                      <button style={styles.btn} onClick={() => decrease(index)}>-</button>
                      <span>{item.quantity}</span>
                      <button style={styles.btn} onClick={() => increase(index)}>+</button>
                    </div>
                  </div>

                  <button
                    style={styles.removeBtn}
                    onClick={() => removeItem(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* PAYMENT SECTION */}
            <div style={styles.summary}>
              <h2>Total Amount</h2>
              <div style={styles.total}>Ksh {total}</div>

              <input
                style={styles.input}
                type="text"
                placeholder="Enter M-Pesa Phone (e.g. 254712345678)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <button
                style={styles.purchaseBtn}
                onClick={purchase}
                disabled={loading}
              >
                {loading ? "Processing..." : "Pay with M-Pesa 💳"}
              </button>
            </div>
          </>
        )}
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <h3>My Shop</h3>
        <p>© 2026 All rights reserved</p>
      </footer>
    </div>
  );
};

export default Cart;