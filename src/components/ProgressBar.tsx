
import styles from "./ProgressBar.module.css";

type Props = {
  length: number;
  current: number;
  onJump?: (idx: number) => void;
};

export default function ProgressBar({ length, current, onJump }: Props) {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          role="button"
          onClick={() => onJump && onJump(i)}
          className={`${styles.segment} ${i === current ? styles.segmentActive : ""}`}
          aria-current={i === current}
        />
      ))}
    </div>
  );
}
