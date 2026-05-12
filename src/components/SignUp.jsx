import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const [loading, setLoading] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const [showPassword, setShowPassword] = useState(false)

  // ✅ PASSWORD STRENGTH STATE
  const getStrength = (pass) => {
    if (pass.length < 6) return { label: "Weak 🔴", color: "red" }
    if (pass.match(/[A-Z]/) && pass.match(/[0-9]/) && pass.length >= 8)
      return { label: "Strong 🟢", color: "green" }
    return { label: "Medium 🟠", color: "orange" }
  }

  const strength = getStrength(password)

  const submit = async (e) => {
    e.preventDefault()

    setLoading("please wait...")
    setError("")
    setSuccess("")

    try {
      const data = new FormData()

      data.append("username", username)
      data.append("email", email)
      data.append("phone", phone)
      data.append("password", password)

      const response = await axios.post(
        "https://ferdinant.alwaysdata.net/api/signup",
        data
      )

      setLoading("")
      setSuccess(response.data.message)

      setUsername("")
      setEmail("")
      setPhone("")
      setPassword("")

    } catch (error) {
      setLoading("")
      setError(error.message)
    }
  }

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f4f6f8",
      display: "flex",
      flexDirection: "column"
    },

    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      padding: "30px",
      fontFamily: "Arial"
    },

    card: {
      width: "400px",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      background: "#fff"
    },

    title: {
      textAlign: "center",
      marginBottom: "20px"
    },

    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      outline: "none"
    },

    passwordBox: {
      position: "relative",
      marginBottom: "10px"
    },

    eye: {
      position: "absolute",
      right: "10px",
      top: "35%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "18px"
    },

    button: {
      width: "100%",
      padding: "10px",
      background: "#3498db",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px"
    },

    footer: {
      background: "#2c3e50",
      color: "white",
      textAlign: "center",
      padding: "20px",
      marginTop: "20px"
    }
  }

  return (
    <div style={styles.page}>

      <div style={styles.container}>
        <div style={styles.card}>

          <h1 style={styles.title}>Sign Up</h1>

          <form onSubmit={submit}>

            <p style={{ color: "orange" }}>{loading}</p>
            <p style={{ color: "green" }}>{success}</p>
            <p style={{ color: "red" }}>{error}</p>

            <input
              style={styles.input}
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              style={styles.input}
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              style={styles.input}
              type="tel"
              placeholder="Enter phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <div style={styles.passwordBox}>
              <input
                style={styles.input}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <span
                style={styles.eye}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* ✅ PASSWORD STRENGTH DISPLAY */}
            {password && (
              <p style={{ color: strength.color, marginTop: "-10px" }}>
                Password Strength: {strength.label}
              </p>
            )}

            <button style={styles.button} type="submit">
              Sign Up
            </button>

          </form>

          <p style={{ marginTop: "10px", textAlign: "center" }}>
            Already have an account? <Link to="/signin">Sign In</Link>
          </p>

        </div>
      </div>

      <footer style={styles.footer}>
        <h3>My Shop</h3>
        <p>Quality products at affordable prices</p>
        <p>© 2026 All Rights Reserved</p>
      </footer>

    </div>
  )
}

export default SignUp