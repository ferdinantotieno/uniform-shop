import React from "react";

const AboutUs = () => {

  const styles = {
    page: {
      fontFamily: "Arial",
      background: "#f4f6f8",
      paddingBottom: "40px"
    },

    hero: {
      background: "linear-gradient(135deg, #2c3e50, #3498db)",
      color: "white",
      textAlign: "center",
      padding: "70px 20px",
      borderBottomLeftRadius: "30px",
      borderBottomRightRadius: "30px"
    },

    heroTitle: {
      fontSize: "40px",
      marginBottom: "10px"
    },

    heroText: {
      fontSize: "16px",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: "1.6"
    },

    section: {
      maxWidth: "1000px",
      margin: "40px auto",
      background: "white",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    },

    sectionTitle: {
      color: "#2c3e50",
      marginBottom: "10px"
    },

    text: {
      color: "#555",
      lineHeight: "1.7"
    },

    twoColumns: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap"
    },

    column: {
      flex: "1",
      minWidth: "250px"
    },

    stats: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
      marginTop: "30px"
    },

    statBox: {
      background: "#fff",
      padding: "20px",
      borderRadius: "12px",
      width: "180px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    },

    statNumber: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#27ae60"
    },

    team: {
      maxWidth: "1000px",
      margin: "40px auto"
    },

    teamContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center"
    },

    teamCard: {
      background: "white",
      padding: "20px",
      borderRadius: "15px",
      width: "220px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
    },

    role: {
      color: "#777"
    }
  };

  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>About Us</h1>
        <p style={styles.heroText}>
          We are a regulated and responsible supplier of security equipment,
          committed to safety, accountability, and compliance with national laws.
        </p>
      </section>

      {/* STORY */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story</h2>
        <p style={styles.text}>
          Many licensed firearms dealers operate under strict regulations with full documentation
          and government oversight. Our focus is ensuring transparency, compliance, and responsible distribution
          of security equipment to authorized clients only.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section style={{ ...styles.section, ...styles.twoColumns }}>

        <div style={styles.column}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.text}>
            To operate under full legal compliance while ensuring safe and responsible distribution
            of security equipment.
          </p>
        </div>

        <div style={styles.column}>
          <h2 style={styles.sectionTitle}>Our Vision</h2>
          <p style={styles.text}>
            To set the standard for ethical, transparent, and secure trade in regulated security products.
          </p>
        </div>

      </section>

      {/* STATS */}
      <section style={styles.stats}>

        <div style={styles.statBox}>
          <div style={styles.statNumber}>1000+</div>
          <p>Customers</p>
        </div>

        <div style={styles.statBox}>
          <div style={styles.statNumber}>50+</div>
          <p>Products</p>
        </div>

        <div style={styles.statBox}>
          <div style={styles.statNumber}>5+</div>
          <p>Years Experience</p>
        </div>

      </section>

      {/* TEAM */}
      <section style={styles.team}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Team</h2>

        <div style={styles.teamContainer}>

          <div style={styles.teamCard}>
            <h3>Daniel Mwangi</h3>
            <p style={styles.role}>CEO</p>
          </div>

          <div style={styles.teamCard}>
            <h3>Brian Otieno</h3>
            <p style={styles.role}>Developer</p>
          </div>

          <div style={styles.teamCard}>
            <h3>Kevin Kariuki</h3>
            <p style={styles.role}>Designer</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;