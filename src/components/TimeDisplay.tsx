interface Props {
  seconds: number;
}

export default function TimeDisplay({ seconds }: Props) {
  return <div className="px-2 py-1">{seconds}</div>;
}
