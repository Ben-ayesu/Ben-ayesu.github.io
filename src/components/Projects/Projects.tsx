import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../data/ProjectsData";

const Projects = () => {
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-2">My Work</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 md:mb-12">
          Apps and websites I've built and shipped
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard {...featuredProject} featured={true} />
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
