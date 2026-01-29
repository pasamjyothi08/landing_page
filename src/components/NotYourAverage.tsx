const NotYourAverage = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-10 left-20 w-4 h-4 bg-blue-500 rounded-full" />
      <div className="absolute bottom-20 right-32 w-4 h-4 bg-orange-500 rounded-full" />
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Not Your Average Realtor
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Real trust is all about you. We understand that selling and/or
              buying a home is one of the most important decisions you'll make in
              your life. We focus on you and your family's needs.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Professional realtor"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6 pt-12">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ml-auto">
                  <img
                    src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Happy clients"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl ml-auto">
                  <img
                    src="https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotYourAverage;
