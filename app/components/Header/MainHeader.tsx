"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MainHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
  //   <div className="border-b">
  //     <div className="container mx-auto flex h-20 items-center justify-between gap-10 px-4">
  //       {/* Logo */}
  //       <h1 className="text-3xl font-bold text-green-600">
  //         Ecofy
  //       </h1>

  //       {/* Search */}
  //        <div className="flex flex-1 max-w-2xl">
  //     <Input
  //       placeholder="Search..."
  //       className="rounded-r-none"
  //     />

  //     <Button className="rounded-l-none">
  //       <Search className="h-4 w-4" />
  //     </Button>
  //   </div>

  //       {/* Phone */}
  //       {/* <div className="hidden lg:flex items-center gap-2">
  //         <Phone className="h-5 w-5" />

  //         <div>
  //           <p className="text-xs text-muted-foreground">
  //             Call Us
  //           </p>
  //           <p className="font-medium">
  //             (+880) 123-456-789
  //           </p>
  //         </div>
  //       </div> */}

  //       {/* Icons */}
  //  <div className="flex items-center gap-5">
  //     <button>
  //       <Heart className="h-5 w-5" />
  //     </button>

  //     <button>
  //       <ShoppingCart className="h-5 w-5" />
  //     </button>
  //   </div>
  //     </div>
    //   </div>
    
          // {/* Main Header */}
      <div className="container p-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/app-logo.png"
              alt="Ecofy Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-semibold text-gray-900">Ecofy</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden w-1/2 mx-8 md:flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <Search size={20} className="text-gray-400 ml-4" />
            <Input
              type="text"
              placeholder="Search"
              className="border-0 shadow-none focus:ring-0 focus:ring-offset-0"
            />
            <Button
              variant="default"
              size="sm"
              className="rounded-none px-8 py-6 bg-primary-500 hover:bg-primary/90 text-white font-semibold m-0"
            >
              Search
            </Button>
          </div>

          {/* Right Actions */}
        <div className="flex items-center gap-4">
          
            <Link
            href="/wishlist"
              // title="Wishlist"
              className="relative hidden md:flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-lg transition"
            >
              <Heart size={20} className="text-gray-700" />
              {/* {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {wishlist.length}
                </span>
              )} */}
            </Link>

            <Link
              href="/cart"
              // title="Shopping Cart"
              className="relative flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-lg transition"
            >
              <ShoppingCart size={20} className="text-gray-700" />
              {/* {Array(5).length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {Array(5).length}
                </span>
              )} */}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
  );
}