
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2021 - 2025",
      gpa: "3.8/4.0",
      relevantCourses: [
        "Data Structures & Algorithms",
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Operating Systems",
        "Web Development"
      ],
      achievements: [
        "Dean's List for 3 consecutive semesters",
        "President of Computer Science Club",
        "Hackathon Winner - TechFest 2024"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Education
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My academic journey in Computer Science
            </p>
          </div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-purple-300 text-lg">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300 font-semibold">{edu.period}</p>
                      <p className="text-purple-400 font-semibold">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Relevant Coursework</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <div key={courseIndex} className="bg-slate-700/50 px-3 py-2 rounded-md">
                          <span className="text-gray-300 text-sm">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
