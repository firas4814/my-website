import { motion } from 'framer-motion'
import { Award, Target, Users, TrendingUp, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every session, pushing you to reach your maximum potential.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our coaches are passionate about soccer and dedicated to your success.',
    },
    {
      icon: Users,
      title: 'Personalization',
      description: 'Every training plan is tailored to your unique strengths, weaknesses, and goals.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'We focus on continuous improvement and measurable progress.',
    },
  ]

  const coaches = [
    {
      name: 'Firas Syed',
      role: 'Founder & Head Coach',
      bio: 'Former professional player with extensive coaching credentials. Specializes in technical development and tactical awareness.',
      image: '/IMG_3250.jpg',
    },
    {
      name: 'habib dbouk',
      role: 'Head Coach',
      bio: 'Former BC futsal player with a decade of playing experience, specialising in technique refinement and youth development.',
      image: '/WhatsApp Image 2025-11-12 at 20.25.36.jpeg',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Prime Player Lab</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated to transforming soccer players through personalized, professional coaching
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At Prime Player Lab, we believe that every player has unique potential waiting to be unlocked. 
                Our mission is to provide world-class, personalized coaching that accelerates your development 
                and helps you achieve your soccer goals.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Unlike group training where individual attention is limited, our 1-on-1 approach ensures 
                that every minute of your session is focused entirely on your improvement. We analyze your 
                game, identify specific areas for development, and create a customized training plan that 
                delivers results.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We offer three specialized programs to meet diverse needs:
              </p>
              <ul className="text-lg text-gray-600 mb-4 space-y-2 list-disc list-inside">
                <li><strong>Recreational Training ($25/session)</strong> - Perfect for players who want to enjoy the game, build fundamental skills, and have fun in a supportive environment.</li>
                <li><strong>Competitive Training ($35/session)</strong> - Designed for players looking to compete at higher levels, with advanced techniques, tactical awareness, and performance analysis.</li>
                <li><strong>Kids with Disabilities - Autism Specialized ($45/session)</strong> - Our specialized program for children with autism and other disabilities, featuring sensory-friendly coaching, individualized pacing, and inclusive skill development.</li>
              </ul>
              <p className="text-lg text-gray-600">
                No matter your age, skill level, or unique needs, we're here to guide your journey and help you reach your full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-black rounded-2xl p-8 text-white border-2 border-gray-800">
                <div className="text-6xl mb-4">⚽</div>
                <h3 className="text-2xl font-bold mb-4">Why 1-on-1?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>100% personalized attention</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Customized training plans</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Immediate feedback & corrections</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Faster skill development</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Coaches</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                {coach.image ? (
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 mt-6 border-4 border-gray-200">
                    <img 
                      src={coach.image} 
                      alt={coach.name}
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center top' }}
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-black" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{coach.name}</h3>
                <p className="text-black font-semibold text-center mb-2">{coach.role}</p>
                <p className="text-gray-600 text-center">{coach.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of dedicated players and experience the difference personalized coaching makes
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

