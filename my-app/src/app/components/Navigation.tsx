"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className="mb-6 flex justify-center">
      <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-2 py-1 shadow-sm">
        
        <Link 
          className={`rounded-full px-3 py-1 text-sm transition-all ${
            isActive("/")
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-zinc-100"
          }`} 
          href="/"
        >
          Home
        </Link>
        <Link 
          className={`rounded-full px-3 py-1 text-sm transition-all ${
            isActive("/landing")
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-zinc-100"
          }`} 
          href="/landing"
        >
          Landing page
        </Link>
        <Link 
          className={`rounded-full px-3 py-1 text-sm transition-all ${
            isActive("/customer")
              ? "bg-blue-600 text-white"
              : "text-gray-700 hover:bg-zinc-100"
          }`} 
          href="/customer"
        >
          Customer summary panel
        </Link>
        
      </div>
    </nav>
  );
}