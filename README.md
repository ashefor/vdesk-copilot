# VDesk - VOIP Ticketing System

A Nigerian-market VOIP-powered ticketing system where customers call a phone number and the system automatically creates, routes, and manages support tickets.

## Features

- ✅ **Dashboard** with KPI cards and call analytics
- ✅ **Tickets Management** with search, filters, bulk actions, and SLA tracking
- ✅ **Contacts & Companies** management
- ✅ **Phone Numbers** configuration
- ✅ **Call History** with detailed logs
- ✅ **IVR Flow Editor** (drag-and-drop canvas placeholder)
- ✅ **Team Management** with 10 Nigerian agents
- ✅ **Analytics** with charts and trends
- ✅ **Settings** (General, Languages, Notifications, Integrations)
- ✅ **Billing** with subscription plans

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Radix UI)
- **State:** React Context + hooks
- **Icons:** Lucide React
- **Font:** Onest (Google Fonts)

## Theme

The application uses a custom theme with OKLCH color space:
- Primary: Yellow-gold accent color
- Supports light mode by default
- Custom Onest font family
- Responsive design

## Mock Data

The application includes comprehensive mock data:
- **100 tickets** with Nigerian names and data
- **100 calls** with various statuses
- **10 agents** with Nigerian names
- **30 contacts**
- **10 companies**
- **3 phone numbers** (toll-free)
- **4 queues**
- **3 IVR flows**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vdesk-copilot
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

The app will automatically redirect to `/dashboard`.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
vdesk-copilot/
├── app/
│   ├── dashboard/         # Dashboard with KPIs and charts
│   ├── tickets/          # Ticket list and management
│   │   └── new/          # Create new ticket
│   ├── calls/            # Call history
│   ├── routing/
│   │   └── ivr/          # IVR flow editor
│   ├── phone-numbers/    # Phone number management
│   ├── contacts/         # Contacts and companies
│   ├── analytics/        # Analytics and reports
│   ├── team/             # Team management
│   ├── settings/         # Application settings
│   └── billing/          # Billing and subscription
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── app-sidebar.tsx   # Collapsible sidebar
│   ├── app-header.tsx    # Header with notifications
│   └── dashboard-layout.tsx  # Main layout wrapper
└── lib/
    ├── mock-data/        # JSON mock data files
    └── utils.ts          # Utility functions
```

## Key Features

### Sidebar Navigation
- Collapsible sidebar with all menu items
- Expandable sub-menus
- Active state highlighting
- User profile dropdown

### Tickets System
- Search across subject, ID, caller name, phone
- Filter by status, priority, assignee
- Bulk actions (assign, status change, delete)
- SLA status tracking (On Track, At Risk, Breached)
- Pagination (25/50/100 per page)
- Color-coded status and priority badges

### Dashboard
- 4 KPI cards (Total Calls, Resolved Tickets, Avg Response Time, Missed Calls)
- Weekly call volume bar chart
- Response time trend chart
- Recent tickets list

### Mock Data Features
- 100 tickets with realistic Nigerian data
- Varied statuses: open, in_progress, pending, resolved, closed
- SLA statuses with time tracking
- 10 agents with Nigerian names
- Contact and company data

## Available Routes

- `/` - Redirects to dashboard
- `/dashboard` - Main dashboard
- `/tickets` - All tickets list
- `/tickets/new` - Create new ticket
- `/calls` - Call history
- `/routing/ivr` - IVR flow editor
- `/phone-numbers` - Phone number management
- `/contacts` - Contacts list
- `/analytics` - Analytics dashboard
- `/team` - Team management
- `/settings` - Application settings
- `/billing` - Billing and subscription

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Color Scheme

The application uses OKLCH color values for better color accuracy:
- Background: Light gray
- Primary: Yellow-gold (#E5B641 equivalent)
- Accent colors for status badges
- SLA status colors (green, yellow, red)

## Future Enhancements

- WebRTC integration for real-time calling
- Actual IVR flow editor with @dnd-kit
- Real-time notifications
- Call recording playback
- Advanced analytics with Recharts
- Ticket merge functionality
- Internal notes vs customer replies
- WebSocket for live updates

## License

This project is for demonstration purposes.

## Support

For support, contact the development team.
