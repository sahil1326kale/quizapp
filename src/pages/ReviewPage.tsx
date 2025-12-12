
import type { Question } from "../data/questions";
import styles from "./ReviewPage.module.css";

type Props = {
  questions: Question[];
  answers: number[]; 
  onRestart: () => void;
  onBackToResult?: () => void;
};

export default function ReviewPage({ questions, answers, onRestart, onBackToResult }: Props) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>Review your answers</h1>
        <p className={styles.subtitle}>See what you answered and the correct answers</p>
      </header>

      <div>
        {questions.map((q, i) => {
          const user = answers[i];
          const correctIndex = q.correctIndex;
          return (
            <section key={q.id} className={styles.qCard}>
              <div className={styles.qTitle}>
                {i + 1}. {q.text}
              </div>

              <div className={styles.optionsRow}>
                {q.options.map((opt, idx) => {
                  const isCorrect = idx === correctIndex;
                  const isUser = idx === user;
                  const boxClass = [
                    styles.optionBox,
                    isCorrect ? styles.optionCorrect : ""
                  ].join(" ");

                  return (
                    <div key={idx} className={boxClass}>
                      <div style={{ flex: 1 }}>{opt}</div>

                      <div>
                        {isCorrect && (
                          <span className={styles.badgeCorrect} aria-hidden>
                            ✓ Correct
                          </span>
                        )}
                        {!isCorrect && isUser && (
                          <span className={styles.badgeUser} aria-hidden>
                            Your answer
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
        <button onClick={onBackToResult} style={{ padding: "10px 14px", borderRadius: 8 }}>Back</button>
        <button onClick={onRestart} style={{ padding: "10px 14px", borderRadius: 8, background: "linear-gradient(90deg,#dff6fb,#e6fbff)" }}>Restart Quiz</button>
      </div>
    </div>
  );
}
