import HomeLink from "./items/HomeLink";
import ThemeSwitch from "./items/ThemeSwitch";
import OutLink from "./items/OutLink";
export default function Navbar() {
  return (
    <nav className="flex flex-col flex-wrap	text-center sm:flex-row sm:text-left sm:justify-between w-full p-12">
      <HomeLink />
      <ThemeSwitch />
      <div className="flex-grow"></div>
      <OutLink url="mailto:vincent.ballet@me.com" title="Contact" />
      <OutLink
        url="https://apps.apple.com/us/app/memories-widget-for-strava/id6448870765"
        title="Download"
      />
    </nav>
  );
}
