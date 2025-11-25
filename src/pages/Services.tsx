import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Target, Users, Award, CheckCircle, ArrowRight, Star } from 'lucide-react'

export default function Services() {
  const programs = [
    {
      title: 'Recreational Training',
      duration: '60 minutes',
      price: '$25',
      features: [
        'Fun, engaging sessions',
        'Basic technique fundamentals',
        'Ball control & dribbling',
        'Passing & receiving',
        'Fundamental skills development',
        'Positive reinforcement',
      ],
      recommended: false,
    },
    {
      title: 'Competitive Training',
      duration: '90 minutes',
      price: '$35',
      features: [
        'Advanced technique work',
        'Position-specific training',
        'Tactical awareness',
        'Physical conditioning',
        'Match preparation',
        'Progress tracking',
        'Performance analysis',
      ],
      recommended: true,
    },
  ]

  const trainingAreas = [
    {
      icon: Target,
      title: 'Technical Skills',
      description: 'Master ball control, passing, shooting, and all fundamental techniques.',
    },
    {
      icon: Users,
      title: 'Position-Specific',
      description: 'Specialized training for your position - striker, midfielder, defender, or goalkeeper.',
    },
    {
      icon: Award,
      title: 'Tactical Understanding',
      description: 'Learn game intelligence, positioning, and decision-making.',
    },
    {
      icon: Clock,
      title: 'Fitness & Conditioning',
      description: 'Build speed, agility, endurance, and strength specific to soccer.',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Training Programs</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive 1-on-1 training designed to maximize your potential and accelerate your development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Program</h2>
            <p className="text-xl text-gray-600">Flexible training options to fit your goals and schedule</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  program.recommended ? 'ring-4 ring-black transform scale-105' : ''
                }`}
              >
                {program.recommended && (
                  <div className="bg-black text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold text-black">{program.price}</span>
                    <span className="text-gray-500 ml-2">/session</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{program.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-black mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training Focus Areas</h2>
            <p className="text-xl text-gray-600">Comprehensive development across all aspects of your game</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Real Results From Real Players
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Hear from players and parents who have experienced the impact of our 1-on-1 training programs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Prime Player Lab actually made soccer fun again. The coaches broke down my weak spots and showed me drills that finally clicked. I just made our high school squad at 15!',
                name: 'Jordan Reyes',
              },
              {
                quote:
                  'As a parent, the progress has been incredible. My son now plays with so much more confidence and has a clear path for improvement after every session.',
                name: 'Samantha Lee',
              },
              {
                quote:
                  'The individualized attention and accountability are unmatched. I appreciated the focus on both skill development and game intelligence.',
                name: 'Azizi Mohomad Ramtin',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6 italic flex-1">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Training?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your first session and experience the difference personalized coaching makes
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Book Your Session
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

