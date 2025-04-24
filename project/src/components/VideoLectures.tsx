import { Play, Clock, BookOpen, Star, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function VideoLectures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const lectures = [
    {
      title: "BCS Special: International Relations",
      instructor: "Dr. Rahman Khan",
      duration: "2h 30m",
      lessons: 12,
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
      gradient: "from-blue-600 to-primary-600"
    },
    {
      title: "Bank Job Mathematics Masterclass",
      instructor: "Prof. Sarah Ahmed",
      duration: "3h 45m",
      lessons: 15,
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&q=80",
      gradient: "from-secondary-600 to-purple-600"
    },
    {
      title: "English Grammar Advanced Course",
      instructor: "John Miller",
      duration: "4h 15m",
      lessons: 18,
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
      gradient: "from-primary-600 to-cyan-600"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 mb-4">
            Premium Video Lectures
          </h2>
          <p className="text-lg text-gray-600">Learn from the best instructors with our high-quality video content</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {lectures.map((lecture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img
                    src={lecture.thumbnail}
                    alt={lecture.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  {/* Play Button Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <motion.div
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                    >
                      <Play className="w-8 h-8 text-white fill-current" />
                    </motion.div>
                  </motion.div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 text-white mr-1" />
                    <span className="text-white text-sm">{lecture.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-gray-700 font-medium">{lecture.rating}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span className="text-sm">{lecture.lessons} lessons</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                    {lecture.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{lecture.instructor}</p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${lecture.gradient} text-white py-3 px-4 rounded-lg transition duration-300 shadow-md flex items-center justify-center group`}
                  >
                    <span>Start Learning</span>
                    <ChevronRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center"
          >
            <span>View All Lectures</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}