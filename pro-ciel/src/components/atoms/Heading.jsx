export default function Heading({ level = 2, children, className = '' }) {
  const Tag = `h${level}`;
  const classes = {
    1: 'text-3xl mt-2 font-bold text-gray-900',
    2: 'text-2xl mt-2 font-semibold text-gray-800',
    3: 'text-xl mt-2 font-semibold text-gray-700',
    4: 'text-lg mt-2 font-bold text-gray-700',
  };

  return <Tag className={`${classes[level]} ${className}`}>{children}</Tag>;
}
