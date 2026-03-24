import {
  FaGithub,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaApple,
  FaGlobe,
} from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  website?: string;
  playStore?: string;
  appStore?: string;
  github?: string;
  featured?: boolean;
  video?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  link,
  website,
  playStore,
  appStore,
  github,
  featured = false,
  video,
}: ProjectCardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        featured ? "md:col-span-2" : ""
      } relative overflow-hidden`}
    >
      {/* Video */}
      <div className="overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-auto">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Project Details */}
      <div className="p-6 flex flex-col pb-24">
        <h3 className={`font-bold mb-3 ${featured ? "text-2xl" : "text-xl"}`}>
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap mb-4 gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex flex-wrap gap-3">
            {/* Website link */}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                <FaGlobe className="mr-2" />
                Website
              </a>
            )}
            {/* Generic project link */}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                <FaExternalLinkAlt className="mr-2" />
                Project
              </a>
            )}
            {/* App Store */}
            {appStore && (
              <a
                href={appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-900 hover:bg-black text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                <FaApple className="mr-2 text-lg" />
                App Store
              </a>
            )}
            {/* Play Store */}
            {playStore && (
              <a
                href={playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                <FaGooglePlay className="mr-2" />
                Google Play
              </a>
            )}
            {/* GitHub */}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 text-sm"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
