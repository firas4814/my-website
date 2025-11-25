import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'

export default function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@primeplayerlab.com',
      link: 'mailto:info@primeplayerlab.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'All over tri-cities',
      link: '#',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us to start your journey to soccer excellence. Contact us at the email below and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                  <p className="text-gray-600 mb-6">
                    Have questions? We're here to help. Contact us at this email or reach out through any of these channels.
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.a>
                ))}

                <div className="bg-black rounded-lg p-6 text-white border-2 border-gray-800">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <h3 className="font-semibold">Training Hours</h3>
                  </div>
                  <ul className="space-y-1 text-gray-300">
                    <li>Monday - Friday: 3:00 PM - 8:00 PM</li>
                    <li>Saturday: 9:00 AM - 6:00 PM</li>
                    <li>Sunday: 10:00 AM - 4:00 PM</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

