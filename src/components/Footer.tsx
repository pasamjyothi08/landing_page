import { Home, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-wrap gap-8">
            <a href="#home" className="hover:text-blue-200 transition">Home</a>
            <a href="#services" className="hover:text-blue-200 transition">Services</a>
            <a href="#projects" className="hover:text-blue-200 transition">Projects</a>
            <a href="#testimonials" className="hover:text-blue-200 transition">Testimonials</a>
            <a href="#contact" className="hover:text-blue-200 transition">Contact</a>
          </div>

          <div className="flex items-center justify-end space-x-6">
            <span className="text-sm">Follow us on:</span>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition">
                <Instagram className="w-4 h-4" />
              </button>
              <button className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-100 transition">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>

            <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition font-semibold ml-4">
              Send Info
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span className="font-semibold">Real trust</span>
            </div>

            <p className="text-sm text-blue-200">
              All rights Reserved 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
