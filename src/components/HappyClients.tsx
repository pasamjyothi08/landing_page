import { Star } from 'lucide-react';

const HappyClients = () => {
  const testimonials = [
    {
      name: 'Beauman Smith',
      role: 'Purchasing Head',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
    },
    {
      name: 'Shayan Kamal',
      role: 'Entrepreneur',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
    },
    {
      name: 'Julien Lopez',
      role: 'Sales Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
    },
    {
      name: 'Sherry Freeman',
      role: 'Architect Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
    },
    {
      name: 'Lucy',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">Happy Clients</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {testimonial.text}
              </p>

              <div className="flex justify-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <h4 className="font-semibold text-gray-800 text-center">{testimonial.name}</h4>
              <p className="text-gray-500 text-xs text-center">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyClients;
