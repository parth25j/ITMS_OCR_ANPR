const ITMS_Events = [
    {
      sno: 1,
      cameraId: "CAM001",
      location: "Main Entrance",
      eventType: "Speed Violation",
      vehicleNumber: "MH12AB1234",
      confidence: 92.5,
      timestamp: "2025-10-13 09:15",
      image: "/images/events/event1.jpg"
    },
    {
      sno: 2,
      cameraId: "CAM002",
      location: "Parking Lot",
      eventType: "Unauthorized Entry",
      vehicleNumber: "MH14CD5678",
      confidence: 88.0,
      timestamp: "2025-10-13 10:05",
      image: "/images/events/event2.jpg"
    },
    {
      sno: 3,
      cameraId: "CAM003",
      location: "Lobby",
      eventType: "Over Speed",
      vehicleNumber: "MH20EF9012",
      confidence: 95.2,
      timestamp: "2025-10-13 11:30",
      image: "/images/events/event3.jpg"
    },
    {
      sno: 4,
      cameraId: "CAM001",
      location: "Main Entrance",
      eventType: "Red Light Violation",
      vehicleNumber: "MH12GH3456",
      confidence: 90.0,
      timestamp: "2025-10-13 12:45",
      image: "/images/events/event4.jpg"
    },
    {
      sno: 5,
      cameraId: "CAM004",
      location: "Back Gate",
      eventType: "Unauthorized Entry",
      vehicleNumber: "MH22IJ7890",
      confidence: 85.3,
      timestamp: "2025-10-13 13:20",
      image: "/images/events/event5.jpg"
    }
  ];

  const Anomaly_Events = [
    {
      sno: 1,
      cameraId: "CAM001",
      location: "Main Entrance",
      anomalyType: "Suspicious Loitering",
      severity: "High",
      confidence: 89.5,
      timestamp: "2025-10-13 09:50",
      image: "/images/anomalies/anomaly1.jpg"
    },
    {
      sno: 2,
      cameraId: "CAM002",
      location: "Parking Lot",
      anomalyType: "Abandoned Vehicle",
      severity: "Medium",
      confidence: 82.0,
      timestamp: "2025-10-13 10:40",
      image: "/images/anomalies/anomaly2.jpg"
    },
    {
      sno: 3,
      cameraId: "CAM003",
      location: "Lobby",
      anomalyType: "Restricted Area Access",
      severity: "High",
      confidence: 91.3,
      timestamp: "2025-10-13 11:55",
      image: "/images/anomalies/anomaly3.jpg"
    },
    {
      sno: 4,
      cameraId: "CAM004",
      location: "Back Gate",
      anomalyType: "Tailgating",
      severity: "Medium",
      confidence: 84.7,
      timestamp: "2025-10-13 12:10",
      image: "/images/anomalies/anomaly4.jpg"
    },
    {
      sno: 5,
      cameraId: "CAM001",
      location: "Main Entrance",
      anomalyType: "Object Left Behind",
      severity: "High",
      confidence: 93.2,
      timestamp: "2025-10-13 13:00",
      image: "/images/anomalies/anomaly5.jpg"
    }
  ];
  

  export  {ITMS_Events,Anomaly_Events}