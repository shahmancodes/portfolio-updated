
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AnimatedBackground from '@/components/AnimatedBackground';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe, inventory management, and a comprehensive admin dashboard with analytics.',
      longDescription: 'This project demonstrates my ability to build scalable web applications. I implemented RESTful APIs, database optimization, real-time notifications, and responsive design. The platform handles thousands of products and supports multiple payment methods.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'AWS'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500',
      github: '#',
      live: '#',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features built using React and Firebase.',
      longDescription: 'Features include real-time collaboration, custom workflows, time tracking, file attachments, and detailed project analytics. Built with a focus on user experience and performance optimization.',
      tech: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500',
      github: '#',
      live: '#',
      category: 'Frontend'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics using Vue.js and various APIs.',
      longDescription: 'Integrates multiple weather APIs to provide accurate forecasts, historical data, and severe weather alerts. Features interactive charts, customizable widgets, and offline functionality.',
      tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind', 'PWA'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500',
      github: '#',
      live: '#',
      category: 'Frontend'
    },
    {
      title: 'Machine Learning Model Trainer',
      description: 'A web-based platform for training and deploying machine learning models with an intuitive interface for data scientists and researchers.',
      longDescription: 'Built with Python Flask backend and React frontend. Supports multiple ML algorithms, data preprocessing, model evaluation, and deployment pipeline. Includes visualization tools for model performance.',
      tech: ['Python', 'Flask', 'React', 'TensorFlow', 'Docker', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=500',
      github: '#',
      live: '#',
      category: 'AI/ML'
    },
    {
      title: 'Social Media Analytics Tool',
      description: 'A comprehensive analytics platform for social media managers to track engagement, analyze trends, and generate reports across multiple platforms.',
      longDescription: 'Integrates with major social media APIs to collect data, perform sentiment analysis, and generate actionable insights. Features automated reporting and custom dashboard creation.',
      tech: ['React', 'Python', 'FastAPI', 'MongoDB', 'D3.js', 'Docker'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      github: '#',
      live: '#',
      category: 'Data Science'
    },
    {
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology, ensuring immutable and verifiable election results.',
      longDescription: 'Implements smart contracts for vote recording, cryptographic verification, and real-time result tallying. Features voter authentication, ballot customization, and audit trails.',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS', 'MetaMask'],
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500',
      github: '#',
      live: '#',
      category: 'Blockchain'
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'AI/ML', 'Data Science', 'Blockchain'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Header */}
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              A collection of projects showcasing my skills in full-stack development, 
              machine learning, blockchain, and modern web technologies.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="container mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-500/80 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                      asChild
                    >
                      <a href={project.github}>GitHub</a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href={project.live}>Live Demo</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
