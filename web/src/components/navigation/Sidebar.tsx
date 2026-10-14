import Logo from "../Logo";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import GeneralSettings from "../menu/GeneralSettings";
import AccountSettings from "../menu/AccountSettings";
import useNavigation from "@/hooks/use-navigation";

function Sidebar() {
  const navbarLinks = useNavigation();

  return (
    <aside className="scrollbar-container scrollbar-hidden absolute inset-y-0 left-0 z-10 flex w-[232px] flex-col justify-between overflow-y-auto border-r border-border bg-card px-3 py-4">
      <span tabIndex={0} className="sr-only" />
      <div className="flex w-full flex-col gap-1">
        <Link to="/" className="mb-4 flex items-center gap-3 px-3">
          <Logo className="size-8 text-selected" />
          <span className="text-[15px] font-bold tracking-wide">Frigate</span>
        </Link>
        {navbarLinks.map((item) => (
          <NavItem key={item.id} item={item} Icon={item.icon} showLabel />
        ))}
      </div>
      <div className="mb-8 flex flex-col gap-1">
        <GeneralSettings showLabel />
        <AccountSettings showLabel />
      </div>
    </aside>
  );
}

export default Sidebar;
