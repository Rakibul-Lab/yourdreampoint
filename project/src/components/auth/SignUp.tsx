import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, UserPlus, ArrowRight } from 'lucide-react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-primary-900 to-secondary-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-luxury-pattern opacity-5"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-luxury">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-luxury-300 to-luxury-500">
              Create Account
            </h2>
            <p className="text-gray-300 mt-2">Join our premium learning platform</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500 transition-all"
                  placeholder="Full name"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500 transition-all"
                  placeholder="Email address"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-gray-600 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:border-luxury-500 focus:ring-1 focus:ring-luxury-500 transition-all"
                  placeholder="Password"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <input type="checkbox" className="rounded border-gray-600 text-luxury-500 focus:ring-luxury-500 bg-white/5" required />
              <span className="ml-2 text-sm text-gray-300">
                I agree to the{' '}
                <Link to="/terms" className="text-luxury-400 hover:text-luxury-300">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-luxury-400 hover:text-luxury-300">
                  Privacy Policy
                </Link>
              </span>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-luxury-500 to-luxury-600 text-black font-semibold py-3 rounded-lg shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex items-center justify-center group"
            >
              <UserPlus className="w-5 h-5 mr-2" />
              Create Account
            </motion.button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center"
          >
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link 
                to="/signin" 
                className="text-luxury-400 hover:text-luxury-300 inline-flex items-center"
              >
                Sign in
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}