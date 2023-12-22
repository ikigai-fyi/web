import styles from "./Card.module.css";

type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
