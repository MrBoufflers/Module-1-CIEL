import { useState, useEffect } from 'react';
import { courseData } from '../../data/CourseData';
import MainLayout from '../templates/MainLayout';
import Sidebar from '../organisms/Sidebar';
import ModuleContent from '../organisms/ModuleContent';
import Button from '../atoms/Button';


export default function CoursePage() {
  const [activeModuleId, setActiveModuleId] = useState(courseData[0].id);
  const [isDyslexicFont, setDyslexicFont] = useState(false);
  const [isDyslexicText, setDyslexicText] = useState("Police Dys");

  useEffect(() => {
    if (localStorage.getItem('font-dys') === 'true') {
      setDyslexicFont(true);
      document.body.classList.add('font-dys');
    }
  }, []);

  const handleFontToggle = () => {
    const newFontState = !isDyslexicFont;
    setDyslexicFont(newFontState);
    newFontState  ? setDyslexicText("Police classique") : setDyslexicText("Police Dys")
    localStorage.setItem('font-dys', newFontState);
    document.body.classList.toggle('font-dys');
  };

  const activeModule = courseData.find(m => m.id === activeModuleId);

  return (
    <MainLayout
      sidebar={
        <Sidebar
          modules={courseData}
          activeModuleId={activeModuleId}
          onModuleChange={setActiveModuleId}
        />
      }
      mainContent={
        <>
          <div className="flex justify-end mb-4">
            <Button onClick={handleFontToggle} variant="secondary">{isDyslexicText}</Button>
          </div>
          <ModuleContent module={activeModule} />
        </>
      }
    />
  );
}
