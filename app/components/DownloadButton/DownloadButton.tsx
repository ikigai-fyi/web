import Image from "next/image";
import styles from "./DownloadButton.module.css";

export default function DownloadButton() {
  return (
    <a
      className={styles.container}
      href="https://apps.apple.com/us/app/memories-widget-for-strava/id6448870765"
    >
      <p>Download</p>
      <Image src="/download.svg" width={18} height={18} alt="Download icon" />
    </a>
  );
}
