import { type Device } from "~/components/table";

function factorial(n: number): number {
  let res = 1;
  for (let i = 2; i <= n; ++i) {
    res *= i;
  }
  return res;
}

export default function makeRow(deviceName: string, clockRate: number): Device {
  const n = 1000;
  const p = 3;

  return {
    deviceName,
    constant: (1 / clockRate).toPrecision(p),
    log: (Math.log2(n) / clockRate).toPrecision(p),
    root: (Math.sqrt(n) / clockRate).toPrecision(p),
    linear: (n / clockRate).toPrecision(p),
    loglinear: ((n * Math.log2(n)) / clockRate).toPrecision(p),
    quadratic: ((n * n) / clockRate).toPrecision(p),
    cubic: ((n * n * n) / clockRate).toPrecision(p),
    exponential: (Math.pow(2, n) / clockRate).toPrecision(p),
    factorial: (factorial(n) / clockRate).toPrecision(p),
  };
}
