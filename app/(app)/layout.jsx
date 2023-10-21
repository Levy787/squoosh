import Sidebar from "@/components/app/Sidebar";
import Header from "@/components/app/Header";
import { Button } from "@/components/ui/button";
import { SidebarProvider } from "@/context/SidebarContext";

export default function AppLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="max-h-screen grid sm:grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <Sidebar />
        <div>
          <Header />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}
