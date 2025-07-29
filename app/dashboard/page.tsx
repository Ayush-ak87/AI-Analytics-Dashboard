"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/Card";
import { RevenueLineChart } from "@/components/RevenueLineChart";
import { DataTable } from "@/components/DataTable";
import { kpiMetrics, revenueData, campaignData } from "@/lib/mockData";
import { 
  DollarSign, 
  Eye, 
  MousePointer, 
  Target,
} from "lucide-react";

const iconMap = {
  DollarSign,
  Eye,
  MousePointer,
  Target,
};

export default function DashboardPage() {
  const [metrics, setMetrics] = useState(kpiMetrics);

  // Simulate real-time KPI updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(currentMetrics =>
        currentMetrics.map(metric => {
          const changeValue = (Math.random() - 0.5) * 0.5;
          const newChangeNum = parseFloat(metric.changePercent.replace(/[+%]/g, '')) + changeValue;
          const formattedChange = newChangeNum >= 0 
            ? `+${newChangeNum.toFixed(1)}%` 
            : `${newChangeNum.toFixed(1)}%`;
          
          return {
            ...metric,
            changePercent: formattedChange,
            isPositive: newChangeNum >= 0,
          };
        })
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back to ADmyBRAND Insights
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor your campaigns, track performance, and optimize your marketing strategy.
        </p>
      </div>

      {/* KPI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = iconMap[metric.icon as keyof typeof iconMap];
          return (
            <Card
              key={index}
              title={metric.title}
              value={metric.value}
              changePercent={metric.changePercent}
              icon={IconComponent}
              isPositive={metric.isPositive}
            />
          );
        })}
      </div>

      {/* Revenue Chart */}
      <RevenueLineChart data={revenueData} />

      {/* Campaign Performance Table */}
      <DataTable data={campaignData} />
    </div>
  );
}