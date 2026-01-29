import { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative h-[600px] bg-gradient-to-r from-gray-900/70 to-gray-900/50">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="text-white max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Consultation,<br />
              Design,<br />
              & Marketing
            </h1>
          </div>

          <div className="bg-blue-900/95 backdrop-blur-sm p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-white text-2xl font-semibold mb-6 text-center">
              Get a Free<br />Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 rounded focus:outline-none focus:border-white"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 rounded focus:outline-none focus:border-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 rounded focus:outline-none focus:border-white"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-4 py-3 bg-transparent border border-white/30 text-white placeholder-white/60 rounded focus:outline-none focus:border-white resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
              >
                Get Quick Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
