export const EV_STATIONS = [
  {
    id: "st-001",
    name: "Zeon Charging - Tidel Park",
    location: {
      address: "Tidel Park, Taramani, Chennai, Tamil Nadu 600113",
      city: "Chennai",
      lat: 12.9897,
      lng: 80.2478
    },
    powerKW: 50,
    connectors: [
      { id: "c1", type: "CCS2", power: "50kW", status: "free", tariff: "₹18/kWh" },
      { id: "c2", type: "CCS2", power: "50kW", status: "used", summary: "Charging at 22kW (45%)" },
      { id: "c3", type: "Type 2", power: "22kW", status: "faulted", error: "Offline due to maintenance" }
    ],
    operatingHours: "24/7",
    amenities: ["Restrooms", "Cafe", "WiFi"]
  },
  {
    id: "st-002",
    name: "Relux Electric - Phoenix Marketcity",
    location: {
      address: "Velachery Main Rd, Chennai, Tamil Nadu 600042",
      city: "Chennai",
      lat: 12.9915,
      lng: 80.2166
    },
    powerKW: 120,
    connectors: [
      { id: "c4", type: "CCS2", power: "120kW", status: "free", tariff: "₹24/kWh" },
      { id: "c5", type: "CCS2", power: "120kW", status: "free", tariff: "₹24/kWh" },
      { id: "c6", type: "CHAdeMO", power: "50kW", status: "used", summary: "Charging at 30kW (80%)" }
    ],
    operatingHours: "10:00 AM - 11:00 PM",
    amenities: ["Shopping Mall", "Food Court", "Parking"]
  },
  {
    id: "st-003",
    name: "Tata Power - Brookefields Mall",
    location: {
      address: "Brookefields, Krishnaswamy Rd, Coimbatore, Tamil Nadu 641001",
      city: "Coimbatore",
      lat: 11.0066,
      lng: 76.9536
    },
    powerKW: 30,
    connectors: [
      { id: "c7", type: "CCS2", power: "30kW", status: "free", tariff: "₹15/kWh" },
      { id: "c8", type: "Type 2", power: "7.4kW", status: "free", tariff: "₹10/kWh" }
    ],
    operatingHours: "08:00 AM - 10:00 PM",
    amenities: ["Mall", "Restrooms"]
  },
  {
    id: "st-004",
    name: "Ather Grid - Salem RTO",
    location: {
      address: "Near RTO Office, Salem, Tamil Nadu 636004",
      city: "Salem",
      lat: 11.6643,
      lng: 78.1460
    },
    powerKW: 22,
    connectors: [
      { id: "c9", type: "Type 2", power: "22kW", status: "used", summary: "Charging at 7kW (20%)" },
      { id: "c10", type: "Type 2", power: "22kW", status: "free", tariff: "₹12/kWh" }
    ],
    operatingHours: "24/7",
    amenities: ["Street Lighting"]
  },
  {
    id: "st-005",
    name: "Zeon Charging - MADURAI Bypass",
    location: {
      address: "Kappalur Tollgate, Madurai, Tamil Nadu 625008",
      city: "Madurai",
      lat: 9.8821,
      lng: 78.0772
    },
    powerKW: 150,
    connectors: [
      { id: "c11", type: "CCS2", power: "150kW", status: "free", tariff: "₹25/kWh" },
      { id: "c12", type: "CCS2", power: "150kW", status: "free", tariff: "₹25/kWh" }
    ],
    operatingHours: "24/7",
    amenities: ["Dhaba", "Restrooms"]
  }
];

export const getStationById = (id) => EV_STATIONS.find(s => s.id === id);
export const getUniqueCities = () => [...new Set(EV_STATIONS.map(s => s.location.city))];
