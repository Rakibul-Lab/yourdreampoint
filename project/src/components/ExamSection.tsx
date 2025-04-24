import { Calendar, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExamSection() {
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
            Upcoming Monthly Exams
          </h2>
          <p className="text-lg text-gray-600">Register for our comprehensive monthly assessments</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "BCS Preliminary Test",
              date: "March 25, 2024",
              time: "3 Hours",
              price: "৳500",
              subjects: ["Bangladesh Affairs", "International Affairs", "General Science"],
              gradient: "from-blue-600 to-primary-600"
            },
            {
              title: "Bank Job Preparation",
              date: "March 30, 2024",
              time: "2.5 Hours",
              price: "৳450",
              subjects: ["Banking", "Mathematics", "English"],
              gradient: "from-secondary-600 to-purple-600"
            },
            {
              title: "Primary Teacher Exam",
              date: "April 5, 2024",
              time: "2 Hours",
              price: "৳400",
              subjects: ["Teaching Methods", "Child Psychology", "General Knowledge"],
              gradient: "from-primary-600 to-cyan-600"
            }
          ].map((exam, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <motion.div 
                className={`bg-gradient-to-r ${exam.gradient} text-white p-6`}
              >
                <h3 className="text-xl font-semibold mb-2">{exam.title}</h3>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{exam.date}</span>
                </div>
              </motion.div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock size={16} className="text-primary-500" />
                  <span className="text-gray-600">{exam.time}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Subjects Covered:</h4>
                  <ul className="space-y-1">
                    {exam.subjects.map((subject, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <Award size={16} className="text-primary-500" />
                        <span className="text-gray-700">{subject}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <div className="text-2xl font-bold text-primary-600 mb-4">{exam.price}</div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${exam.gradient} text-white py-2 px-4 rounded-lg transition duration-300 shadow-md shadow-primary-100`}
                  >
                    Register Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}