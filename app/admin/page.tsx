import Card from "./Card/Card";
import styles from "./styles.module.css";

async function getMetrics() {
  const res = await fetch("https://api.ikigai.fyi/admin/metrics");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Admin() {
  const metrics = await getMetrics();
  const cards = metrics.metrics.map(
    (metric: { title: string; content: string }) => {
      return (
        <Card
          key={metric.title}
          title={metric.title}
          content={metric.content}
        />
      );
    }
  );

  return (
    <main>
      <h1 className={styles.title}>Top secret metrics</h1>
      <div className={styles.container}>{cards}</div>
    </main>
  );
}
