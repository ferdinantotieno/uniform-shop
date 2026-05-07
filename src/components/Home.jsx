import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const styles = {
    page: {
      fontFamily: "Arial",
      minHeight: "100vh",
      background: "#f4f6f8"
    },
    hero: {
      background: "linear-gradient(135deg, #3498db, #2ecc71)",
      color: "white",
      padding: "80px 20px",
      textAlign: "center",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px"
    },
    heroTitle: {
      fontSize: "40px",
      marginBottom: "10px"
    },
    heroText: {
      fontSize: "18px",
      marginBottom: "20px"
    },
    button: {
      padding: "12px 25px",
      border: "none",
      borderRadius: "25px",
      background: "#fff",
      color: "#2c3e50",
      fontWeight: "bold",
      cursor: "pointer",
      textDecoration: "none"
    },
    features: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "40px 20px"
    },
    card: {
      background: "white",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center"
    },
    cardTitle: {
      color: "#2c3e50",
      marginBottom: "10px"
    },
    cardText: {
      color: "#7f8c8d"
    }
  };

  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to My Shop 🛍️</h1>
        <p style={styles.heroText}>
          Your one-stop shop for everything you need at the best prices
        </p>

        {/* FIX: make sure route exists */}
        <Link to="/getproducts" style={styles.button}>
          Shop Now
        </Link>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🚚 Fast Delivery</h2>
          <p style={styles.cardText}>Get your products delivered quickly and safely</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>💰 Affordable Prices</h2>
          <p style={styles.cardText}>We offer the best market prices for all items</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>⭐ Quality Products</h2>
          <p style={styles.cardText}>Only high-quality and trusted products</p>
        </div>

      </section>

    </div>
  );
};

export default Home;