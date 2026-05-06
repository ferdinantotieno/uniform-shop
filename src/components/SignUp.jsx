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

  // 👁️ password visibility state
  const [showPassword, setShowPassword] = useState(false)

  const submit = async (e) => {
    e.preventDefault()

    setLoading("please wait...")

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

  // ===== STYLES =====
  const styles = {
    container: {
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
      border: "1px solid #ccc"
    },
    passwordBox: {
      position: "relative",
      marginBottom: "15px"
    },
    eye: {
      position: "absolute",
      right: "10px",
      top: "50%",
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
      cursor: "pointer"
    }
  }

  return (
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

          {/* PASSWORD WITH EYE ICON */}
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

          <button style={styles.button} type="submit">
            Sign Up
          </button>

        </form>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>

      </div>
    </div>
  )
}

export default SignUp