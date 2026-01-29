const AboutUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-2">About Us</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8" />

        <p className="text-gray-600 leading-relaxed mb-8">
          [Insert years] of experience in both interior design and marketing are reflected in a comprehensive plan to assist you in finding and listing your homes. Utilizing only specialized techniques, we provide quality work to ensure the satisfaction of our clients. What truly separates us from clients who focus primarily on numbers is that we care for our clients and their families while assisting in the purchase or sale of their homes.
        </p>

        <button className="text-blue-600 border-2 border-blue-600 px-8 py-2 rounded hover:bg-blue-600 hover:text-white transition font-semibold">
          LEARN MORE
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
