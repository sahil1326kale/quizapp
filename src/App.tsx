import { useState } from "react";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import ReviewPage from "./pages/ReviewPage";
import { questions } from "./data/questions";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [view, setView] = useState<"quiz" | "result" | "review">("quiz");

  const submitAnswers = () => setView("result");
  const restart = () => {
    setAnswers(Array(questions.length).fill(-1));
    setView("quiz");
  };

  return (
    <div style={{ minHeight: "100vh", padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 12 }}>
        <ThemeToggle />
      </div>

      {view === "quiz" && (
        <QuizPage
          questions={questions}
          answers={answers}
          setAnswers={setAnswers}
          onSubmit={() => submitAnswers()}
        />
      )}

      {view === "result" && (
        <ResultPage
          answers={answers}
          restart={() => { restart(); }}
          onReview={() => setView("review")}
        />
      )}

      {view === "review" && (
        <ReviewPage
          questions={questions}
          answers={answers}
          onRestart={() => { restart(); }}
          onBackToResult={() => setView("result")}
        />
      )}
    </div>
  );
}
