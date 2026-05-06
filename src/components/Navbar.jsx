import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      background: "#2c3e50",
      color: "white",
      fontFamily: "Arial"
    },

    logo: {
      fontSize: "22px",
      fontWeight: "bold"
    },

    links: {
      display: "flex",
      gap: "20px",
      listStyle: "none"
    },

    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "16px"
    },

    button: {
      padding: "8px 15px",
      background: "#3498db",
      border: "none",
      borderRadius: "5px",
      color: "white",
      cursor: "pointer"
    }
  }

  return (
    <nav style={styles.nav}>

      {/* LOGO */}
      <div style={styles.logo}>
        🛍️ MyShop
      </div>

      {/* LINKS */}
      <ul style={styles.links}>
        <li><Link style={styles.link} to="/home">Home</Link></li>
        <li><Link style={styles.link} to="/getproducts">GetProducts</Link></li>
        <li><Link style={styles.link} to="/category">Category</Link></li>
        <li><Link style={styles.link} to="/aboutus">About Us</Link></li>
        <li><Link style={styles.link} to="/cart">Cart</Link></li>
        <li><Link style={styles.link} to="/signin">Sign In</Link></li>
          <li><Link style={styles.link} to="/signup">Sign Up</Link></li>
            <li><Link style={styles.link} to="/addproduct">AddProduct</Link></li>
      </ul>

      {/* OPTIONAL BUTTON (you can remove if not needed) */}
      <Link to="/signup">
        <button style={styles.button}>
          Sign Up
        </button>
      </Link>

    </nav>
  )
}

export default Navbar