"use client";

import React, {
  Children,
  ElementType,
  ReactNode,
  useState,
} from "react";
import {
  BarChart4,
  Users2,
  Settings,
  Swords,
  ScrollText,
  ChevronUp,
  ChevronDown,
  X,
} from "lucide-react";
import { Button, buttonStyles } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { useSidebar } from "@/context/SidebarContext";

export default function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
    <>
      <aside className="h-screen sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col ml-1 border-r-2 border-slate-100 hidden sm:flex lg:hidden">
        <SmallSidebarItem Icon={BarChart4} title="Dashboard" url="#" />
        <SmallSidebarItem Icon={Swords} title="Matches" url="#" />
        <SmallSidebarItem Icon={ScrollText} title="Leaderboard" url="#" />
        <SmallSidebarItem Icon={Users2} title="Players" url="#" />
        <SmallSidebarItem Icon={Settings} title="Settings" url="#" />
      </aside>
      {isOpen && (
        <div onClick={close} className='lg:hidden fixed inset-0 z-[998] bg-black opacity-50' />
      )}
      <aside
        className={`h-screen w-80 top-0 z-[999] overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 border-r-2 border-slate-100 lg:flex
      ${isOpen ? "absolute bg-white drop-shadow-lg" : "hidden"}
      `}
      >
        <LargeSidebarSection>
          {isOpen && (
            <Button onClick={close} variant="ghost" className='w-min float-right'>
              <X />
            </Button>
          )}
          <LargeSidebarItem
            isActive
            Icon={BarChart4}
            title="Dashboard"
            url="#"
          />
          <LargeSidebarItem Icon={Swords} title="Matches" url="#" />
          <LargeSidebarItem Icon={ScrollText} title="Leaderboard" url="#" />
          <LargeSidebarItem Icon={Users2} title="Players" url="#" />
          <LargeSidebarItem Icon={Settings} title="Settings" url="#" />
        </LargeSidebarSection>
      </aside>
    </>
  );
}

function LargeSidebarItem({
  Icon,
  title,
  url,
  isActive = false,
}) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-medium bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      <Icon className="w-6 h-6" strokeWidth={2} />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}



function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandedButton = isExpanded
    ? childrenArray
    : childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.splice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandedButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" strokeWidth={2} />
          <div>{isExpanded ? "Show Less" : "Show More"}</div>
        </Button>
      )}
    </div>
  );
}


function SmallSidebarItem({ Icon, title, url }) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded gap-1"
      )}
    >
      <Icon className="w-6 h-6" strokeWidth={2} />
      <div className="text-sm">{title}</div>
    </a>
  );
}
