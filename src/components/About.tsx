
const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful designs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open source projects, or sharing my knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                  Creative Thinker
                </span>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  Team Player
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-1">
                <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
