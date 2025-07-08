import { cookies } from "next/headers";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export default async function Home() {
  const cookieStore = await cookies()
  const defaultOpen = (await cookieStore).get("sidebar_state")?.value === "true"

  const HEADER_HEIGHT = "30px";

  return (
    <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen font-[var(--font-inter)]">
      <SidebarProvider 
        defaultOpen={defaultOpen}
        style={
              {
                "--header-height": HEADER_HEIGHT,
              } as React.CSSProperties
            }
        >
        <main className="flex flex-col w-full gap-[var(--spacing-32)] row-start-2 items-center sm:items-start">
          <div className="header sticky top-0 flex flex-nowrap w-full h-[var(--header-height)] pl-2 items-center justify-between">
            <div className="logo max-h-full">
              <Image
                src="/logo.svg"
                alt="Marukoshi"
                width={100}
                height={100}
                className="max-h-[70px] h-full w-auto"
              />
            </div>
            <SidebarTrigger className="h-full self-end cursor-pointer bg-white rounded-br-none rounded-tr-none" />
          </div>
          {/* Content */}
          <div className="hero mt-[calc(-1_*_var(--header-height))] bg-[url('https://picsum.photos/id/840/2400/1200')] bg-cover bg-center h-screen w-full">
            <div className="hero-content flex flex-col items-center justify-center h-full text-center text-white bg-transparent bg-opacity-50 p-8">
              <h1 className="text-4xl font-bold mb-4">Welcome to Marukoshi</h1>
              <p className="text-lg mb-6">Your one-stop solution for all your needs.</p>
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
                Get Started
              </button>
            </div>
          </div>
        </main>
        <AppSidebar />
      </SidebarProvider>
      <footer className="row-start-3 flex gap-[var(--spacing-24)] flex-wrap items-center justify-center">
        {/* Footer */}
      </footer>
    </div>
  );
}