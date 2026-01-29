const PhotoGallery = () => {
  const images = [
    'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-32 -translate-y-32 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-32 translate-y-32 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 border-4 border-orange-500 rounded-lg" />
            <img
              src={images[0]}
              alt="Property consultation"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <div className="relative">
            <div className="absolute -right-4 -top-4 w-20 h-20 border-4 border-blue-500 rounded-lg" />
            <img
              src={images[1]}
              alt="Design consultation"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <div className="relative">
            <img
              src={images[2]}
              alt="Client meeting"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
