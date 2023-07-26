import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { InlineMath } from "react-katex";
import makeRow from "~/lib/makeRow";

export interface Device {
  deviceName: string;
  constant: string;
  log: string;
  root: string;
  linear: string;
  loglinear: string;
  quadratic: string;
  cubic: string;
  exponential: string;
  factorial: string;
}

const data: Device[] = [
  makeRow("Arduino Uno (16 MHz)", 16000000),
  makeRow("Nintendo DS (67 MHz)", 67000000),
  makeRow("Nintendo 3DS (268 MHz)", 268000000),
  makeRow("Nintendo Switch (1.02 GHz)", 1020000000),
  makeRow("Macbook Pro M1 (3.2 GHz)", 3200000000),
  makeRow("PlayStation 5 (3.5 GHz)", 3500000000),
];

const columnHelper = createColumnHelper<Device>();

const columns = [
  columnHelper.accessor("deviceName", {
    cell: (info) => info.getValue(),
    header: () => <span>Device Name</span>,
  }),
  columnHelper.accessor("constant", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(1)" />,
  }),
  columnHelper.accessor("log", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(\lg n)" />,
  }),
  columnHelper.accessor("root", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(\sqrt{n})" />,
  }),
  columnHelper.accessor("linear", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(n)" />,
  }),
  columnHelper.accessor("loglinear", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(n\lg n)" />,
  }),
  columnHelper.accessor("quadratic", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(n^{2})" />,
  }),
  columnHelper.accessor("cubic", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(n^{3})" />,
  }),
  columnHelper.accessor("exponential", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(2^{n})" />,
  }),
  columnHelper.accessor("factorial", {
    cell: (info) => info.getValue(),
    header: () => <InlineMath math="\Theta(n!)" />,
  }),
];

export default function Table() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="border border-solid border-white">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="border border-solid border-white p-2"
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="border border-solid border-white p-2"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot> */}
    </table>
  );
}
