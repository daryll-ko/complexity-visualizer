import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
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

interface Props {
  n: number;
}

export default function Table({ n }: Props) {
  const makeData = (n: number): Device[] => {
    return [
      makeRow("Arduino Uno (16 MHz)", 16000000, n),
      makeRow("Nintendo DS (67 MHz)", 67000000, n),
      makeRow("Nintendo 3DS (268 MHz)", 268000000, n),
      makeRow("Apple Watch (520 MHz)", 520000000, n),
      makeRow("Nintendo Switch (1.02 GHz)", 1020000000, n),
      makeRow("Macbook Pro M1 (3.2 GHz)", 3200000000, n),
      makeRow("PlayStation 5 (3.5 GHz)", 3500000000, n),
    ];
  };

  const data = useMemo(() => makeData(n), [n]);

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
    </table>
  );
}
