"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import {
  Download,
  Calendar,
  TrendingUp,
  TrendingDown,
  Eye,
  MousePointer,
  DollarSign,
  Target,
  Users,
  ShoppingCart,
} from "lucide-react";

const performanceData = [
  { month: "Jan", revenue: 12000, clicks: 8400, impressions: 125000 },
  { month: "Feb", revenue: 15000, clicks: 9200, impressions: 138000 },
  { month: "Mar", revenue: 18000, clicks: 11000, impressions: 156000 },
  { month: "Apr", revenue: 22000, clicks: 13500, impressions: 178000 },
  { month: "May", revenue: 25000, clicks: 15200, impressions: 195000 },
  { month: "Jun", revenue: 28000, clicks: 16800, impressions: 210000 },
];

const platformData = [
  { name: "Google Ads", value: 45, color: "#4285F4" },
  { name: "Facebook", value: 30, color: "#1877F2" },
  { name: "Instagram", value: 15, color: "#E4405F" },
  { name: "LinkedIn", value: 10, color: "#0A66C2" },
];

const conversionData = [
  { day: "Mon", conversions: 45, revenue: 4200 },
  { day: "Tue", conversions: 52, revenue: 5800 },
  { day: "Wed", conversions: 48, revenue: 5100 },
  { day: "Thu", conversions: 61, revenue: 6100 },
  { day: "Fri", conversions: 68, revenue: 7200 },
  { day: "Sat", conversions: 55, revenue: 6800 },
  { day: "Sun", conversions: 72, revenue: 7500 },
];

const reportMetrics = [
  {
    title: "Total Revenue",
    value: "$120,000",
    change: "+12.5%",
    isPositive: true,
    icon: DollarSign,
    color: "text-emerald-600",
  },
  {
    title: "Total Impressions",
    value: "1.2M",
    change: "+8.2%",
    isPositive: true,
    icon: Eye,
    color: "text-blue-600",
  },
  {
    title: "Total Clicks",
    value: "74,100",
    change: "+15.3%",
    isPositive: true,
    icon: MousePointer,
    color: "text-purple-600",
  },
  {
    title: "Avg. CTR",
    value: "6.18%",
    change: "+2.1%",
    isPositive: true,
    icon: Target,
    color: "text-orange-600",
  },
  {
    title: "Conversions",
    value: "2,401",
    change: "+18.7%",
    isPositive: true,
    icon: ShoppingCart,
    color: "text-pink-600",
  },
  {
    title: "New Users",
    value: "12,543",
    change: "-3.2%",
    isPositive: false,
    icon: Users,
    color: "text-indigo-600",
  },
];

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("last-30-days");
  const [reportType, setReportType] = useState("performance");

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const exportReport = (format: string) => {
    // Simulate export functionality
    console.log(`Exporting report as ${format}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Analytics Reports
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Comprehensive insights and performance analytics across all your campaigns.
          </p>
        </div>
        
        <div className="flex space-x-3">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-48">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-7-days">Last 7 days</SelectItem>
              <SelectItem value="last-30-days">Last 30 days</SelectItem>
              <SelectItem value="last-90-days">Last 90 days</SelectItem>
              <SelectItem value="last-year">Last year</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" onClick={() => exportReport('pdf')}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          
          <Button variant="outline" onClick={() => exportReport('csv')}>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {metric.title}
                  </p>
                  <div className="flex items-baseline space-x-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {metric.value}
                    </h3>
                    <Badge
                      variant={metric.isPositive ? "default" : "destructive"}
                      className={
                        metric.isPositive
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }
                    >
                      {metric.isPositive ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {metric.change}
                    </Badge>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Over Time */}
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Performance Over Time
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Revenue, clicks, and impressions trends
            </p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
                <YAxis className="text-gray-600 dark:text-gray-400" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="revenue" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Platform Distribution */}
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Traffic by Platform
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Distribution of traffic across advertising platforms
            </p>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'var(--background)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {platformData.map((platform, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: platform.color }}
                ></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {platform.name} ({platform.value}%)
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Conversion Trends */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Conversion Trends (Last 7 Days)
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Daily conversion rates and revenue correlation
          </p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={conversionData}>
              <defs>
                <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="day" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="conversions"
                stroke="#8B5CF6"
                strokeWidth={2}
                fill="url(#conversionGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Report Summary */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Report Summary
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Key insights and recommendations based on your campaign performance
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start space-x-3 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
            <TrendingUp className="h-5 w-5 text-emerald-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-emerald-900 dark:text-emerald-300">
                Strong Performance Growth
              </h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
                Your campaigns show a consistent 12.5% revenue increase over the selected period. 
                Google Ads is your top-performing platform.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <Target className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900 dark:text-blue-300">
                Optimization Opportunity
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                Consider reallocating budget from LinkedIn to Facebook and Instagram 
                for better ROI based on current conversion rates.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <Users className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-yellow-900 dark:text-yellow-300">
                User Acquisition Focus
              </h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                New user acquisition has decreased by 3.2%. Consider launching 
                brand awareness campaigns to expand your audience reach.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}