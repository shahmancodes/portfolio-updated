
const Skills = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'AWS', level: 75 },
  ];

  const tools = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 
    'MongoDB', 'AWS', 'Docker', 'GraphQL', 'Tailwind CSS', 'Figma'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
          Skills & Tools
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Skill bars */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tools grid */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <div 
                  key={tool}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4 text-center text-gray-300 hover:border-purple-500 hover:text-white transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
