"use client";

import { useState } from "react";
import config from "@/data/config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-gray-900">
                {config.name}
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#problems"
                className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
              >
                Problèmes
              </a>
              <a
                href="#benefits"
                className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
              >
                Avantages
              </a>
              <a
                href="#opportunities"
                className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
              >
                Pertes
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-red-600 transition-colors text-sm font-medium"
              >
                Qui suis-je
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg transition-all hover:scale-105"
              >
                💬 Parler à un expert
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="md:hidden border-t border-gray-100 bg-white py-4 space-y-1">
              <a
                href="#problems"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                🔍 Problèmes
              </a>
              <a
                href="#benefits"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                ⭐ Avantages
              </a>
              <a
                href="#opportunities"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                💰 Pertes
              </a>
              <a
                href="#about"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                👨‍🍳 Qui suis-je
              </a>
              <div className="px-4 pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block text-center bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-full font-semibold"
                >
                  💬 Parler à un expert
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="h-16 md:h-20" />
    </>
  );
}