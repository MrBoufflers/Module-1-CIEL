export default function Tab({ label, isActive, onClick }) {
    const activeClasses = 'border-blue-600 text-blue-600 font-semibold cursor-pointer';
    const inactiveClasses = 'border-transparent cursor-pointer hover:text-blue-900';

    return (
        <button onClick={onClick} className={`py-2 px-4 border-b-2 ${isActive ? activeClasses : inactiveClasses}`}>
            {label}
        </button>
    );
}