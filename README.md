# UNIVERSE RMS - University Result Management System

```text
  _    _ _   _ _______     ________ _____   _____ ______   _____  __  __  _____ 
 | |  | | \ | |_   _\ \   / /  ____|  __ \ / ____|  ____| |  __ \|  \/  |/ ____|
 | |  | |  \| | | |  \ \_/ /| |__  | |__) | (___ | |__    | |__) | \  / | (___  
 | |  | | . ` | | |   \   / |  __| |  _  / \___ \|  __|   |  _  /| |\/| |\___ \ 
 | |__| | |\  |_| |_   | |  | |____| | \ \ ____) | |____  | | \ \| |  | |____) |
  \____/|_| \_|_____|  |_|  |______|_|  \_\_____/|______| |_|  \_\_|  |_|_____/ 
```

## Overview
**UNIVERSE RMS** is a modern, high-performance, and secure single-page application (SPA) designed to streamline academic result management. Built with the latest web technologies, it provides a seamless interface for students, lecturers, and administrators to interact with academic records while ensuring data integrity and role-based security.

## Key Features

### Secure Authentication & RBAC
- **Multi-Role Access**: Tailored experiences for Students, Lecturers, and Admins.
- **JWT Lifecycle**: Automatic token management with secure storage and background refresh logic.
- **Route Guarding**: Robust client-side protection using Next.js layouts and specialized AuthGuards.

### Academic Performance Tracking
- **Student Portal**: Visualize academic progress with intuitive results tables and grade-aware indicators.
- **Lecturer Dashboard**: Effortless result uploads and performance entry with built-in validation.
- **Admin Panel**: Complete system oversight, including user account management and global record monitoring.

### Premium Design System
- **Aesthetic**: Mature, high-contrast Black & White theme for a professional academic feel.
- **Typography**: Optimized Inter font stack for maximum readability.
- **Responsive**: Fluid layouts that adapt perfectly to desktop, tablet, and mobile screens.

## Technology Stack
- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **API Client**: [Axios](https://axios-http.com/) with custom interceptors
- **Icons**: [Lucide React](https://lucide.dev/)

## Project Structure
```text
Components/
├─ ui/               # Atomic components (Buttons, Inputs, Tables)
├─ layout/           # Global layouts (Header, Sidebar, Guards)
├─ shared/           # Logic (AuthContext, API instance, Utils)
app/
├─ (auth)/           # Authentication flows (Login, Register)
├─ (dashboard)/      # Protected area (Dashboard, Results, Admin, Lecturer)
types/               # Global TypeScript definitions
```

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/universe-rms.git
   cd universe-rms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root:
   ```env
   NEXT_PUBLIC_API_URL=http://your-backend-api.com/api
   ```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the system.

## Security Considerations
- Tokens are stored securely in `localStorage` for the demo but support HTTP-only cookie migration.
- Request interceptors automatically attach Bearer tokens to all outgoing API calls.
- Response interceptors handle 401 Unauthorized errors by automatically attempting a transparent token refresh.

## License
Internal University Project - All rights reserved.
