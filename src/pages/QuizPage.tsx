import { useState } from "react";
import type { Question } from "../data/questions";
import ProgressBar from "../components/ProgressBar";
import styles from "./QuizPage.module.css";
import { motion } from "framer-motion";

type Props = {
  questions: Question[];
  answers: number[]; 
  setAnswers: (v: number[]) => void;
  onSubmit: () => void;
};

export default function QuizPage({ questions, answers, setAnswers, onSubmit }: Props) {
  const [index, setIndex] = useState(0);

  function selectOption(optIdx: number) {
    const copy = [...answers];
    copy[index] = optIdx;
    setAnswers(copy);
  }

  return (
    <div className={styles.pageWrapper}>
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Test Your Knowledge</h1>
        <p className={styles.subtitle}>Answer all questions to see your results</p>
      </header>

      <ProgressBar length={questions.length} current={index} onJump={(i) => setIndex(i)} />

      <motion.div key={questions[index].id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
        <div className={styles.questionCard}>
          {index + 1}. {questions[index].text}
        </div>

        <div className={styles.options}>
          {questions[index].options.map((opt: string, i: number) => {
            const selected = answers[index] === i;
            const btnClass = selected ? `${styles.optionBtn} ${styles.optionBtnSelected}` : styles.optionBtn;
            return (
              <button key={i} onClick={() => selectOption(i)} className={btnClass} aria-pressed={selected}>
                {opt}
              </button>
            );
          })}
        </div>

        <div className={styles.navRow}>
          <button className={styles.navButton} onClick={() => setIndex(Math.max(0, index - 1))}>← Prev</button>
          {index < questions.length - 1 ? (
            <button className={styles.navButton} onClick={() => setIndex(index + 1)}>Next →</button>
          ) : (
            <button className={styles.navButton} onClick={onSubmit}>Submit</button>
          )}
        </div>
      </motion.div>
    </div>
    </div>
  );
}
