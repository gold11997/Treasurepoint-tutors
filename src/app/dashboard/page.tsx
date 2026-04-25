import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { logout } from "../auth/actions";

export default async function Dashboard() {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/login');
  }

  return (
    <div className="container animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1>Student Dashboard</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Logged in as: {user.email}</p>
        </div>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/dashboard" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Overview</Link>
          <Link href="/questions" className="nav-link">Questions Bank</Link>
          <Link href="/community" className="nav-link">Community</Link>
          <form action={logout}>
            <button type="submit" className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
              Log out
            </button>
          </form>
        </nav>
      </header>

      <div className="grid">
        <div className="card glass">
          <h2>100+ Solved Questions</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Dive into our comprehensive database of ICAN past questions, solved with simple, professional methodologies.
          </p>
          <Link href="/questions" className="btn btn-primary">Browse Questions</Link>
        </div>

        <div className="card glass">
          <h2>Video Resources</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Watch detailed walkthroughs of complex calculations and reporting standards.
          </p>
          <Link href="/resources" className="btn btn-secondary">Watch Videos</Link>
        </div>

        <div className="card glass">
          <h2>Peer Community</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            Join discussion groups, ask questions, and collaborate with other students preparing for the same exams.
          </p>
          <Link href="/community" className="btn btn-outline">Join Discussion</Link>
        </div>
      </div>
    </div>
  );
}
