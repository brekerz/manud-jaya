'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-primary">Desa Manud Jaya</div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className={cn("text-sm hover:text-primary", pathname === "/" && "font-medium text-primary")}>
            Discover
          </Link>
          <Link href="#" className={cn("text-sm hover:text-primary", pathname === "/trending" && "font-medium text-primary")}>
            Trending Tours
          </Link>
          <Link href="/destination" className={cn("text-sm hover:text-primary", pathname === "/destination" && "font-medium text-primary")}>
            Destination Wishlist
          </Link>
          <Link href="#" className={cn("text-sm hover:text-primary", pathname === "/recommend" && "font-medium text-primary")}>
            Recommended
          </Link>
          <Link href="#" className={cn("text-sm hover:text-primary", pathname === "/contact" && "font-medium text-primary")}>
            Contact
          </Link>
        </nav>

        <Button>Sign In</Button>
      </div>
    </header>
  )
}

