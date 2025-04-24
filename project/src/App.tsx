import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExamSection from './components/ExamSection';
import VideoLectures from './components/VideoLectures';
import JobPrep from './components/JobPrep';
import NotesSection from './components/NotesSection';
import WhyBest from './components/WhyBest';
import Footer from './components/Footer';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ExamsPage from './pages/ExamsPage';
import JobPrepPage from './pages/JobPrepPage';
import CircularsPage from './pages/CircularsPage';
import NotesPage from './pages/NotesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/job-prep" element={<JobPrepPage />} />
        <Route path="/circulars" element={<CircularsPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/" element={
          <div className="min-h-screen">
            <Navbar />
            <div className="bg-gradient-to-br from-black via-primary-900 to-secondary-900 bg-hero-pattern">
              <Hero />
            </div>
            <div className="bg-gradient-to-b from-gray-900 to-primary-900 bg-exam-pattern">
              <ExamSection />
            </div>
            <div className="bg-gradient-to-br from-primary-900 via-secondary-900 to-black">
              <VideoLectures />
            </div>
            <div className="bg-gradient-to-t from-gray-900 to-secondary-900">
              <JobPrep />
            </div>
            <div className="bg-gradient-to-br from-black via-primary-900 to-secondary-900 bg-notes-pattern">
              <NotesSection />
            </div>
            <div className="bg-gradient-to-b from-secondary-900 to-black">
              <WhyBest />
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;