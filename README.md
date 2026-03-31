<div align="center">
  # ChargeBlock: EVConnect TN
  
  **Scalable Electric Vehicle Infrastructure Management & Reservation Platform**
  
  <p>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-5.x-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /></a>
    <a href="https://leafletjs.com/"><img src="https://img.shields.io/badge/Leaflet-GeoSpatial-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet" /></a>
  </p>

  <p>
    An enterprise-grade frontend application designed to abstract the complexities of locating, analyzing, and reserving electric vehicle (EV) charging hardware across Tamil Nadu.
  </p>
</div>

<hr />

## 📋 Table of Contents
1. [Project Overview](#-project-overview)
2. [Core Capabilities](#-core-capabilities)
3. [Architecture & Stack](#-architecture--stack)
4. [Installation & Setup](#-installation--setup)
5. [Directory Structure](#-directory-structure)
6. [Roadmap](#-roadmap)

## 🌐 Project Overview

As Tamil Nadu accelerates its adoption of electric vehicles, the infrastructure required to efficiently manage charging endpoints must scale accordingly. **ChargeBlock (EVConnect TN)** bridges the operational gap between EV owners and charge point operators (CPOs). It provides a unified, real-time geographical dashboard for monitoring hardware telematics and a deterministic slot-reservation system to mitigate range anxiety.

## ⚡ Core Capabilities

- **Real-Time Telematics Tracking:** Continuous monitoring of localized charging nodes (CCS2, Type 2, CHAdeMO) providing binary availability (`Available` vs. `Charging` vs. `Offline`) and live power delivery metrics (kW).
- **Geospatial Intelligence:** High-performance, interactive mapping interface utilizing Leaflet.js to pinpoint infrastructure coordinates and facilitate granular, city-based filtering (e.g., Chennai, Coimbatore).
- **Deterministic Booking Engine:** A comprehensive reservation pipeline allowing users to allocate specific time frames against distinct connector IDs, reducing queue congestion and hardware attrition.
- **Predictive Analytics Interface:** UI scaffolding prepared for Machine Learning integration to forecast queue times and identify peak energy draw windows based on historical consumption telemetry.
- **Premium User Experience:** Engineered with a robust, tokenized Design System supporting dynamic dark mode, glassmorphism compositing, and fluid micro-interactions.

## 🏗️ Architecture & Stack

The application is built leveraging a modern, component-driven architecture:

- **Core Library:** React 18 for reactive DOM manipulation.
- **Build Tooling:** Vite for instantaneous Hot Module Replacement (HMR) and optimized production bundling.
- **Routing Layer:** React Router DOM (v6) executing client-side navigational state mapping.
- **Geospatial Mapping:** React-Leaflet abstracting the core Leaflet.js engine.
- **Styling Paradigm:** Highly deliberate, utility-first Vanilla CSS implementing global scoping variables and advanced backdrop-filters.
- **Iconography:** Lucide-React SVG library.

## 🚀 Installation & Setup

### Prerequisites
Ensure the following dependencies are present within your local execution environment:
- Node.js (v18 Release Line or superior)
- NPM or Yarn package manager

### Environment Initialization

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jaiamar/ChargeBlock.git
   cd ChargeBlock
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Initialize the local development server:**
   ```bash
   npm run dev
   ```

4. **Access the application:**
   Navigate to `http://localhost:5173` via your preferred web browser.

## 📂 Directory Structure

```text
ChargeBlock/
├── public/                 # Static topological assets
├── src/
│   ├── components/         # Reusable feature-specific UI segments
│   │   ├── Booking/        # Transaction & time-slot selection interfaces
│   │   ├── Map/            # Geospatial rendering components
│   │   ├── Navigation/     # Application-wide routing wrappers
│   │   └── Station/        # Telemetry parsing & visualization logic
│   ├── pages/              # Top-level view controllers
│   ├── utils/              # Development mock environments & helper functions
│   ├── App.jsx             # Root application orchestrator
│   ├── index.css           # Centralized tokenized styling foundation
│   └── main.jsx            # DOM mounting and provider aggregation
├── .gitignore
├── package.json
└── vite.config.js
```

## 🔮 Roadmap (Phase II Implementation)

- [ ] **Data Persistence:** Migrate abstract mocked states to a robust relational database schema (PostgreSQL) interfaced via Prisma or Sequelize.
- [ ] **Authorization & Security:** Implement strict JWT-based user authentication and RBAC (Role-Based Access Control) for network operators.
- [ ] **Payment Processing:** Finalize gateway integrations (Stripe) to transition from simulated pre-authorizations to finalized transaction captures.
- [ ] **Fleet Analytics API:** Expose secure REST/GraphQL endpoints for third-party fleet tracking ingestion.
