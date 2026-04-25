import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className={styles.aboutHero}>
        <div className="container animate-fade-in">
          <h1 className={styles.aboutTitle}>Meet Your Tutor</h1>
          <p className={styles.aboutSubtitle}>
            A Chartered Accountant passionate about simplifying complex financial concepts for professional students.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={`container animate-fade-in ${styles.card}`}>
          <h2>Professional Background</h2>
          <p>
            Welcome to TreasurePoint Tutors. As a practicing Chartered Accountant, I understand firsthand the rigor and dedication required to pass professional accounting exams, particularly the ICAN examinations.
          </p>
          <p>
            Over the years, I have tutored hundreds of students in Financial Management, Financial Reporting, and Audit & Investigation. My teaching philosophy is built on breaking down the most complex standards and calculations into their simplest, most digestible forms.
          </p>
        </div>

        <div className={`container animate-fade-in ${styles.card}`}>
          <h2>Credentials & Expertise</h2>
          <ul className={styles.credentialsList}>
            <li>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Associate Chartered Accountant (ACA)
            </li>
            <li>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Specialist in Financial Reporting (IFRS) and Auditing Standards (ISA)
            </li>
            <li>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              Proven track record of high student pass rates
            </li>
          </ul>
        </div>

        <div className="text-center mt-4 mb-8">
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
        </div>
      </section>
    </>
  );
}
