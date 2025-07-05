"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Hydration complete. Checking for mismatches...");
    }
  }, []);

  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen font-[var(--font-geist-sans)]">
      <SidebarProvider>
        <AppSidebar />
        <main className="flex flex-col gap-[var(--spacing-32)] row-start-2 items-center sm:items-start">
          <SidebarTrigger />
          {/* Content */}
        </main>
      </SidebarProvider>
      <footer className="row-start-3 flex gap-[var(--spacing-24)] flex-wrap items-center justify-center">
        {/* Footer */}
      </footer>
    </div>
  );
}