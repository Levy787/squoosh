"use client";

import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

const SidebarContext = createContext(null);

export function useSidebar() {
  const value = useContext(SidebarContext);
  if (!value) throw Error("useSidebar must be used with SidebarProvider.");
  return value;
}

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
m
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);

  function toggle() {
    console.log("Toggle");
    setIsOpen((s) => !s);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </SidebarContext.Provider>
  );
}
