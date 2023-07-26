import { type Device } from "~/components/table";

function factorial(n: number): number {
  return n === 0 ? 1 : n * factorial(n - 1);
}

export default function makeRow(clockRate: number): Device {
  const n = 10;

  return {
    constant: 1 / clockRate,
    log: Math.log2(n) / clockRate,
    root: Math.sqrt(n) / clockRate,
    linear: n / clockRate,
    loglinear: (n * Math.log2(n)) / clockRate,
    quadratic: (n * n) / clockRate,
    cubic: (n * n * n) / clockRate,
    exponential: Math.pow(2, n) / clockRate,
    factorial: factorial(n) / clockRate,
  };
}
