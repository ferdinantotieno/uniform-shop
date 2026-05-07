import React, { useState } from "react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hi! I’m your shop assistant. Ask me about guns"
    }
  ]);

  // 🤖 ADVANCED RESPONSE SYSTEM
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    // 🛍️ GENERAL SHOP
    if (text.includes("hello") || text.includes("hi")) {
      return "👋 Hello! Welcome to our store. How can I help you today?";
    }

    if (text.includes("product")) {
      return "🛍️ We sell uniforms, pistols, rifles, and accessories.";
    }

    if (text.includes("category")) {
      return "📦 Categories include Pistols, Rifles, Automatic Weapons, and Accessories.";
    }

    if (text.includes("cart")) {
      return "🛒 Your cart holds selected products before checkout.";
    }

    // 🔫 WEAPONS INFO
    if (text.includes("pistol")) {
      return "🔫 Pistols are short-range firearms used for close combat.";
    }

    if (text.includes("rifle")) {
      return "🎯 Rifles are long-range weapons with high accuracy.";
    }

    if (text.includes("machine")) {
      return "⚡ Machine guns can fire continuously while holding the trigger.";
    }

    if (text.includes("sub machine")) {
      return "🔫 Sub Machine Guns are compact and fast-firing weapons.";
    }

    // 💳 PAYMENT
    if (text.includes("mpesa") || text.includes("pay")) {
      return "💳 You can pay securely using M-Pesa in the payment section.";
    }

    // 🚚 DELIVERY
    if (text.includes("delivery") || text.includes("shipping")) {
      return "🚚 We deliver across the country within 1–3 business days.";
    }

    // 🔐 AUTH
    if (text.includes("login") || text.includes("signin")) {
      return "🔐 Use Sign In page to access your account.";
    }

    if (text.includes("signup")) {
      return "📝 Create an account using the Sign Up page.";
    }

    // ❓ DEFAULT
    return "🤖 I didn’t understand that. Try asking about products, categories, cart, or payment.";
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
        💬
      </button>

      {/* CHAT WINDOW */}
      {open && (
        <div style={styles.chatBox}>

          <div style={styles.header}>
            AI Assistant
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
              placeholder="Ask something..."
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