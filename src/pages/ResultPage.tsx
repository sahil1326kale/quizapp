import { useEffect, useState } from "react";
import { questions } from "../data/questions";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

type Props = {
  answers: number[];
  restart: () => void;
  onReview?: () => void;
};

export default function ResultPage({ answers, restart, onReview }: Props) {
  const correct = answers.reduce((acc, ans, i) => (ans === questions[i].correctIndex ? acc + 1 : acc), 0);
  const percent = Math.round((correct / questions.length) * 100);

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (percent >= 80) {
      setShowConfetti(true);
      const id = setTimeout(() => setShowConfetti(false), 6000);
      return () => clearTimeout(id);
    }
  }, [percent]);

 return (
  <div
    style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        width: "100%",
        maxWidth: "700px",
        textAlign: "center",
        padding: "40px 30px",
      }}
    >
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

      <div style={{ marginBottom: 18 }}>
        <span
          style={{
            background: "var(--card-bg)",
            padding: "8px 14px",
            borderRadius: 999,
          }}
        >
          Keep Learning!
        </span>
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 36,
          color: "var(--text)",
          marginBottom: 14,
        }}
      >
        Your Final score is
      </h2>

      <div
        style={{
          fontSize: 96,
          fontWeight: 800,
          color: "var(--text)",
        }}
      >
        {percent}
        <span style={{ fontSize: 32 }}>%</span>
      </div>

      <p style={{ marginTop: 18, color: "var(--muted)" }}>
        You answered <strong>{correct}</strong> out of{" "}
        <strong>{questions.length}</strong> correctly.
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          marginTop: 22,
        }}
      >
        <button
          onClick={restart}
          style={{
            padding: "10px 18px",
            borderRadius: 10,
            background: "linear-gradient(90deg,#dff6fb,#e6fbff)",
          }}
        >
          Start Again
        </button>

        <button
          onClick={onReview}
          style={{
            padding: "10px 18px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          Review Answers
        </button>
      </div>
    </motion.div>
  </div>
);
}
