import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation";
import { projectsData } from "@/data/projects-data";

// Import local images
import KarkaramImg from "@/assets/Karkaram.jpg";
import KiranImg from "@/assets/Kiran.png";

const ProjectsPage = () => {
  const getImageSrc = (imagePath: string) => {
    // Handle local asset paths
    if (imagePath.includes('Karkaram.jpg')) return KarkaramImg;
    if (imagePath.includes('Kiran.png')) return KiranImg;
    // Return external URLs as-is
    return imagePath;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      <Navigation />
      <AnimatedBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16 pt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring innovative solutions through technology and creativity
          </p>
        </div>

        {/* Technical Projects */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Technical Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projectsData.map((project) => (
              <div 
                key={project.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <div className="relative overflow-hidden h-56 bg-slate-700/30 flex items-center justify-center">
                  <img 
                    src={getImageSrc(project.image)}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-cyan-500/80 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500/80 text-white text-sm rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-cyan-300 font-semibold">
                      {project.role} • {project.period}
                    </p>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                    {project.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform duration-300 font-semibold"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
