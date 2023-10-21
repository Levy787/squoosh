"use client";

import { useSidebar } from "@/context/SidebarContext";
import { Button } from "@/components/ui/button";
import { Menu, Bell, PlusSquare } from "lucide-react";

export default function Header() {
  const { toggle } = useSidebar();

  const date = new Date().toLocaleDateString("en-au", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <header className="border-b-2 border-slate-100 h-min p-4 flex items-center justify-between sticky top-0 bg-white">
      <Button variant="ghost" onClick={toggle} className="sm:hidden">
        <Menu />
      </Button>
      <div className="font-bold text-gray-800 text-lg hidden sm:block">
        {date}
      </div>
      <div className="sm:hidden">Logo</div>
      <div className='flex items-center gap-4'>
        <Button variant="ghost" onClick={() => {}} className='flex items-center gap-1'>
          <PlusSquare />
          <div >Add Game</div>
        </Button>
        <Button variant="ghost" onClick={() => {}}>
          <Bell />
        </Button>
      </div>
    </header>
  );
}
