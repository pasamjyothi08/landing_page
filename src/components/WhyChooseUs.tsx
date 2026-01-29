import { TrendingUp, Palette, Target } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Potential ROI',
      description: 'Leverage our expertise to maximize the return on your investment. Our team will work with you to design a house that provides a strong potential ROI and reaches its full value.',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our team provides top notch designs tailored to your preferences. We have years of experience and are devoted to make sure your vision becomes a reality.',
    },
    {
      icon: Target,
      title: 'Marketing',
      description: 'Staging and marketing with targeted tools are part of our expert marketing plan. Marketing gets you extremely high quality leads at lower costs.',
    },
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="absolute top-20 right-20 w-4 h-4 bg-blue-500 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">Why Choose Us?</h2>
          <div className="w-32 h-1 bg-blue-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 hover:shadow-lg transition rounded-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
