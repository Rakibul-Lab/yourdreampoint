import { BookOpen, Clock, Users, Sparkles, Crown, Star, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-black via-primary-900 to-secondary-900 pt-24 overflow-hidden">
      {/* Luxury Pattern Overlay */}
      <div className="absolute inset-0 bg-luxury-pattern opacity-5"></div>
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-shine bg-[length:100px_100px] animate-shimmer opacity-0"></div>
      
      {/* Golden Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-luxury-500 rounded-full animate-pulse-luxury"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative" ref={ref}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div className="text-white space-y-8">
            {/* Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-luxury-500/20 to-luxury-600/20 backdrop-blur-lg border border-luxury-500/30 shadow-luxury"
            >
              <Crown className="w-5 h-5 text-luxury-500 mr-2" />
              <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-luxury-300 to-luxury-500">
                Ultra Premium Experience
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold leading-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-luxury-300 via-luxury-500 to-gold-400">
                Elevate Your
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-luxury-200 to-luxury-400">
                Learning Journey
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Join an elite community of achievers and transform your preparation with our premium learning experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-6"
            >
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255, 193, 7, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-luxury-500 to-luxury-600 text-black px-8 py-4 rounded-lg font-semibold shadow-luxury transition duration-300 transform hover:shadow-luxury-hover group"
              >
                <span className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Start Premium Trial
                </span>
              </motion.button>
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.15)'
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-luxury-500/30 text-white px-8 py-4 rounded-lg font-semibold backdrop-blur-sm transition duration-300 hover:border-luxury-500/50 hover:shadow-luxury group"
              >
                <span className="flex items-center">
                  <Star className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                  Explore Features
                </span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: "50K+", label: "Premium Users" },
                { number: "99%", label: "Success Rate" },
                { number: "24/7", label: "Expert Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-luxury-300 to-luxury-500">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            variants={itemVariants}
            className="hidden md:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Animated Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-luxury-400 to-luxury-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-luxury"></div>
              
              {/* Main Image */}
              <motion.div className="relative">
                <motion.img 
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80"
                  alt="Premium Learning Experience"
                  className="rounded-xl shadow-2xl shadow-black/20 border-2 border-luxury-500/20 backdrop-blur-sm"
                />
                
                {/* Floating Achievement Cards */}
                <motion.div
                  animate={{ y: [-10, 10], transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}
                  className="absolute -right-8 top-10 bg-black/80 backdrop-blur-xl rounded-lg p-4 border border-luxury-500/30 shadow-luxury"
                >
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-6 h-6 text-luxury-500" />
                    <div>
                      <div className="text-sm font-semibold text-white">Top Rated</div>
                      <div className="text-xs text-gray-400">Premium Course</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10], transition: { duration: 2.5, repeat: Infinity, repeatType: "reverse" } }}
                  className="absolute -left-8 bottom-10 bg-black/80 backdrop-blur-xl rounded-lg p-4 border border-luxury-500/30 shadow-luxury"
                >
                  <div className="flex items-center space-x-2">
                    <Star className="w-6 h-6 text-luxury-500" />
                    <div>
                      <div className="text-sm font-semibold text-white">4.9/5 Rating</div>
                      <div className="text-xs text-gray-400">Student Reviews</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: <BookOpen className="w-12 h-12 mb-4 text-luxury-500" />,
              title: "Premium Content",
              description: "Access exclusive study materials and practice sets"
            },
            {
              icon: <Clock className="w-12 h-12 mb-4 text-luxury-500" />,
              title: "AI-Powered Analytics",
              description: "Get personalized insights and performance tracking"
            },
            {
              icon: <Users className="w-12 h-12 mb-4 text-luxury-500" />,
              title: "Expert Mentorship",
              description: "One-on-one guidance from industry professionals"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-luxury-400 to-luxury-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-8 border border-luxury-500/20 shadow-luxury hover:shadow-luxury-hover transition duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-luxury-300 to-luxury-500">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}