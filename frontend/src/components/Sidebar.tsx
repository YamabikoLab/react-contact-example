import React from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  EnvelopeIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "ダッシュボード", icon: HomeIcon, href: "#", current: true },
  { name: "チーム", icon: UsersIcon, href: "#", count: 3, current: false },
  {
    name: "プロジェクト",
    icon: FolderIcon,
    href: "#",
    count: 4,
    current: false,
  },
  { name: "カレンダー", icon: CalendarIcon, href: "#", current: false },
  {
    name: "ドキュメント",
    icon: InboxIcon,
    href: "#",
    count: 12,
    current: false,
  },
  { name: "報告書", icon: ChartBarIcon, href: "#", current: false },
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
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-indigo-700 h-full">
      <div className="flex flex-1 flex-col overflow-y-auto pb-4">
        <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-indigo-800 text-white"
                  : "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75",
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              )}
            >
              <item.icon
                className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                aria-hidden="true"
              />
              <span className="flex-1">{item.name}</span>
              {item.count != null ? (
                <span
                  className={classNames(
                    item.current ? "bg-indigo-600" : "bg-indigo-800",
                    "ml-3 inline-block rounded-full py-0.5 px-3 text-xs font-medium"
                  )}
                >
                  {item.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
