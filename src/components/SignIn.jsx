import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const navigate = useNavigate();

  // ✅ PASSWORD STRENGTH CHECKER (ADDED)
  const getStrength = (pass) => {
    let strength = 0

    if (pass.length >= 6) strength++
    if (/[A-Z]/.test(pass)) strength++
    if (/[0-9]/.test(pass)) strength++
    if (/[@$!%*?&]/.test(pass)) strength++

    if (strength <= 1) return { text: "Weak", color: "red" }
    if (strength === 2 || strength === 3) return { text: "Medium", color: "orange" }
    return { text: "Strong", color: "green" }
  }

  const strength = getStrength(password)

  const submit = async (e) => {
    e.preventDefault()
    setLoading("please wait....")

    try {
      const data = new FormData()
      data.append("email", email)
      data.append("password", password)

      const response = await axios.post(
        "https://ferdinant.alwaysdata.net/api/signin",
        data
      )

      setLoading("")

      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user))
        setSuccess(response.data.message)

        setTimeout(() => {
          navigate("/getproduct")
        }, 2000)

      } else {
        setError(response.data.message)
      }

      setEmail("")
      setPassword("")

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: "#f4f6f8",
      fontFamily: "Arial"
    },

    container: {
      display: "flex",
      justifyContent: "center",
      padding: "40px"
    },

    card: {
      width: "400px",
      padding: "20px",
      borderRadius: "12px",
      background: "white",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
    },

    strength: {
      fontSize: "14px",
      marginTop: "5px",
      marginBottom: "10px",
      fontWeight: "bold"
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

      <div style={styles.container}>
        <div style={styles.card}>

          <h1>SignIn</h1>

          <form onSubmit={submit}>
            <p style={{ color: "orange" }}>{loading}</p>
            <p style={{ color: "green" }}>{success}</p>
            <p style={{ color: "red" }}>{error}</p>

            <input
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /><br />

            <input
              type="password"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* ✅ PASSWORD STRENGTH DISPLAY */}
            {password && (
              <div style={{ ...styles.strength, color: strength.color }}>
                Strength: {strength.text}
              </div>
            )}

            <br />

            <input
              type="submit"
              value="Sign In"
              style={{
                background: "#3498db",
                color: "white",
                padding: "10px",
                width: "100%",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            />

            <p style={{ marginTop: "10px" }}>
              Dont have an account? <Link to="/signup">Sign Up</Link>
            </p>

          </form>

        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div>
            <h3>My Shop</h3>
            <p>Best online shopping platform</p>
          </div>

          <div>
            <h3>Links</h3>
            <p><Link to="/" style={{ color: "white" }}>Home</Link></p>
            <p><Link to="/getproduct" style={{ color: "white" }}>Products</Link></p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>📞 +254 712 345 678</p>
            <p>📧 shop@gmail.com</p>
          </div>
        </div>

        <div style={styles.footerBottom}>
          © 2026 My Shop. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

export default SignIn