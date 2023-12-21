import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Image
        className="rounded-3xl"
        src="/memories-icon.png"
        alt="Memories icon"
        width={100}
        height={100}
      />

      <h1>Memories, widgets for Strava</h1>

      <Link href="/admin">Go to admin</Link>
    </main>
  );
}
