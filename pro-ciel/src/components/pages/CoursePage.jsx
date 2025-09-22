import { useState, useEffect } from 'react';
import { courseData } from '../../data/CourseData';
import MainLayout from '../templates/MainLayout';
import Sidebar from '../organisms/Sidebar';
import ModuleContent from '../organisms/ModuleContent';
import Button from '../atoms/Button';
import HomePage from './HomePage'; 


const allModules = Object.values(courseData).flat();

export default function CoursePage() {
  // On s'assure de commencer sur un module qui existe
  const [activeModuleId, setActiveModuleId] = useState('home')
;
  const [isDyslexicFont, setDyslexicFont] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('font-dys') === 'true') {
      setDyslexicFont(true);
      document.body.classList.add('font-dys');
    }
  }, []);

  const handleFontToggle = () => {
    const newFontState = !isDyslexicFont;
    setDyslexicFont(newFontState);
    localStorage.setItem('font-dys', newFontState);
    document.body.classList.toggle('font-dys');
  };

  // La recherche se fait maintenant sur la liste aplatie
  const activeModule = allModules.find(m => m.id === activeModuleId);

  return (
    <MainLayout
      sidebar={
        <Sidebar
          data={courseData}
          activeModuleId={activeModuleId}
          onModuleChange={setActiveModuleId}
        />
      }
      mainContent={
        <>
          <div className="flex justify-end mb-4">
            <Button onClick={handleFontToggle} variant="secondary">Police Dys</Button>
          </div>
          {activeModuleId === 'home' ? (
            <HomePage />
          ) : (
            <ModuleContent module={activeModule} />
          )}        </>
      }
    />
  );
}
