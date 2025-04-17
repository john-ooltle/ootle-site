export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <h1>Ootle</h1>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
          <li><a href="#">Services</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Marketing for Product-Led Startups</h2>
        <p style={{ maxWidth: '600px' }}>
          We help early-stage and growing startups get in front of the right people — without guesswork, fluff, or bloated agencies.
        </p>
      </section>

      <section>
        <h3>What We Do</h3>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: 0, listStyle: 'none' }}>
          <li style={{ flex: '1 1 30%' }}>
            <strong>Strategy</strong>
            <p>Positioning, messaging, growth planning and more.</p>
          </li>
          <li style={{ flex: '1 1 30%' }}>
            <strong>Execution</strong>
            <p>Campaigns, content, paid media and product marketing.</p>
          </li>
          <li style={{ flex: '1 1 30%' }}>
            <strong>Insights</strong>
            <p>Web analytics, customer research and experiments.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
