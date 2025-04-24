import { motion } from 'framer-motion';
import { BookOpen, Users, Building2, GraduationCap, Search, Briefcase, Star, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function JobPrepPage() {
  const categories = [
    { title: "Bank Jobs", icon: Building2 },
    { title: "Teaching", icon: GraduationCap },
    { title: "Government", icon: Briefcase },
    { title: "Corporate", icon: Users }
  ];

  const courses = [
    {
      title: "Bank Job Master Course",
      instructor: "Dr. Sarah Ahmed",
      duration: "6 months",
      lectures: 120,
      rating: 4.9,
      students: "2.5K",
      price: "৳12,000",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
      gradient: "from-blue-600 to-primary-600"
    },
    {
      title: "BCS Special Preparation",
      instructor: "Prof. Rahman Khan",
      duration: "8 months",
      lectures: 150,
      rating: 4.8,
      students: "3K",
      price: "৳15,000",
      image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80",
      gradient: "from-secondary-600 to-purple-600"
    },
    {
      title: "Primary Teacher Course",
      instructor: "Dr. Fatima Hassan",
      duration: "4 months",
      lectures: 90,
      rating: 4.9,
      students: "1.8K",
      price: "৳8,000",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80",
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
              Complete Job Preparation
            </h1>
            <p className="text-gray-300 text-lg">Expert-led courses to help you succeed in your dream career</p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses, topics, or skills..."
                className="w-full bg-white/10 backdrop-blur-sm border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500"
              />
            </div>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {categories.map(({ title, icon: Icon }, index) => (
              <motion.button
                key={title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-gray-600 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <Icon className="w-8 h-8 text-luxury-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-white font-medium">{title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Course Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2">
                    <div className="flex items-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm ml-1">{course.rating}</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      {course.students} students
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.instructor}</p>
                  
                  <div className="flex justify-between items-center mb-4 text-gray-300">
                    <div className="flex items-center">
                      <BookOpen size={16} className="mr-1" />
                      <span>{course.lectures} lectures</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-luxury-500">{course.price}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${course.gradient} text-white py-3 px-4 rounded-lg transition duration-300 shadow-md shadow-black/20`}
                  >
                    Enroll Now
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