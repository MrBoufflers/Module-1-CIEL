import { Routes, Route, Navigate } from 'react-router-dom';
import HeaderV2 from './components/organisms/HeaderV2';
import FooterV2 from './components/organisms/FooterV2';
import HomePageV2 from './components/pages/HomePageV2';
import NiveauPage from './components/pages/NiveauPage';
import SequencePage from './components/pages/SequencePage';

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="halo halo-blue" style={{ top: -120, left: -80 }} />
      <div className="halo halo-violet" style={{ bottom: -110, right: -60 }} />
      <HeaderV2 />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <FooterV2 />
    </div>
  );
}

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePageV2 />} />
        <Route path="/:niveau" element={<NiveauPage />} />
        <Route path="/:niveau/:seqId" element={<SequencePage />} />
        <Route path="/:niveau/:seqId/:tab" element={<SequencePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
