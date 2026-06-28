'use client'

import React from 'react'
import Link from 'next/link'

import { Share2 } from 'lucide-react';
import { Facebook, Instagram, Twitter } from './SocialIcon';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <main className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4">🌿 Ecofy</div>
            <p className="text-gray-400 text-sm">
              Mostly organic purchases all kinds of organic, biodynamic, and
              natural fruits and vegetables from local producers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">My Account</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Helps</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Faqs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Proxy</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Product
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition">
                  Fruit & Vegetables
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Meat & Fish
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Bread & Bakery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  Beauty & Health
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © Ecofy eCommerce © 2022. All Rights Reserved
          </p>

          {/* Contact */}
          <div className="flex items-center gap-8 text-sm text-gray-400">
            <div>
              <p className="font-semibold text-white">(219) 555-0114</p>
              <p>pricey@gmail.com</p>
            </div>
          </div>

          {/* Payment Methods & Social */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <img src="/images/icons/pay.svg" alt="Pay" className="h-6" />
              <img src="/images/icons/visa.svg" alt="Visa" className="h-6" />
              <img
                src="/images/icons/mastercard.svg"
                alt="Mastercard"
                className="h-6"
              />
              <img src="/images/icons/amex.svg" alt="Amex" className="h-6" />
            </div>

            <div className="flex gap-4 ml-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <Share2 size={18} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram className="h-5 w-5"/>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </footer>
  )
}

export { Footer }
