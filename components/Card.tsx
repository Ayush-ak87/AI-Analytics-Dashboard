"use client";

import { DivideIcon as LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  value: string;
  changePercent: string;
  icon: LucideIcon;
  isPositive: boolean;
}

export function Card({ title, value, changePercent, icon: Icon, isPositive }: CardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <div className="flex items-baseline space-x-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {value}
            </h3>
            <span
              className={cn(
                "text-sm font-medium px-2 py-1 rounded-full",
                isPositive
                  ? "text-emerald-700 bg-emerald-100 dark:text-emerald-300 dark:bg-emerald-900"
                  : "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-900"
              )}
            >
              {changePercent}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}