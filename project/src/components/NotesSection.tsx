import { FileText, Download, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotesSection() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
            Premium Study Notes
          </h2>
          <p className="text-lg text-gray-600">Download comprehensive study materials prepared by experts</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "BCS Written Notes",
              subject: "Bangladesh Affairs",
              rating: 4.8,
              downloads: "2.5k",
              pages: 150,
              gradient: "from-blue-500 to-primary-500"
            },
            {
              title: "Bank Job Guide",
              subject: "Mathematics & Reasoning",
              rating: 4.9,
              downloads: "3.1k",
              pages: 200,
              gradient: "from-secondary-500 to-purple-500"
            },
            {
              title: "English Master Guide",
              subject: "Complete English",
              rating: 4.7,
              downloads: "1.8k",
              pages: 180,
              gradient: "from-primary-500 to-cyan-500"
            }
          ].map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between mb-4"
                >
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-r ${note.gradient} p-3 rounded-lg`}
                  >
                    <FileText className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="flex items-center bg-yellow-50 px-3 py-1 rounded-full"
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-yellow-700 font-medium">{note.rating}</span>
                  </motion.div>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{note.title}</h3>
                <p className="text-gray-600 mb-4">{note.subject}</p>
                <div className="flex justify-between text-sm text-gray-500 mb-6">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{note.pages} pages</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{note.downloads} downloads</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${note.gradient} text-white py-3 px-4 rounded-lg transition duration-300 shadow-md flex items-center justify-center font-medium`}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}