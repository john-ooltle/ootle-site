export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Sticky Navigation */}
      <header className="bg-white fixed top-0 left-0 w-full z-50 shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-4xl text-red-600 font-bold mb-6">
  This should be red if Tailwind is working
</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 transition">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Push content down to avoid overlap */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600">
            Launch smarter. Grow faster.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Ootle helps startups and funded teams launch marketing campaigns, email outreach, and lead generation — all from one powerful platform.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
            Join the Waitlist
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-indigo-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">🚀 Campaign Launchpad</h3>
              <p className="text-gray-600">Quickly launch Google, Facebook, and LinkedIn Ads with guided AI support.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">📧 Email Marketing</h3>
              <p className="text-gray-600">Create and send high-converting email campaigns to your leads.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">📱 Social Media Scheduling</h3>
              <p className="text-gray-600">Plan and automate your social content across platforms in one place.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
