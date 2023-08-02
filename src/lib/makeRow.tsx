import { type Device } from "~/components/Table";

function factorial(n: number): number {
  if (n > 100) {
    return Infinity;
  }
  let res = 1;
  for (let i = 2; i <= n; ++i) {
    res *= i;
  }
  return res;
}

function safePow(n: number): number {
  if (n > 1000) {
    return Infinity;
  }
  return Math.pow(2, n);
}

export default function makeRow(
  name: string,
  link: string,
  clockRate: number,
  n: number
): Device {
  return {
    info: {
      name,
      link,
    },
    constant: 1 / clockRate,
    log: Math.log2(n) / clockRate,
    root: Math.sqrt(n) / clockRate,
    linear: n / clockRate,
    loglinear: (n * Math.log2(n)) / clockRate,
    quadratic: (n * n) / clockRate,
    cubic: (n * n * n) / clockRate,
    exponential: safePow(n) / clockRate,
    factorial: factorial(n) / clockRate,
  };
}
