import { Facebook, Twitter, Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-indigo-400">YourDreamPoint</h3>
            <p className="text-gray-400">Empowering students to achieve their dreams through quality education and preparation.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Study Materials</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">BCS Preparation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Bank Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Teaching</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">All Notes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail size={20} className="text-indigo-400" />
                <span className="text-gray-400">support@****.com</span>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition w-full flex items-center justify-center">
                <MessageCircle size={20} className="mr-2" />
                Live Chat
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YourDreamPoint. All rights reserved.</p>
        </div>
      </div>

      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition">
          <MessageCircle size={24} />
        </button>
      </div>
    </footer>
  );
}