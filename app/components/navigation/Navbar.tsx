import HomeLink from "./items/HomeLink";
import ThemeSwitch from "./items/ThemeSwitch";
import OutLink from "./items/OutLink";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <HomeLink />
        </li>
        <li>
          <ThemeSwitch />
        </li>
        <li>
          <OutLink url="mailto:vincent.ballet@me.com" title="Contact" />
        </li>
        <li>
          <OutLink
            url="https://apps.apple.com/us/app/memories-widget-for-strava/id6448870765"
            title="Download"
          />
        </li>
      </ul>
    </nav>
  );
}
