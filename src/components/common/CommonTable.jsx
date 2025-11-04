// // src/components/common/CommonTable.jsx
// import React from "react";

// const CommonTable = ({ columns = [], data = [] }) => {
//   return (
//     <div className="overflow-x-auto overflow-y-auto  border border-border rounded-2xl  bg-cardBg">
//       <table className="min-w-full border-collapse text-sm ">
//         <thead className="bg-secondary text-gray-700">
//           <tr>
//             {columns.map((col,idx) => (
//               <th
//                 key={idx}
//                 className="px-4 py-2 text-left font-semibold border-b border-border "
//               >
//                 {col}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.length === 0 ? (
//             <tr>
//               <td
//                 colSpan={columns.length}
//                 className="text-center py-4 text-gray-500"
//               >
//                 No data available
//               </td>
//             </tr>
//           ) : (
//             data.map((row, idx) => (
//               <tr
//                 key={row.id || idx}
//                 className="hover:bg-gray-50 transition-colors border-b border-border"
//               >
//                 {columns.map((col,idx) => (
//                   <td key={idx} className="px-4 py-2 text-gray-800">
//                     {row[col] ?? "-"}
//                   </td>
//                 ))}
              
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CommonTable;
