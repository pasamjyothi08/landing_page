import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Home className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Real trust</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">HOME</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">SERVICES</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">ABOUT / PROJECTS</a>
            <a href="#practices" className="text-gray-700 hover:text-blue-600 transition">BEST PRACTICES</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition">
              CONTACT
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
