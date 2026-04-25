import Link from "next/link";

export default function Community() {
  return (
    <div className="container animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1>Student Community</h1>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/dashboard" className="nav-link">Overview</Link>
          <Link href="/questions" className="nav-link">Questions Bank</Link>
          <Link href="/community" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Community</Link>
        </nav>
      </header>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Discussion Boards</h2>
        <button className="btn btn-primary">New Discussion</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="card glass" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Clarification on IFRS 15 Revenue Recognition Step 3</h3>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span>Posted by: Sarah J.</span>
              <span>• 2 hours ago</span>
              <span>• 5 Replies</span>
            </div>
          </div>
          <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>View Thread</span>
        </div>

        <div className="card glass" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Study Group for May Diet - Financial Management</h3>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span>Posted by: Michael B.</span>
              <span>• 1 day ago</span>
              <span>• 12 Replies</span>
            </div>
          </div>
          <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>View Thread</span>
        </div>

        <div className="card glass" style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Tutor Verified: How to easily remember Audit Assertions</h3>
            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <span style={{ background: 'rgba(52, 211, 153, 0.1)', color: '#10b981', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontWeight: '600' }}>Pinned</span>
              <span>Posted by: Tutor</span>
              <span>• 3 days ago</span>
              <span>• 45 Replies</span>
            </div>
          </div>
          <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>View Thread</span>
        </div>
      </div>
    </div>
  );
}
