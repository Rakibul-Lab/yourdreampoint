import { motion } from 'framer-motion';
import { Search, Building2, Calendar, Users, ExternalLink, Bell, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CircularsPage() {
  const categories = ["All", "Government", "Bank", "Education", "Corporate", "NGO"];

  const circulars = [
    {
      title: "Senior Officer",
      organization: "Bangladesh Bank",
      location: "Dhaka",
      deadline: "March 30, 2024",
      vacancies: 50,
      experience: "3-5 years",
      salary: "৳35,000 - ৳45,000",
      gradient: "from-blue-600 to-primary-600"
    },
    {
      title: "Assistant Teacher",
      organization: "Ministry of Education",
      location: "Multiple Locations",
      deadline: "April 5, 2024",
      vacancies: 1500,
      experience: "1-2 years",
      salary: "৳25,000 - ৳35,000",
      gradient: "from-secondary-600 to-purple-600"
    },
    {
      title: "Junior Officer",
      organization: "Sonali Bank Limited",
      location: "Nationwide",
      deadline: "April 10, 2024",
      vacancies: 100,
      experience: "1-3 years",
      salary: "৳30,000 - ৳40,000",
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
              Latest Job Circulars
            </h1>
            <p className="text-gray-300 text-lg">Find and apply for your dream job opportunities</p>
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
                    placeholder="Search jobs..."
                    className="w-full bg-white/5 border border-gray-600 rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <select className="w-full bg-white/5 border border-gray-600 rounded-lg py-3 px-10 text-white focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500 appearance-none">
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Job Notification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-luxury-500/30 rounded-xl p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bell className="text-luxury-500" size={24} />
                <div>
                  <h3 className="text-white font-semibold">Get Job Alerts</h3>
                  <p className="text-gray-400">Receive notifications for new job postings</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-luxury-500 text-black px-6 py-2 rounded-lg font-medium hover:bg-luxury-400 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* Circulars */}
          <div className="space-y-6">
            {circulars.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-xl rounded-xl border border-gray-700 overflow-hidden group hover:border-luxury-500/50 transition-colors"
              >
                <div className="p-6">
                  <div className="flex flex-wrap gap-6 justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-luxury-500 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Building2 size={16} />
                        <span>{job.organization}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-300">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>Deadline: {job.deadline}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={16} />
                          <span>{job.vacancies} vacancies</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="text-right">
                        <div className="text-luxury-500 font-semibold">{job.salary}</div>
                        <div className="text-gray-400">{job.experience} experience</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`bg-gradient-to-r ${job.gradient} text-white px-6 py-2 rounded-lg flex items-center space-x-2 group`}
                      >
                        <span>Apply Now</span>
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
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