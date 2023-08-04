import { InlineMath } from "react-katex";

const YEAR_IN_SECONDS = 31536000;
const MONTH_IN_SECONDS = 2628000;
const DAY_IN_SECONDS = 86400;
const HOUR_IN_SECONDS = 3600;
const MINUTE_IN_SECONDS = 60;
const MS_IN_SECONDS = 0.001;
const US_IN_SECONDS = 0.000001;
const NS_IN_SECONDS = 0.000000001;
const PS_IN_SECONDS = 0.000000000001;

interface Props {
  seconds: number;
}

export default function TimeDisplay({ seconds }: Props) {
  const short = true;

  let value = seconds;
  let unit = short ? "s" : "second(s)";

  if (seconds >= YEAR_IN_SECONDS) {
    value /= YEAR_IN_SECONDS;
    unit = short ? "yr(s)" : "year(s)";
  } else if (seconds >= MONTH_IN_SECONDS) {
    value /= MONTH_IN_SECONDS;
    unit = short ? "mth(s)" : "month(s)";
  } else if (seconds >= DAY_IN_SECONDS) {
    value /= DAY_IN_SECONDS;
    unit = "day(s)";
  } else if (seconds >= HOUR_IN_SECONDS) {
    value /= HOUR_IN_SECONDS;
    unit = short ? "hr(s)" : "hour(s)";
  } else if (seconds >= MINUTE_IN_SECONDS) {
    value /= MINUTE_IN_SECONDS;
    unit = short ? "min(s)" : "minute(s)";
  } else if (seconds <= PS_IN_SECONDS * 10) {
    value *= 1000000000000;
    unit = short ? "ps" : "picosecond(s)";
  } else if (seconds <= NS_IN_SECONDS * 10) {
    value *= 1000000000;
    unit = short ? "ns" : "nanosecond(s)";
  } else if (seconds <= US_IN_SECONDS * 10) {
    value *= 1000000;
    unit = short ? "μs" : "microsecond(s)";
  } else if (seconds <= MS_IN_SECONDS * 10) {
    value *= 1000;
    unit = short ? "ms" : "millisecond(s)";
  }

  return (
    <div className="px-2 py-1">
      {isFinite(value) ? (
        `${value.toPrecision(3)} ${unit}`
      ) : (
        <InlineMath math="\infty" />
      )}
    </div>
  );
}
