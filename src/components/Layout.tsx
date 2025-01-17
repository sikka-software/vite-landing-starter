import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";
import { ThemeProvider } from "next-themes";
import { Footerdemo } from "./ui/footer-section";

export default function Layout() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
    >
      <div className="min-h-screen w-full bg-background">
        <TopBar />
        <div className="flex w-full p-4">
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
        <Footerdemo />
      </div>
    </ThemeProvider>
  );
}
