export default function Icon({ symbol, label }) {
  return (
    <span role="img" aria-label={label} className="mr-3 text-lg">
      {symbol}
    </span>
  );
}