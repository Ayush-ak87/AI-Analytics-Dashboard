# ADmyBRAND Insights - AI-Powered Analytics Dashboard

A modern, responsive analytics dashboard built for digital marketing agencies to track campaigns, monitor performance, and optimize marketing strategies.

## 🚀 Features

### Core Dashboard Features
- **Real-time KPI Metrics**: Revenue, Impressions, Clicks, and CTR with live updates
- **Interactive Charts**: Beautiful line charts with real-time data visualization
- **Campaign Management**: Sortable data table with campaign performance metrics
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### UI/UX Features
- **Modern Design System**: Consistent colors, typography, and spacing
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Smooth Animations**: Micro-interactions, hover effects, and loading states
- **Beautiful Visual Hierarchy**: Clear information architecture and navigation

### Technical Features
- **Next.js 14**: Built with App Router for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn/ui**: Beautiful, accessible UI components
- **Recharts**: Interactive and responsive chart library
- **Real-time Updates**: Simulated live data updates for metrics and charts

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Theme**: next-themes
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/admybrand-dashboard.git
cd admybrand-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
/app
  /dashboard
    page.tsx          # Main dashboard page
    layout.tsx        # Dashboard layout with sidebar
  layout.tsx          # Root layout with theme provider
  page.tsx           # Home page (redirects to dashboard)
  globals.css        # Global styles

/components
  Card.tsx            # KPI metric cards
  DataTable.tsx       # Campaign performance table
  RevenueLineChart.tsx # Interactive revenue chart
  Sidebar.tsx         # Navigation sidebar
  ThemeToggle.tsx     # Dark/light mode toggle
  Topbar.tsx          # Header with search and notifications

/lib
  mockData.ts         # Sample data for the dashboard
  utils.ts           # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: Emerald (#10B981) - For primary actions and highlights
- **Secondary**: Blue (#3B82F6) - For secondary elements
- **Background**: Dynamic based on theme (Light: #F9FAFB, Dark: #030712)
- **Success**: Green shades for positive metrics
- **Warning**: Red shades for negative metrics

### Typography
- **Font**: Inter for clean, modern readability
- **Hierarchy**: Consistent text sizes and weights
- **Line Height**: 150% for body text, 120% for headings

### Spacing
- **System**: 8px base unit for consistent spacing
- **Grid**: Responsive grid system (1 column mobile → 4 columns desktop)

## 📊 Features Overview

### KPI Cards
- Real-time metric tracking with trend indicators
- Color-coded change percentages (green for positive, red for negative)
- Smooth animations and hover effects
- Responsive grid layout

### Revenue Chart
- Interactive line chart with tooltips
- Real-time data updates every 5 seconds
- Gradient fills and smooth animations
- Responsive design for all screen sizes

### Campaign Table
- Sortable columns (name, impressions, clicks, CTR, spend)
- Status indicators with icons
- Hover effects and smooth transitions
- Mobile-responsive horizontal scrolling

### Navigation
- Collapsible sidebar with smooth animations
- Active state indicators
- Search functionality in topbar
- Notification badges
- Theme toggle with smooth transitions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Environment Variables
No environment variables required for the basic setup. All data is currently mocked for demonstration purposes.

## 🔮 Future Enhancements

- [ ] Real API integration
- [ ] Advanced filtering and date range selection
- [ ] Export functionality (PDF/CSV)
- [ ] User authentication and roles
- [ ] Real-time notifications
- [ ] Advanced analytics and insights
- [ ] Campaign management functionality
- [ ] Performance optimization metrics

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**ADmyBRAND Insights** - Empowering digital marketing agencies with beautiful, actionable analytics.