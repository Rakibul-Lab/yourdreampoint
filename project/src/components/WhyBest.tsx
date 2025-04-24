import { Target, Trophy, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyBest() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600">Join thousands of successful candidates who trust our platform</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Expert Teachers",
              description: "Learn from experienced professionals with proven track records",
              gradient: "from-blue-500 to-primary-500"
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Focused Approach",
              description: "Structured learning path designed for maximum efficiency",
              gradient: "from-primary-500 to-cyan-500"
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: "Regular Updates",
              description: "Stay current with the latest exam patterns and syllabi",
              gradient: "from-secondary-500 to-purple-500"
            },
            {
              icon: <Trophy className="w-8 h-8" />,
              title: "Proven Results",
              description: "Thousands of successful candidates and counting",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-block p-4 rounded-full bg-gradient-to-r ${feature.gradient} text-white mb-4`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Active Students", gradient: "from-blue-500 to-primary-500" },
              { number: "1000+", label: "Video Lectures", gradient: "from-primary-500 to-cyan-500" },
              { number: "95%", label: "Success Rate", gradient: "from-secondary-500 to-purple-500" },
              { number: "24/7", label: "Support", gradient: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="p-6 rounded-xl bg-white border border-gray-100 shadow-lg text-center"
              >
                <div className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}