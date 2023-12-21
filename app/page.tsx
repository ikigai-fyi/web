import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        className="rounded-3xl"
        src="/memories-icon.png"
        alt="Memories icon"
        width={100}
        height={100}
      />

      <h1>Memories, widgets for Strava</h1>

      <Link href="/admin">Go to admin</Link>
    </div>
  );
}
