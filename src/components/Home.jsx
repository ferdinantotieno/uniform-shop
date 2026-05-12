import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  // ✅ WATCH CAROUSEL IMAGES ONLY
  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    "https://images.unsplash.com/photo-1547996160-81dfa63595aa"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

    carousel: {
      width: "100%",
      maxWidth: "600px",
      margin: "30px auto",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    },

    carouselImg: {
      width: "100%",
      height: "300px",
      objectFit: "cover"
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

    footerTitle: {
      marginBottom: "10px"
    },

    footerText: {
      color: "#dcdde1",
      lineHeight: "1.8"
    },

    footerBottom: {
      textAlign: "center",
      marginTop: "20px",
      borderTop: "1px solid #7f8c8d",
      paddingTop: "15px",
      color: "#dcdde1"
    }
  };

  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>⌚ Welcome to Watch World</h1>

        <p style={styles.heroText}>
          Discover luxury, smart, and stylish watches at the best prices
        </p>

        <Link to="/getproducts" style={styles.button}>
          Shop Watches
        </Link>

        {/* CAROUSEL */}
        <div style={styles.carousel}>
          <img
            src={images[current]}
            alt="watch"
            style={styles.carouselImg}
          />
        </div>

      </section>

      {/* FEATURES */}
      <section style={styles.features}>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>🚚 Fast Delivery</h2>
          <p style={styles.cardText}>
            Get your favorite watches delivered quickly and safely
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>💰 Affordable Prices</h2>
          <p style={styles.cardText}>
            We offer premium watches at unbeatable prices
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>⭐ Premium Quality</h2>
          <p style={styles.cardText}>
            Explore high-quality luxury and smart watches
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>

        <div style={styles.footerContainer}>

          <div>
            <h2 style={styles.footerTitle}>Watch World</h2>
            <p style={styles.footerText}>
              Your trusted online store for luxury, smart, and classic watches.
            </p>
          </div>

          <div>
            <h2 style={styles.footerTitle}>Quick Links</h2>

            <p>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Home
              </Link>
            </p>

            <p>
              <Link
                to="/getproducts"
                style={{ color: "white", textDecoration: "none" }}
              >
                Watches
              </Link>
            </p>
          </div>

          <div>
            <h2 style={styles.footerTitle}>Contact</h2>

            <p style={styles.footerText}>📞 +254 712 345 678</p>
            <p style={styles.footerText}>📧 watchworld@gmail.com</p>
            <p style={styles.footerText}>📍 Nairobi, Kenya</p>
          </div>

        </div>

        <div style={styles.footerBottom}>
          © 2026 Watch World. All rights reserved.
        </div>

      </footer>

    </div>
  );
};

export default Home;