import React, { useState } from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  EnvelopeIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "ダッシュボード", icon: HomeIcon, href: "/", current: true },
  { name: "チーム", icon: UsersIcon, href: "#", count: 3, current: false },
  {
    name: "プロジェクト",
    icon: FolderIcon,
    href: "#",
    current: false,
  },
  { name: "カレンダー", icon: CalendarIcon, href: "#", current: false },
  {
    name: "ドキュメント",
    icon: InboxIcon,
    href: "#",
    current: false,
  },
  { name: "報告書", icon: ChartBarIcon, href: "reports", current: false },
  {
    name: "お問い合わせ",
    icon: EnvelopeIcon,
    href: "contact",
    current: false,
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar(): JSX.Element {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  return (
    <div
      className="flex min-h-0 flex-1 flex-col bg-indigo-700 h-full relative z-10"
      onClick={() => {
        setIsShowing(!isShowing);
      }}
    >
      <div className="flex flex-1 flex-col overflow-y-auto pb-4">
        <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-indigo-800 text-white"
                  : "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                aria-hidden="true"
              />
              <span
                className={classNames(
                  isShowing ? "inline whitespace-nowrap" : "hidden",
                  "flex-1  md:inline"
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
