const OurProjects = () => {
  const projects = [
    {
      title: 'Consultation',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Request A Price',
    },
    {
      title: 'Design',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Request A Price',
    },
    {
      title: 'Marketing & Design',
      image: 'https://images.pexels.com/photos/2098624/pexels-photo-2098624.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Request A Price',
    },
    {
      title: 'Consultation & Marketing',
      image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Request A Price',
    },
    {
      title: 'Consultation',
      image: 'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 'Request A Price',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="absolute top-32 left-10 w-3 h-3 bg-orange-500 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">Our Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We know what buyers are looking for and suggest projects that will bring
            clients top dollar for the sale of their homes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.price}</p>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded text-sm font-semibold transition">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
