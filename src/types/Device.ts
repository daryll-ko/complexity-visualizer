interface DeviceInfo {
  name: string;
  link: string;
}

export default interface Device {
  info: DeviceInfo;
  constant: number;
  log: number;
  root: number;
  linear: number;
  loglinear: number;
  quadratic: number;
  cubic: number;
  exponential: number;
  factorial: number;
}
