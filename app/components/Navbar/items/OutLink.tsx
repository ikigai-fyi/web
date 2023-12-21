import styles from "./styles.module.css";

type OutLinkProps = {
  title: string;
  url: string;
};

export default function OutLink({ title, url }: OutLinkProps) {
  return (
    <a className={styles.navItem} href={url} title={title}>
      {title}
    </a>
  );
}
