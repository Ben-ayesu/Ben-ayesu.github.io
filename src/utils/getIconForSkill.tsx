import {
  faJsSquare,
  faReact,
  faPython,
  faHtml5,
  faCss3Alt,
  faSass,
  faNodeJs,
  faJava,
  faGitAlt,
  faAndroid,
  faConfluence,
  faJira,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faToolbox,
  faPeopleGroup,
  faFileCode,
  faQuestionCircle,
  faVial,
  faPaintBrush,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

const getIconForSkill = (skillName: string) => {
  switch (skillName) {
    case "HTML":
      return faHtml5;
    case "CSS":
      return faCss3Alt;
    case "Sass":
      return faSass;
    case "JavaScript":
    case "Typescript":
      return faJsSquare;
    case "React JS":
    case "React Native":
      return faReact;
    case "Python":
      return faPython;
    case "Node.js":
      return faNodeJs;
    case "Java":
      return faJava;
    case "Swift":
    case "SwiftUI":
      return faSwift;
    case "Kotlin":
    case "Google Generative AI":
    case "IntelliJ":
    case "Android Studio":
      return faFileCode;
    case "MySQL":
    case "RESTful APIs":
      return faDatabase;
    case "Firebase":
      return faFire;
    case "Jetpack Compose":
      return faAndroid;
    case "Git":
      return faGitAlt;
    case "Unit Testing":
      return faVial;
    case "Tailwind CSS":
      return faPaintBrush;
    case "Testing":
    case "Google Cloud":
      return faToolbox;
    case "Confluence":
      return faConfluence;
    case "Jira":
      return faJira;
    case "Agile":
      return faPeopleGroup;
    default:
      return faQuestionCircle;
  }
};

export default getIconForSkill;
