import { Outlet, useLocation } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
