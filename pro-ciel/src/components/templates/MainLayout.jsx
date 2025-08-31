import Footer from "../molecules/Footer"
export default function MainLayout({ sidebar, mainContent }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {sidebar}
      <div className="w-full lg:ml-64 flex flex-col">
        <main className="flex-grow p-4 md:p-8">
          {mainContent}
        </main>
        <Footer />
      </div>
    </div>
  );
}