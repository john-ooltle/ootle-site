// src/app/page.js

export default function Home() {
  return (
    <main>
      <header style={styles.header}>
        <div style={styles.container}>
          <h1 style={styles.logo}>Ootle</h1>
          <nav style={styles.nav}>
            <a href="#services" style={styles.navLink}>Services</a>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>
        </div>
      </header>

      <section style={styles.hero}>
        <div style={styles.container}>
          <h2 style={styles.headline}>Marketing Consultancy for Visionary Builders</h2>
          <p style={styles.subtext}>We help early-stage founders sharpen their message, reach the right audience, and grow smarter.</p>
        </div>
      </section>

      <section id="services" style={styles.services}>
        <div style={styles.container}>
          <h3 style={styles.sectionTitle}>What We Do</h3>
          <div style={styles.cards}>
            <div style={styles.card}>
              <h4 style={styles.cardTitle}>Go-to-Market Strategy</h4>
              <p>We help you define your positioning, messaging, and ideal customer profile.</p>
            </div>
            <div style={styles.card}>
              <h4 style={styles.cardTitle}>Demand Generation</h4>
              <p>From content to campaigns, we’ll get you in front of the right people.</p>
            </div>
            <div style={styles.card}>
              <h4 style={styles.cardTitle}>Startup Branding</h4>
              <p>Minimal, modern brand identity and web presence that speaks to your audience.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const styles = {
  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 0'
  },
  header: {
    background: 'white',
    borderBottom: '1px solid #eee',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: 'var(--color-text)'
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: 'var(--color-text)',
    fontWeight: 500,
  },
  hero: {
    padding: '5rem 0',
    textAlign: 'center',
    background: '#ffffff'
  },
  headline: {
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '1rem'
  },
  subtext: {
    fontSize: '1.125rem',
    color: '#555',
    maxWidth: '700px',
    margin: '0 auto'
  },
  services: {
    background: 'var(--color-bg)',
    padding: '4rem 0'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '2rem'
  },
  cards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.04)',
    transition: 'transform 0.3s',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.5rem'
  }
};
