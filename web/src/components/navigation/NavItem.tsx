import { NavLink } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { isDesktop } from "react-device-detect";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import { NavData } from "@/types/navigation";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const variants = {
  primary: {
    active:
      "font-semibold text-selected-foreground bg-selected hover:bg-selected-hover",
    inactive:
      "text-muted-foreground bg-transparent hover:bg-selected/25 hover:text-foreground",
  },
  secondary: {
    active: "font-bold text-selected",
    inactive: "text-secondary-foreground",
  },
};

type NavItemProps = {
  className?: string;
  item: NavData;
  Icon: IconType;
  onClick?: () => void;
  large?: boolean;
  showLabel?: boolean;
};

export default function NavItem({
  className,
  item,
  Icon,
  onClick,
  large,
  showLabel,
}: NavItemProps) {
  const { t } = useTranslation(["common"]);
  if (item.enabled == false) {
    return;
  }

  const content = (
    <NavLink
      to={item.url}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex flex-col items-center justify-center rounded-xl p-[6px]",
          showLabel && "h-11 flex-row justify-start gap-3 px-3 text-sm",
          className,
          large && "size-12",
          variants[item.variant ?? "primary"][isActive ? "active" : "inactive"],
        )
      }
    >
      <Icon className={large ? "size-6" : "size-5"} />
      {showLabel && <span>{t(item.title)}</span>}
    </NavLink>
  );

  if (isDesktop && !showLabel) {
    return (
      <Tooltip>
        <TooltipTrigger>{content}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side="right">
            <p>{t(item.title)}</p>
          </TooltipContent>
        </TooltipPortal>
      </Tooltip>
    );
  }

  return content;
}
