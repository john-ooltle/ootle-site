export default function Home() {
  return (
    <main style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#F3F4F6', color: '#111827', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2rem',
        borderBottom: '1px solid #E5E7EB'
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Ootle</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#111827' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: '#111827' }}>Services</a>
          <a href="#" style={{ textDecoration: 'none', color: '#111827' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: '#ffffff'
      }}>
        <h2 style={{ fontSize: '2.75rem', fontWeight: '700', marginBottom: '1rem' }}>
          Launch smarter. Grow faster.
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Ootle helps startups and funded teams launch marketing campaigns, email outreach, and lead generation — all from one powerful platform.
        </p>
        <button style={{
          backgroundColor: '#4F46E5',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Join the Waitlist
        </button>
      </section>

      {/* Services Teaser */}
      <section style={{
        padding: '4rem 2rem',
        backgroundColor: '#F9FAFB'
      }}>
        <h3 style={{ fontSize: '2rem', fontWeight: '600', textAlign: 'center', marginBottom: '2rem' }}>
          What We Offer
        </h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div>
            <h4 style={{ fontWeight: '600' }}>🚀 Campaign Launchpad</h4>
            <p style={{ color: '#4B5563' }}>Quickly launch Google, Facebook, and LinkedIn Ads with guided AI support.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: '600' }}>📧 Email Marketing</h4>
            <p style={{ color: '#4B5563' }}>Create and send high-converting email campaigns to your leads.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: '600' }}>📱 Social Media Scheduling</h4>
            <p style={{ color: '#4B5563' }}>Plan and automate your social content across platforms in one place.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
