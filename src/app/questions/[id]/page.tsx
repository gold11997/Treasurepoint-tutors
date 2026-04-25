import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

export default async function QuestionDetail({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: question, error } = await supabase
    .from('questions')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !question) {
    notFound();
  }

  // A simple helper to render the content neatly if it's not being parsed as markdown
  const renderContent = (content: string) => {
    // Check if it looks like markdown and needs manual cleaning for the demo
    if (content.includes('##') || content.includes('|')) {
      return (
        <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
          {content.split('\n').map((line, i) => {
            if (line.startsWith('##')) {
              return <h2 key={i} style={{ color: 'var(--primary-color)', marginTop: '2rem', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>{line.replace(/#/g, '').trim()}</h2>
            }
            if (line.startsWith('|')) {
              // Simple table rendering logic for the demo
              const cells = line.split('|').filter(c => c.trim() !== '');
              if (line.includes('---')) return null;
              return (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: `repeat(${cells.length}, 1fr)`, gap: '1rem', padding: '0.75rem', borderBottom: '1px solid var(--border-color)', background: i === 0 || line.includes('Item') ? 'rgba(30, 58, 138, 0.05)' : 'transparent', fontWeight: i === 0 || line.includes('Item') ? '600' : '400' }}>
                  {cells.map((cell, j) => <span key={j}>{cell.trim()}</span>)}
                </div>
              )
            }
            if (line.startsWith('*')) {
              return <p key={i} style={{ paddingLeft: '1rem', position: 'relative' }}>• {line.replace(/\*/g, '').trim()}</p>
            }
            return <p key={i} style={{ marginBottom: '1rem' }}>{line.replace(/\*\*/g, '')}</p>
          })}
        </div>
      );
    }
    return <div style={{ whiteSpace: 'pre-wrap' }}>{content}</div>;
  };

  return (
    <div className="container animate-fade-in">
      <header style={{ marginBottom: '2rem' }}>
        <Link href="/questions" style={{ color: 'var(--primary-color)', fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to Questions Bank
        </Link>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{question.title}</h1>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
          <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{question.subject}</span>
          <span>{question.diet_year} Diet</span>
          <span>Difficulty: <span style={{ color: question.difficulty === 'Hard' ? '#ef4444' : '#10b981' }}>{question.difficulty}</span></span>
        </div>
      </header>

      <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
        <div className="card glass" style={{ padding: '2.5rem' }}>
          {renderContent(question.content)}
        </div>

        <div className="card glass" style={{ marginTop: '2rem', background: 'rgba(30, 58, 138, 0.05)', border: '1px solid rgba(30, 58, 138, 0.1)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Tutor Professional Tip</h3>
          <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
            Remember to always show your workings clearly in the exam. Marks are awarded for methodology even if the final figure has a minor arithmetic error.
          </p>
        </div>
      </div>
    </div>
  );
}
