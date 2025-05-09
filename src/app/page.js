export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Navigation */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Ootle</h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
          Launch smarter. Grow faster.
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#4B5563', maxWidth: '600px', marginBottom: '2rem' }}>
          Ootle helps startups and funded teams launch marketing campaigns, email outreach, and lead generation — all from one powerful platform.
        </p>
        <button>Join the Waitlist</button>
      </section>

      {/* Services Teaser */}
      <section>
        <h3 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '2rem' }}>What We Offer</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
