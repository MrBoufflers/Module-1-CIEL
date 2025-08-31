import Icon from '../atoms/Icon';

export default function NavLink({ text, icon, isActive, onClick }) {
  const activeClasses = 'bg-blue-600 text-white transform translateX(4px)';
  const inactiveClasses = 'hover:bg-gray-100';

  return (
    <a
      href="#"
      onClick={onClick}
      className={`flex items-center p-3 rounded-lg transition-all duration-200 ease-in-out ${
        isActive ? activeClasses : inactiveClasses
      }`}
    >
      <Icon symbol={icon} />
      {text}
    </a>
  );
}