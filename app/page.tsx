"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="h-12 w-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
          <span className="text-lg font-bold text-white">AD</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400">Redirecting to dashboard...</p>
      </div>
    </div>
  );
}