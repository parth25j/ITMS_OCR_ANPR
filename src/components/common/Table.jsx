// import React, { useState, useMemo } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   flexRender,
// } from "@tanstack/react-table";

// const Table = ({ data = [], columns: userColumns, onRowSelect }) => {
//   const [globalFilter, setGlobalFilter] = useState("");
//   const [sorting, setSorting] = useState([]);
//   const [rowSelection, setRowSelection] = useState({});

 
//   const columns = useMemo(() => {
//     if (userColumns && userColumns.length > 0) return userColumns;
//     if (data.length === 0) return [];
//     return Object.keys(data[0]).map((key) => ({
//       accessorKey: key,
//       header: key.charAt(0).toUpperCase() + key.slice(1),
//     }));
//   }, [data, userColumns]);

//   const table = useReactTable({
//     data,
//     columns,
//     state: { globalFilter, sorting, rowSelection },
//     onGlobalFilterChange: setGlobalFilter,
//     onSortingChange: setSorting,
//     onRowSelectionChange: setRowSelection,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   if (data.length === 0)
//     return (
//       <div className="text-center py-4 text-gray-500">No data available</div>
//     );

//   return (
//     <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
//       {/* 🔍 Global Search */}
//       <input
//         value={globalFilter ?? ""}
//         onChange={(e) => setGlobalFilter(e.target.value)}
//         placeholder="Search..."
//         className="mb-4 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring focus:ring-blue-200 focus:outline-none"
//       />

//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 text-sm rounded-lg">
//           <thead className="bg-secondary">
//             {table.getHeaderGroups().map((headerGroup) => (
//               <tr key={headerGroup.id}>
//                 {/* 🧩 Selection Checkbox Header */}
//                 <th className="p-2 border-b">
//                   <input
//                     type="checkbox"
//                     checked={table.getIsAllRowsSelected()}
//                     onChange={table.getToggleAllRowsSelectedHandler()}
//                   />
//                 </th>

//                 {headerGroup.headers.map((header) => (
//                   <th
//                     key={header.id}
//                     onClick={header.column.getToggleSortingHandler()}
//                     className="px-4 py-2 border-b text-left cursor-pointer select-none"
//                   >
//                     {flexRender(
//                       header.column.columnDef.header,
//                       header.getContext()
//                     )}
//                     {{
//                       asc: " 🔼",
//                       desc: " 🔽",
//                     }[header.column.getIsSorted()] ?? ""}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>

//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr
//                 key={row.id}
//                 className={`border-b hover:bg-gray-50 ${
//                   row.getIsSelected() ? "bg-blue-50" : ""
//                 }`}
//               >
//                 {/* Selection Checkbox Cell */}
//                 <td className="p-2 text-center border-r">
//                   <input
//                     type="checkbox"
//                     checked={row.getIsSelected()}
//                     onChange={() => {
//                       // Deselect all rows first (single selection)
//                       table
//                         .getRowModel()
//                         .rows.forEach((r) => r.toggleSelected(false));

//                       // Select current row
//                       row.toggleSelected();

//                       // Send selected row data to parent
//                       onRowSelect?.(row.original);
//                     }}
//                   />
//                 </td>

//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id} className="px-4 py-2">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* 🔢 Pagination Controls */}
//       <div className="flex justify-between items-center mt-4 text-sm">
//         <div>
//           <button
//             onClick={() => table.setPageIndex(0)}
//             disabled={!table.getCanPreviousPage()}
//             className="px-2 py-1 border rounded disabled:opacity-50 mr-2"
//           >
//             ⏮ First
//           </button>
//           <button
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//             className="px-2 py-1 border rounded disabled:opacity-50 mr-2"
//           >
//             ◀ Prev
//           </button>
//           <button
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//             className="px-2 py-1 border rounded disabled:opacity-50 mr-2"
//           >
//             Next ▶
//           </button>
//           <button
//             onClick={() => table.setPageIndex(table.getPageCount() - 1)}
//             disabled={!table.getCanNextPage()}
//             className="px-2 py-1 border rounded disabled:opacity-50"
//           >
//             Last ⏭
//           </button>
//         </div>

//         <div>
//           Page{" "}
//           <strong>
//             {table.getState().pagination.pageIndex + 1} of{" "}
//             {table.getPageCount()}
//           </strong>
//         </div>

//         <select
//           value={table.getState().pagination.pageSize}
//           onChange={(e) => table.setPageSize(Number(e.target.value))}
//           className="border px-2 py-1 rounded"
//         >
//           {[5, 10, 20, 50].map((size) => (
//             <option key={size} value={size}>
//               Show {size}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Table;


import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";

const Table = ({ data = [], columns: userColumns, onRowSelect }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  
  const columns = useMemo(() => {
    if (userColumns && userColumns.length > 0) return userColumns;
    if (data.length === 0) return [];

    return Object.keys(data[0]).map((key) => ({
      accessorKey: key,
      header: key.charAt(0).toUpperCase() + key.slice(1),
      cell: ({ getValue }) => {
        const value = getValue();

      
        if (typeof value === "string" && value.match(/\.(jpg|jpeg|png|gif)$/i)) {
          // Extract filename (e.g. "04112025_021_plate.jpg")
          const filename = value.split("/").pop();

     
          const imageUrl = `/../itms_/Itms_back/results/${value
            .split("results/")
            .pop()}`;

          return (
            <img
              src={imageUrl}
              alt={filename}
              className="w-56 h-15 object-fill rounded-lg border border-gray-200"
              onError={(e) => (e.target.style.display = "none")}
            />
          );
        }

        return <span>{String(value ?? "-")}</span>;
      },
    }));
  }, [data, userColumns]);

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, sorting, rowSelection },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (data.length === 0)
    return (
      <div className="text-center py-4 text-gray-500">No data available</div>
    );

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border border-gray-200">
    
      <input
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="mb-4 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring focus:ring-blue-200 focus:outline-none"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm rounded-lg">
          <thead className="bg-secondary">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {/* Checkbox header */}
                <th className="p-2 border-b">
                  <input
                    type="checkbox"
                    checked={table.getIsAllRowsSelected()}
                    onChange={table.getToggleAllRowsSelectedHandler()}
                  />
                </th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-2 border-b text-left cursor-pointer select-none"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted()
                      ? header.column.getIsSorted() === "asc"
                        ? " 🔼"
                        : " 🔽"
                      : ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`border-b hover:bg-gray-50 ${
                  row.getIsSelected() ? "bg-blue-50" : ""
                }`}
              >
                {/* Checkbox for single row selection */}
                <td className="p-2 text-center border-r">
                  <input
                    type="checkbox"
                    checked={row.getIsSelected()}
                    onChange={() => {
                      table.getRowModel().rows.forEach((r) => r.toggleSelected(false));
                      row.toggleSelected();
                      onRowSelect?.(row.original);
                    }}
                  />
                </td>

                {/* Row cells */}
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <div>
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="px-2 py-1 border rounded disabled:opacity-50 mr-2"
          >
            ⏮ First
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-2 py-1 border rounded disabled:opacity-50 mr-2"
          >
            ◀ Prev
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-2 py-1 border rounded disabled:opacity-50 mr-2"
          >
            Next ▶
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            Last ⏭
          </button>
        </div>

        <div>
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </div>

        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="border px-2 py-1 rounded"
        >
          {[5, 10, 20, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
