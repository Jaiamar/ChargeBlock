<div align="center">
  <h1>🔋 EVConnect TN (ChargeBlock)</h1>
  <p><strong>A Next-Generation EV Charging Locator and Booking Platform for Tamil Nadu</strong></p>

  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white)

  <p>
    Seamlessly locate, monitor, and reserve electric vehicle charging slots across Tamil Nadu in real-time. Designed with a stunning, performance-driven UI.
  </p>
</div>

---

## ✨ Key Features

- 🗺️ **Interactive Geographic Tracking:** An intuitive map interface powered by Leaflet, visualizing registered EV charging hubs with dynamic status markers.
- ⚡ **Live Telemetry & Status:** Real-time visibility into the availability of individual hardware connectors (`Free`, `Charging`, `Offline`), showing output capacities like 22kW, 50kW, and 150kW.
- 📅 **Advance Slot Booking:** Select, schedule, and block an available charger for a specific duration utilizing simulated pre-authorization systems.
- 🤖 **AI Prediction Placeholder:** Demonstrating architecture for predicting charging wait times and peak usage hours using mock insight intelligence.
- 🎨 **Premium Glassmorphism Aesthetic:** A cutting-edge dark mode interface built with pure CSS variables, complex gradients, and fluid micro-animations.

## 🛠️ Technology Stack

* **Frontend Framework:** React 18, Vite
* **Routing:** React Router v6
* **Mapping Engine:** React-Leaflet (`leaflet`)
* **Styling:** Custom CSS Design System
* **Icons:** Lucide-React

## 🚀 Getting Started

Follow these instructions to run the EVConnect TN prototype locally.

### Prerequisites
* [Node.js](https://nodejs.org/) (v16.x or newer recommended)
* NPM or Yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jaiamar/ChargeBlock.git
   cd ChargeBlock
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`.

## 📂 Project Structure

```text
src/
├── components/          
│   ├── Booking/         # Slot selection and reservation components
│   ├── Map/             # React-Leaflet map and custom markers
│   ├── Navigation/      # Global layout components like Navbar
│   └── Station/         # Telemetry visualizers (Used/Free components)
├── pages/               
│   ├── Home.jsx         # Central map dashboard and filters
│   ├── Booking.jsx      # Confirmation and payment simulation flow
│   └── StationDetails.jsx # Granular analytics for a specific hub
├── utils/               
│   └── mockData.js      # Robust simulated dataset for Tamil Nadu
├── index.css            # Core design system tokens and glassmorphism rules
└── App.jsx              # Main routing container
```

## 🔮 Future Enhancements (Phase 2)
- [ ] Connect a PostgreSQL database to manage real operational telemetry.
- [ ] Implement backend user authentication and JWT wallets.
- [ ] Incorporate live payment gateways (Stripe/Razorpay) instead of pre-authorization mocks.
- [ ] Train and integrate the actual Machine Learning model for the prediction engine.
