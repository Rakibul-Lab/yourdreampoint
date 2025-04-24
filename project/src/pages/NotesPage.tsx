import { motion } from 'framer-motion';
import { Search, FileText, Download, Star, BookOpen, Filter } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotesPage() {
  const categories = ["All", "BCS", "Bank", "Primary", "English", "Mathematics"];

  const notes = [
    {
      title: "BCS Written Notes",
      subject: "Bangladesh Affairs",
      author: "Dr. Rahman Khan",
      rating: 4.8,
      downloads: "2.5k",
      pages: 150,
      price: "৳300",
      gradient: "from-blue-600 to-primary-600",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80"
    },
    {
      title: "Bank Job Guide",
      subject: "Mathematics & Reasoning",
      author: "Prof. Sarah Ahmed",
      rating: 4.9,
      downloads: "3.1k",
      pages: 200,
      price: "৳250",
      gradient: "from-secondary-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80"
    },
    {
      title: "English Master Guide",
      subject: "Complete English",
      author: "John Miller",
      rating: 4.7,
      downloads: "1.8k",
      pages: 180,
      price: "৳200",
      gradient: "from-primary-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80"
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
              Premium Study Notes
            </h1>
            <p className="text-gray-300 text-lg">Access high-quality study materials prepared by experts</p>
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
                    placeholder="Search notes..."
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

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12"
          >
            {categories.map((category, index) => (
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

          {/* Notes Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {notes.map((note, index) => (
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
                    src={note.image}
                    alt={note.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 flex items-center space-x-2">
                    <div className="flex items-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm ml-1">{note.rating}</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
                      {note.downloads} downloads
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{note.title}</h3>
                  <p className="text-gray-400 mb-4">{note.subject}</p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-gray-300">
                      <FileText size={16} className="mr-1" />
                      <span>{note.pages} pages</span>
                    </div>
                    <span className="text-2xl font-bold text-luxury-500">{note.price}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${note.gradient} text-white py-3 px-4 rounded-lg transition duration-300 shadow-md flex items-center justify-center space-x-2`}
                  >
                    <Download size={18} />
                    <span>Download Now</span>
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