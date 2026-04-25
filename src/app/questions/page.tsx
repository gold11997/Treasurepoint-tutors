import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { logout } from "../auth/actions";

export default async function QuestionsBank() {
  const supabase = createClient();
  const { data: questions, error } = await supabase
    .from('questions')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="container animate-fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1>Questions Bank</h1>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <Link href="/dashboard" className="nav-link">Overview</Link>
          <Link href="/questions" style={{ fontWeight: '600', color: 'var(--primary-color)' }}>Questions Bank</Link>
          <Link href="/community" className="nav-link">Community</Link>
          <form action={logout}>
            <button type="submit" className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>
              Log out
            </button>
          </form>
        </nav>
      </header>

      <input 
        type="text" 
        placeholder="Search for topics, standards (e.g., IFRS 9), or keywords..." 
        className="glass"
        style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '2rem', background: 'var(--glass-bg)', color: 'var(--text-color)' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {questions && questions.length > 0 ? (
          questions.map((q) => (
            <div key={q.id} className="card glass" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{q.title}</h3>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{q.subject}</span>
                  <span>{q.diet_year}</span>
                  <span>• {q.difficulty}</span>
                </div>
              </div>
              <Link href={`/questions/${q.id}`} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
                View Solution
              </Link>
            </div>
          ))
        ) : (
          <div className="card glass" style={{ textAlign: 'center', padding: '4rem' }}>
            <h2>No questions found</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Once you add questions to your Supabase database, they will appear here automatically.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
