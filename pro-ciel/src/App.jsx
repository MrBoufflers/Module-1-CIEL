import { useState, useCallback } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderV2 from './components/organisms/HeaderV2';
import FooterV2 from './components/organisms/FooterV2';
import SidebarV2 from './components/organisms/SidebarV2';
import HomePageV2 from './components/pages/HomePageV2';
import NiveauPage from './components/pages/NiveauPage';
import SequencePage from './components/pages/SequencePage';
import RessourcesPage from './components/pages/RessourcesPage';
import LegacyModulePage from './components/pages/LegacyModulePage';
import TestBlocksPage from './components/pages/TestBlocksPage';

function AppLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = useCallback(() => setSidebarOpen(o => !o), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <div className="halo halo-blue" style={{ position: 'fixed', top: -120, left: -80 }} />
      <div className="halo halo-violet" style={{ position: 'fixed', bottom: -110, right: -60 }} />

      <HeaderV2 onMenuToggle={toggleSidebar} />

      <div className="flex flex-1 relative z-10">
        <SidebarV2 isOpen={sidebarOpen} onClose={closeSidebar} />
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-grow">
            {children}
          </main>
          <FooterV2 />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePageV2 />} />
        <Route path="/test-blocks" element={<TestBlocksPage />} />
        <Route path="/ressources" element={<RessourcesPage />} />
        <Route path="/ressources/:id" element={<LegacyModulePage />} />
        <Route path="/:niveau" element={<NiveauPage />} />
        <Route path="/:niveau/:seqId" element={<SequencePage />} />
        <Route path="/:niveau/:seqId/:tab" element={<SequencePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
