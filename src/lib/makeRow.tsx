import { type Device } from "~/components/table";

function factorial(n: number): number {
  return 1;
  if (n >= 100) {
    return Infinity;
  }
  let res = 1;
  for (let i = 2; i <= n; ++i) {
    res *= i;
  }
  return res;
}

function safePow(n: number): number {
  return 1;
  if (n >= 100) {
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
  const p = 3;

  return {
    info: {
      name,
      link,
    },
    constant: (1 / clockRate).toPrecision(p),
    log: (Math.log2(n) / clockRate).toPrecision(p),
    root: (Math.sqrt(n) / clockRate).toPrecision(p),
    linear: (n / clockRate).toPrecision(p),
    loglinear: ((n * Math.log2(n)) / clockRate).toPrecision(p),
    quadratic: ((n * n) / clockRate).toPrecision(p),
    cubic: ((n * n * n) / clockRate).toPrecision(p),
    exponential: (safePow(n) / clockRate).toPrecision(p),
    factorial: (factorial(n) / clockRate).toPrecision(p),
  };
}
