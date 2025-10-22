export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-neutral-800">
      <div className="container mx-auto px-6 py-8 text-sm text-gray-500 flex items-center justify-between">
        <span>© {year} Substans</span>
        <a href="#top" className="hover:text-white transition">
          Till toppen ↑
        </a>
      </div>
    </footer>
  );
}
