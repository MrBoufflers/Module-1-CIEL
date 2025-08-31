import NavLink from '../molecules/NavLink';
import Heading from '../atoms/Heading';
import CielLogo from '../../assets/images//ciel-logo.png'
export default function Sidebar({ modules, activeModuleId, onModuleChange }) {
  return (
    
    <aside id="sidebar" className="w-full lg:w-64 bg-white lg:border-r border-gray-200 p-4 lg:p-6 lg:fixed lg:h-full">
      <img src={CielLogo} alt="Ciel logo" className='h-[100px] m-auto' />
      <Heading level={1} className="text-blue-600 mb-6">Bac Pro CIEL</Heading>
      <nav className="space-y-2">
        {modules.map((module, index) => (
          <NavLink
            key={module.id}
            icon={module.icon}
            text={`Module ${index + 1}: ${module.title}`}
            isActive={activeModuleId === module.id}
            onClick={(e) => {
              e.preventDefault();
              onModuleChange(module.id);
            }}
          />
        ))}
      </nav>
    </aside>
  );
}