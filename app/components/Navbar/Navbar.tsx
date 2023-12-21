import Spacer from "../Spacer/Spacer";
import HomeLink from "./items/HomeLink";
import OutLink from "./items/OutLink";
import ThemeSwitch from "./items/ThemeSwitch";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <HomeLink />
      <ThemeSwitch />
      <Spacer />
      <OutLink url="mailto:vincent.ballet@me.com" title="Contact" />
      <OutLink
        url="https://apps.apple.com/us/app/memories-widget-for-strava/id6448870765"
        title="Download"
      />
    </nav>
  );
}
