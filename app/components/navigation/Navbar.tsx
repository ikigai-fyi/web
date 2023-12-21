import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Memories</Link>
        </li>
        <li>
          <button>Theme</button>
        </li>
        <li>
          <a href="mailto:vincent.ballet@me.com" title="Contact">
            Contact
          </a>
        </li>
        <li>
          <a
            href="https://apps.apple.com/us/app/memories-widget-for-strava/id6448870765"
            title="Download"
          >
            Download
          </a>
        </li>
      </ul>
    </nav>
  );
}
