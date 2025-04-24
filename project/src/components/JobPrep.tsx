import { BookOpen, Building2, GraduationCap, Users } from 'lucide-react';

export default function JobPrep() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Job Preparation</h2>
          <p className="text-lg text-gray-600">Everything you need to succeed in your job search</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Study Materials</h3>
                <p className="text-gray-600">Comprehensive notes and resources for all major topics</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mock Interviews</h3>
                <p className="text-gray-600">Practice with experienced professionals</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Building2 className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Company Profiles</h3>
                <p className="text-gray-600">Detailed insights into top employers</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
                <p className="text-gray-600">Expert advice for career planning</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Latest Job Circulars</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Senior Officer",
                  company: "Bangladesh Bank",
                  deadline: "March 30, 2024",
                  vacancies: 50
                },
                {
                  title: "Assistant Teacher",
                  company: "Ministry of Education",
                  deadline: "April 5, 2024",
                  vacancies: 1500
                },
                {
                  title: "Junior Officer",
                  company: "Sonali Bank Limited",
                  deadline: "April 10, 2024",
                  vacancies: 100
                }
              ].map((job, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-lg mb-2">{job.title}</h4>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-indigo-600">Deadline: {job.deadline}</span>
                    <span className="text-gray-500">{job.vacancies} positions</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              View All Circulars
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}