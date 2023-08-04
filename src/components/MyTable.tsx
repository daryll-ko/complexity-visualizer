import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { useMemo } from "react";
import { InlineMath } from "react-katex";
import makeRow from "../lib/makeRow";
import TimeDisplay from "./TimeDisplay";
import type Device from "../types/Device";

interface Props {
  n: number;
}

export default function MyTable({ n }: Props) {
  const makeData = (n: number): Device[] => {
    return [
      makeRow(
        "Arduino Uno (16 MHz)",
        "https://linuxhint.com/arduino-uno-working-frequency/",
        16000000,
        n
      ),
      makeRow(
        "Nintendo DS (67 MHz)",
        "https://en.wikipedia.org/wiki/Nintendo_DS",
        67000000,
        n
      ),
      makeRow(
        "Nintendo 3DS (268 MHz)",
        "https://en.wikipedia.org/wiki/Nintendo_3DS",
        268000000,
        n
      ),
      makeRow(
        "Apple Watch (520 MHz)",
        "https://en.wikipedia.org/wiki/Apple_S1",
        520000000,
        n
      ),
      makeRow(
        "Nintendo Switch (1.02 GHz)",
        "https://en.wikipedia.org/wiki/Nintendo_Switch",
        1020000000,
        n
      ),
      makeRow(
        "Macbook Pro M1 (3.2 GHz)",
        "https://en.wikipedia.org/wiki/Apple_M1",
        3200000000,
        n
      ),
      makeRow(
        "PlayStation 5 (3.5 GHz)",
        "https://www.theverge.com/2020/3/18/21183181/sony-ps5-playstation-5-specs-details-hardware-processor-8k-ray-tracing",
        3500000000,
        n
      ),
    ];
  };

  const data = useMemo(() => makeData(n), [n]);

  const columnHelper = createColumnHelper<Device>();

  const columns = [
    columnHelper.accessor("info", {
      cell: (info) => (
        <Link href={info.getValue().link}>
          <div className="px-2 py-1 hover:bg-white/20">
            {info.getValue().name}
          </div>
        </Link>
      ),
      header: () => <span>Device Name</span>,
    }),
    columnHelper.accessor("constant", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(1)" />,
    }),
    columnHelper.accessor("log", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(\lg n)" />,
    }),
    columnHelper.accessor("root", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(\sqrt{n})" />,
    }),
    columnHelper.accessor("linear", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(n)" />,
    }),
    columnHelper.accessor("loglinear", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(n\lg n)" />,
    }),
    columnHelper.accessor("quadratic", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(n^{2})" />,
    }),
    columnHelper.accessor("cubic", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(n^{3})" />,
    }),
    columnHelper.accessor("exponential", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(2^{n})" />,
    }),
    columnHelper.accessor("factorial", {
      cell: (info) => <TimeDisplay seconds={info.getValue()} />,
      header: () => <InlineMath math="\Theta(n!)" />,
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
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
              <td key={cell.id} className="border border-solid border-white">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
