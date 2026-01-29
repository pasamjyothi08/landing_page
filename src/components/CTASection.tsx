const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-r from-gray-900/80 to-gray-900/60">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
          Learn more about our listing process, as well as our<br />
          additional staging and design work.
        </h2>

        <button className="bg-white text-gray-800 px-8 py-3 rounded hover:bg-gray-100 transition font-semibold">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default CTASection;
