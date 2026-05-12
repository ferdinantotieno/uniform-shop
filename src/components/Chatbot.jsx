import React, { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "⌚ Hi! I’m your watch shop assistant. Ask me about watches."
    }
  ]);

  // 🤖 WATCH RESPONSE SYSTEM
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    // 👋 GREETINGS
    if (text.includes("hello") || text.includes("hi")) {
      return "👋 Hello! Welcome to our watch store. How can I help you today?";
    }

    // ⌚ PRODUCTS
    if (text.includes("product") || text.includes("watch")) {
      return "⌚ We sell luxury watches, smart watches, sports watches, and classic watches.";
    }

    // 📦 CATEGORIES
    if (text.includes("category")) {
      return "📦 Categories include Luxury Watches, Smart Watches, Sports Watches, and Casual Watches.";
    }

    // 🛒 CART
    if (text.includes("cart")) {
      return "🛒 Your cart contains the watches you want to purchase.";
    }

    // ⌚ WATCH TYPES
    if (text.includes("smart")) {
      return "📱 Smart watches come with fitness tracking, notifications, and apps.";
    }

    if (text.includes("luxury")) {
      return "💎 Luxury watches are premium timepieces made with high-quality materials.";
    }

    if (text.includes("sports")) {
      return "🏃 Sports watches are designed for durability and fitness activities.";
    }

    if (text.includes("digital")) {
      return "🕒 Digital watches display time electronically and often include extra features.";
    }

    if (text.includes("analog")) {
      return "⌚ Analog watches use hour and minute hands for displaying time.";
    }

    // 💳 PAYMENT
    if (text.includes("mpesa") || text.includes("pay")) {
      return "💳 You can securely pay using M-Pesa during checkout.";
    }

    // 🚚 DELIVERY
    if (text.includes("delivery") || text.includes("shipping")) {
      return "🚚 We deliver watches countrywide within 1–3 business days.";
    }

    // 🔐 AUTH
    if (text.includes("login") || text.includes("signin")) {
      return "🔐 Use the Sign In page to access your account.";
    }

    if (text.includes("signup")) {
      return "📝 Create a new account using the Sign Up page.";
    }

    // ❓ DEFAULT
    return "🤖 I didn’t understand that. Try asking about watches, categories, cart, payment, or delivery.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      sender: "user",
      text: input
    };

    const botMsg = {
      sender: "bot",
      text: getBotReply(input)
    };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div>

      {/* 💬 FLOAT BUTTON */}
      <button style={styles.fab} onClick={() => setOpen(!open)}>
        ⌚
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div style={styles.chatBox}>

          <div style={styles.header}>
            Watch Assistant
            <span onClick={() => setOpen(false)} style={styles.close}>
              ✖
            </span>
          </div>

          <div style={styles.body}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  ...styles.msg,
                  alignSelf:
                    m.sender === "user"
                      ? "flex-end"
                      : "flex-start",
                  background:
                    m.sender === "user"
                      ? "#3498db"
                      : "#ecf0f1",
                  color:
                    m.sender === "user"
                      ? "white"
                      : "black"
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div style={styles.inputBox}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about watches..."
              style={styles.input}
            />
            <button onClick={sendMessage} style={styles.btn}>
              ➤
            </button>
          </div>

        </div>
      )}

    </div>
  );
};

// 🎨 STYLES
const styles = {
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#3498db",
    color: "white",
    fontSize: "24px",
    border: "none",
    cursor: "pointer",
    zIndex: 1000
  },

  chatBox: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "320px",
    height: "420px",
    background: "white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    zIndex: 1000
  },

  header: {
    background: "#2c3e50",
    color: "white",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between"
  },

  close: {
    cursor: "pointer"
  },

  body: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    background: "#f4f6f8"
  },

  msg: {
    padding: "8px",
    margin: "5px",
    borderRadius: "10px",
    maxWidth: "80%"
  },

  inputBox: {
    display: "flex",
    borderTop: "1px solid #ddd"
  },

  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none"
  },

  btn: {
    padding: "10px",
    background: "#3498db",
    color: "white",
    border: "none",
    cursor: "pointer"
  }
};

export default Chatbot;