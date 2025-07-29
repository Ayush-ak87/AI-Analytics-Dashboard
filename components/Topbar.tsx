"use client";

import { ThemeToggle } from "./ThemeToggle";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Topbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-6">
        <div className="flex items-center space-x-4 flex-1">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            AI Dashboard
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search..."
              className="w-64 pl-10 bg-gray-50 dark:bg-gray-800 border-0 focus-visible:ring-1"
            />
          </div>
          
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-medium">3</span>
            </span>
          </Button>
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* User Avatar */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
            <span className="text-sm font-medium text-white">AD</span>
          </div>
        </div>
      </div>
    </header>
  );
}