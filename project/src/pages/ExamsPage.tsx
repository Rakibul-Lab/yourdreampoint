import { motion } from 'framer-motion';
import { Calendar, Clock, Award, Filter, Search, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ExamsPage() {
  const examCategories = [
    "BCS", "Bank Jobs", "Primary Teacher", "Railway", "Police", "Defense"
  ];

  const upcomingExams = [
    {
      title: "41st BCS Preliminary",
      date: "March 30, 2024",
      time: "3 Hours",
      seats: 2000,
      subjects: ["Bangladesh Affairs", "International Affairs", "General Science"],
      price: "৳500",
      gradient: "from-blue-600 to-primary-600"
    },
    {
      title: "Sonali Bank Senior Officer",
      date: "April 5, 2024",
      time: "2.5 Hours",
      seats: 1500,
      subjects: ["Banking", "Mathematics", "English"],
      price: "৳450",
      gradient: "from-secondary-600 to-purple-600"
    },
    {
      title: "Primary Teacher Registration",
      date: "April 12, 2024",
      time: "2 Hours",
      seats: 3000,
      subjects: ["Teaching Methods", "Child Psychology", "General Knowledge"],
      price: "৳400",
      gradient: "from-primary-600 to-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-primary-900 to-secondary-900">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-luxury-300 to-luxury-500 mb-4">
              Upcoming Exams
            </h1>
            <p className="text-gray-300 text-lg">Prepare for your dream career with our comprehensive exam packages</p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 shadow-luxury">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search exams..."
                    className="w-full bg-white/5 border border-gray-600 rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select className="w-full bg-white/5 border border-gray-600 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500 appearance-none">
                    <option value="">All Categories</option>
                    {examCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Exam Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          >
            {examCategories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
              >
                <BookOpen className="w-6 h-6 text-luxury-500 mx-auto mb-2" />
                <span className="text-white text-sm">{category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Exam Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingExams.map((exam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700 group"
              >
                <div className={`bg-gradient-to-r ${exam.gradient} p-6`}>
                  <h3 className="text-xl font-semibold text-white mb-2">{exam.title}</h3>
                  <div className="flex items-center space-x-2 text-white/80">
                    <Calendar size={16} />
                    <span>{exam.date}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4 text-gray-300">
                    <Clock size={16} />
                    <span>{exam.time}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-gray-300 font-semibold mb-2">Subjects Covered:</h4>
                    <ul className="space-y-2">
                      {exam.subjects.map((subject, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="flex items-center space-x-2 text-gray-400"
                        >
                          <Award size={16} className="text-luxury-500" />
                          <span>{subject}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-luxury-500">{exam.price}</span>
                    <span className="text-gray-400">{exam.seats} seats</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${exam.gradient} text-white py-3 px-4 rounded-lg transition duration-300 shadow-md shadow-black/20`}
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}