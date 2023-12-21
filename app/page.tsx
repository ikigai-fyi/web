import Image from "next/image";
import styles from "./styles.module.css";
import DownloadButton from "./components/DownloadButton/DownloadButton";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image
        className={styles.memoriesIcon}
        src="/memories-icon.png"
        alt="Memories icon"
        width={100}
        height={100}
      />

      <h1>Memories, widgets for Strava</h1>
      <p className={styles.quote}>
        "Love the app. Only just got into running this year, and it's really
        motivational to be reminder of my past efforts" — Andy
      </p>
      <DownloadButton />
    </main>
  );
}
