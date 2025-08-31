export default function Card({ children, className = '' }) {
  return (
    <div className={`p-6 bg-white border rounded-lg shadow-sm ${className}`}>
      {children}
    </div>
  );
}
