export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center p-4 mt-auto text-gray-500 text-sm">
      &copy; {currentYear} | Made with <span role="img" aria-label="heart">❤️</span> by Alix Boufflers
    </footer>
  );
}