// import React from "react";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//     BarChart,
//     Bar,
//     Legend
//   } from "recharts";
  

// const Card = ({
//   type = "card",
//   dataDashboard,
//   title,
//   chartComponent,
//   icon,
//   value,
//   chartType,
//   data,
// }) => {
//   // Styles for count/metric cards
//   const countCardStyle = {
//     container:
//       "bg-[#f8f8f8] flex flex-col items-center justify-between w-[250px] h-[100px] shadow-md rounded-2xl p-3 border-2 border-[#e0e0e0]",
//     heading: "text-center font-semibold text-gray-800",
//     icon: "text-2xl text-gray-700",
//     value: "text-3xl font-bold text-[#0d6efd]",
//   };

//   const renderChart = () => {
//     if (!data || !data.length) {
//       return <div className="text-gray-400 text-center py-10 italic">No data available</div>;
//     }
  
//     // Dynamically pick first two keys (for unknown data structures)
//     const keys = Object.keys(data[0]);
//     const xKey = keys[0];
//     const yKey = keys[1];
  
//     if (chartType === "line") {
//       return (
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey={xKey} />
//             <YAxis />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey={yKey}
//               stroke="#3b82f6"
//               strokeWidth={3}
//               dot={{ r: 4 }}
//               activeDot={{ r: 6 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       );
//     }
  
//     if (chartType === "bar") {
//       return (
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey={xKey} />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey={yKey} fill="#82ca9d" radius={[6, 6, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       );
//     }
  
//     return <div className="text-gray-400 text-center py-10 italic">Unsupported chart type</div>;
//   };
  
//   return (
//     <>
//       {/* Metric Card */}
//       {type === "card" && (
//         <div className={countCardStyle.container}>
//           <div className="flex items-center justify-center gap-2">
//             <h2 className={countCardStyle.heading}>{title}</h2>
//             <span className={countCardStyle.icon}>{icon}</span>
//           </div>
//           <div>
//             <span className={countCardStyle.value}>{value}</span>
//           </div>
//         </div>
//       )}

//       {/* Chart Card */}
//       {type === "chart" && (
//         <div className=" ">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
//           <div className="w-full h-full">{renderChart()}</div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Card;


import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const COLORS = [
  "#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6",
  "#ec4899", "#14b8a6", "#eab308", "#6366f1", "#f97316"
];

const Card = ({
  type = "card",
  title,
  icon,
  value,
  chartType,
  data,
}) => {
  // Basic metric card styling
  const countCardStyle = {
    container:
      "bg-[#f8f8f8] flex flex-col items-center justify-between w-[250px] h-[100px] shadow-md rounded-2xl p-3 border-2 border-[#e0e0e0]",
    heading: "text-center font-semibold text-gray-800",
    icon: "text-2xl text-gray-700",
    value: "text-3xl font-bold text-[#0d6efd]",
  };

  const renderChart = () => {
    if (!data || data.length === 0) {
      return (
        <div className="text-gray-400 text-center py-10 italic">
          No data available
        </div>
      );
    }

    const keys = Object.keys(data[0]);
    const xKey = keys[0]; // Usually 'time', 'hour', etc.
    const otherKeys = keys.slice(1);

    // If data is grouped by "type" (e.g., [{time, type, count}])
    // Convert it into {time, Type1, Type2, ...} for multi-line rendering.
    let normalizedData = data;
    if (keys.includes("type") && keys.includes("count")) {
      const grouped = {};
      data.forEach((d) => {
        if (!grouped[d[xKey]]) grouped[d[xKey]] = { [xKey]: d[xKey] };
        grouped[d[xKey]][d.type] = d.count;
      });
      normalizedData = Object.values(grouped);
    }

    const valueKeys = Object.keys(normalizedData[0]).filter((k) => k !== xKey);

    if (chartType === "line") {
      return (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={normalizedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey={xKey} stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            {valueKeys.map((key, idx) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={COLORS[idx % COLORS.length]}
                strokeWidth={2.5}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      );
    }

    if (chartType === "bar") {
      return (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={normalizedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey={xKey} stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Legend />
            {valueKeys.map((key, idx) => (
              <Bar
                key={key}
                dataKey={key}
                fill={COLORS[idx % COLORS.length]}
                radius={[6, 6, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return (
      <div className="text-gray-400 text-center py-10 italic">
        Unsupported chart type
      </div>
    );
  };

  return (
    <>
      {/* Metric Card */}
      {type === "card" && (
        <div className={countCardStyle.container}>
          <div className="flex items-center justify-center gap-2">
            <h2 className={countCardStyle.heading}>{title}</h2>
            <span className={countCardStyle.icon}>{icon}</span>
          </div>
          <div>
            <span className={countCardStyle.value}>{value}</span>
          </div>
        </div>
      )}

      {/* Chart Card */}
      {type === "chart" && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>
          <div className="w-full h-full">{renderChart()}</div>
        </div>
      )}
    </>
  );
};

export default Card;
