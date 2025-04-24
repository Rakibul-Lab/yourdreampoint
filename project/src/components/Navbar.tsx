import { Menu, X, User, Search } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600";
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-indigo-600">YourDreamPoint</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive("/")}>Home</Link>
            <Link to="/exams" className={isActive("/exams")}>Exams</Link>
            <Link to="/job-prep" className={isActive("/job-prep")}>Job Prep</Link>
            <Link to="/circulars" className={isActive("/circulars")}>Circulars</Link>
            <Link to="/notes" className={isActive("/notes")}>Notes</Link>
            <button 
              onClick={() => navigate('/signin')}
              className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <User size={18} />
              <span>Sign In</span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className={`block px-3 py-2 rounded-md ${isActive("/")}`}>Home</Link>
            <Link to="/exams" className={`block px-3 py-2 rounded-md ${isActive("/exams")}`}>Exams</Link>
            <Link to="/job-prep" className={`block px-3 py-2 rounded-md ${isActive("/job-prep")}`}>Job Prep</Link>
            <Link to="/circulars" className={`block px-3 py-2 rounded-md ${isActive("/circulars")}`}>Circulars</Link>
            <Link to="/notes" className={`block px-3 py-2 rounded-md ${isActive("/notes")}`}>Notes</Link>
            <button 
              onClick={() => navigate('/signin')}
              className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 w-full mt-2"
            >
              <User size={18} />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}