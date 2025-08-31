export default function Heading({ level = 2, children, className = '' }) {
  const Tag = `h${level}`;
  const classes = {
    1: 'text-3xl font-bold text-gray-900',
    2: 'text-2xl font-semibold text-gray-800',
    3: 'text-xl font-semibold text-gray-700',
    4: 'text-lg font-bold text-gray-700',
  };

  return <Tag className={`${classes[level]} ${className}`}>{children}</Tag>;
}