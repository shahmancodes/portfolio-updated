
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      period: "June 2024 - August 2024",
      location: "Remote",
      description: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with senior developers on feature implementation",
        "Participated in code reviews and agile development processes",
        "Improved application performance by 25% through optimization"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Git", "Docker"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "January 2024 - May 2024",
      location: "Part-time",
      description: [
        "Built responsive user interfaces using React and Tailwind CSS",
        "Integrated RESTful APIs and managed application state",
        "Worked closely with UX designers to implement pixel-perfect designs",
        "Conducted user testing and implemented feedback improvements"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Figma"]
    },
    {
      title: "Teaching Assistant",
      company: "University of Technology",
      period: "September 2023 - December 2023",
      location: "On-campus",
      description: [
        "Assisted in teaching Data Structures and Algorithms course",
        "Conducted lab sessions for 30+ students",
        "Graded assignments and provided constructive feedback",
        "Mentored students in programming concepts and problem-solving"
      ],
      technologies: ["Java", "Python", "Algorithm Design", "Teaching"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Briefcase className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-6xl font-bold text-white">
                Experience
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My professional and academic work experience
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{exp.title}</CardTitle>
                      <CardDescription className="text-purple-300 text-lg">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300 font-semibold">{exp.period}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default Experience;
