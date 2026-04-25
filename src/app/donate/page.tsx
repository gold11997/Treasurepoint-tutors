import Link from "next/link";

export default function Donate() {
  return (
    <div className="container animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1>Support TreasurePoint Tutors</h1>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/dashboard" className="nav-link">Overview</Link>
          <Link href="/questions" className="nav-link">Questions Bank</Link>
          <Link href="/community" className="nav-link">Community</Link>
        </nav>
      </header>

      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Empower the Next Generation of Accountants</h2>
        <p style={{ lineHeight: 1.8, marginBottom: '2.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          TreasurePoint Tutors is dedicated to providing high-quality, simplified solutions and resources to professional students. Your free-will donation helps us maintain the platform, record more video lectures, and support students across Nigeria, the UK, Canada, and Ghana.
        </p>

        <div className="card glass" style={{ textAlign: 'center', padding: '3rem', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '2rem' }}>Make a Free-Will Donation</h3>
          
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-outline" style={{ minWidth: '100px' }}>₦5,000</button>
            <button className="btn btn-outline" style={{ minWidth: '100px' }}>₦10,000</button>
            <button className="btn btn-outline" style={{ minWidth: '100px' }}>₦20,000</button>
            <button className="btn btn-primary" style={{ minWidth: '100px' }}>Custom</button>
          </div>

          <button className="btn btn-secondary" style={{ width: '100%', padding: '1.25rem', fontSize: '1.2rem', fontWeight: '600', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            Donate Securely via Paystack
          </button>
          <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            We securely accept all major debit cards and bank transfers locally and internationally.
          </p>
        </div>
      </div>
    </div>
  );
}
