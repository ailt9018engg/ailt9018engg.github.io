
export interface CourseData {
  code: string;
  title: string;
  credits: number;
  coordinator: {
    name: string;
    email: string;
  };
  instructors: string[];
  type: string;
  prerequisite: string;
  grading: string;
  assessment: string;
  quota: number;
  inquiries: string;
  description: string;
  objectives: string[];
  clos: string[];
  plos: string[];
  learningHours: {
    lectures: number;
    tutorials: number;
    exercises: number;
    project: number;
    total: number;
  };
  assessmentMethods: {
    participation: {
      weight: string;
      details: string[];
    };
    individualProject: {
      weight: string;
      details: string;
    };
  };
  rubrics: {
    participation: {
      title: string;
      description: string;
      levels: {
        distinction: string;
        pass: string;
        fail: string;
      };
    };
    project: {
      title: string;
      description: string;
      components: string[];
      levels: {
        distinction: string[];
        pass: string[];
        fail: string[];
      };
    };
  };
  modules: {
    title: string;
    description: string;
  }[];
  summary: string;
  courseWebsite: string;
  lecturers: {
    name: string;
    photoPath: string;
  }[];
  TeachingAssistants: {
  name: string;
  photoPath: string;
  }[];
}

export const courseData: CourseData = {
  code: "AILT9018",
  title: "Artificial Intelligence Literacy II – AI for Engineers",
  credits: 3,
  coordinator: {
    name: "Dr. Lei YANG",
    email: "lyang125@hku.hk",
  },
  instructors: ["Dr. Lei YANG", "Dr. Kevin WU"],
  type: "UG 5 Graduation Requirements",
  prerequisite: "AILT1001",
  grading: "Pass, Fail or Distinction",
  assessment: "100% coursework",
  quota: 400,
  inquiries: "ailt9018engg@hku.hk",
  description:
    "AI for Engineers introduces students to artificial intelligence (AI) in engineering contexts. Through two modular learning units, students progress from 1) adopting AI tools for engineering literacy, to 2) hands-on development, and finally to 3) problem-focused application, while emphasizing ethical and responsible AI use. The course prepares students to apply core AI technologies to diverse engineering challenges and to develop fundamental skills for learning and applying AI in engineering. While students are expected to have basic programming knowledge from prior coursework, the necessary coding skills will be further developed and applied within this course.",
  objectives: [
    "Equip students with the ability to employ general-purpose AI tools as part of their engineering literacy.",
    "Foster a digital mindset to apply core AI technologies to tackle real-world engineering challenges.",
    "Develop students’ critical awareness of the advantages and limitations of modern AI technologies within engineering contexts.",
  ],
  clos: [
    "CLO 1: Utilize modern AI tools to analyze data, solve problems, and support coding in engineering contexts.",
    "CLO 2: Apply core AI technologies to solve introductory engineering problems.",
    "CLO 3: Evaluate the capabilities, limitations, and ethical considerations of AI technologies in engineering applications.",
  ],
  plos: [
    "PLO1: Identify and explain the key components, requirements, and characteristics of AI",
    "PLO2: Recognize and describe how AI is applied in different fields",
    "PLO3: Choose and apply AI tools or techniques for specific tasks",
    "PLO4: Assess the broader implications of AI in a given context, considering diverse cultural perspectives and global societal impact",
    "PLO5: Conceptualize and/or develop tools or algorithms for AI applications",
    "PLO6: Evaluate and use ethical guidelines for working with AI in various situations",
  ],
  learningHours: {
    lectures: 12,
    tutorials: 12,
    exercises: 10,
    project: 30,
    total: 64,
  },
  assessmentMethods: {
    participation: {
      weight: "50%",
      details: [
        "In-class group discussion and presentation",
        "After-class checkpoints and readings",
      ],
    },
    individualProject: {
      weight: "50%",
      details:
        "2-minute video pitch deck consisting of slides with voice-over and subtitles, to present a potential AI-empowered solution to an engineering challenge relevant to their field of study.",
    },
  },
  rubrics: {
    participation: {
      title: "Participation (50%)",
      description:
        "This component assesses students’ engagement in course discussions, activities, and the completion of in-class and after-class exercises.",
      levels: {
        distinction:
          "Actively engages in discussions and activities; frequently raises insightful questions or comments that stimulate meaningful dialogue; completes all in-class and after-class exercises with a high level of accuracy.",
        pass: "Participates regularly in discussions and activities with satisfactory contributions; completes all in-class and after-class exercises with generally correct answers.",
        fail: "Rarely participates, makes minimal contributions, is frequently absent, or neglects in-class or after-class exercises.",
      },
    },
    project: {
      title: "Project presentation (50%)",
      description:
        "Students will select a topic from a pool of engineering challenges and apply relevant core AI technologies to address the engineering challenges. The results shall be reported in a short video slides with voice-over and subtitles. The presentation should include essential components listed as follows:",
      components: [
        "Problem statement and motivation",
        "Proposed AI technologies to be applied",
        "Preliminary results (optional)",
        "Future directions to explore and social impact",
        "Reflections on the employed/developed AI technologies",
      ],
      levels: {
        distinction: [
          "Video presentation is clear, concise, and engaging.",
          "The core AI technology is described in depth and the rationale of adopting this AI technology for addressing the engineering challenge is explained.",
          "Preliminary results, quantitative or qualitative, are reported to validate the use of the core AI technology.",
          "All other required components are also addressed comprehensively and thoughtfully.",
          "Provides meaningful reflection on social impact and critical evaluation of AI tools.",
        ],
        pass: [
          "Video presentation is generally clear, though may lack polish or strong engagement.",
          "The core AI technology is described at a basic level, with some rationale for its adoption provided but limited in depth or clarity.",
          "Preliminary results are reported, but may be incomplete, mainly descriptive, or lack clear connection to the chosen AI technology.",
          "Most of the other required components are included, though some may be treated superficially.",
          "Provides some reflection on social impact and AI tools, but discussion may be brief, unbalanced, or underdeveloped.",
        ],
        fail: [
          "Video presentation is unclear, incomplete, or poorly structured.",
          "Core AI technology is inadequately described, and rationale for adoption is missing or incorrect.",
          "No meaningful preliminary results are presented, or results fail to connect with the use of AI technology.",
          "Several required components are missing or addressed only superficially.",
          "Provides little or no reflection on social impact or AI tools.",
        ],
      },
    },
  },
  modules: [
    {
      title: "Module 1: Deep Learning for Computer Vision",
      description:
        "After attending this module, you will be able to understand how convolutional neural networks (CNN) work and gain practical experience in training a CNN to detect objects. You will also gain exposure to recent advances in computer vision and their applications in the engineering domains. You will be able to propose an AI-empowered solution based on computer vision technologies for your field of study.",
    },
    {
      title: "Module 2: Fundamentals in NLP, LLM and RAG",
      description:
        "After attending this module, you will understand the core principles behind Natural Language Processing (NLP), Large Language Models (LLMs), and Retrieval-Augmented Generation (RAG). You will learn how modern language models process text, retrieve information, and generate responses. Through practical tutorials, you will build simple chatbots, integrate LLMs via APIs, and implement RAG pipelines. You will also explore advanced concepts to improve RAG. By the end of this module, you will be able to design AI-empowered solutions for engineering applications.",
    },
    {
      title: "Module 3: AI as Professional Assistant",
      description:
        "After attending this module, you will be able to use AI tools to read and analyse technical documents, engineering papers, and patents, and communicate your findings clearly and efficiently. You will also gain hands-on experience using AI coding assistants such as GitHub Copilot to design, build, and deploy your own software projects. By the end of this module, you will be equipped to use AI confidently as a versatile professional tool across all areas of your engineering career.",
    },

  ],
  summary:
    "AILT9018 is structured around three modules, each targeting a distinct area of AI application in engineering. Module 1 (Deep Learning for Computer Vision) trains students to build and deploy YOLO-based object detection models for real engineering tasks. Module 2 (Fundamentals in NLP, LLM and RAG) guides students through the principles of large language models and retrieval-augmented generation, culminating in building a domain-specific AI chatbot. Module 3 (AI as Professional Assistant) develops practical AI fluency — from reading and analysing technical documents with AI assistance, to designing and deploying software projects using AI coding tools like GitHub Copilot. Together, the three modules give students hands-on experience with the AI technologies most relevant to modern engineering practice.",
  courseWebsite: "ailt9018.engg.hku.hk",
  lecturers: [
    { name: "Dr. Lei YANG", photoPath: "/images/lei.png" },
    { name: "Dr. Kevin WU", photoPath: "/images/kevin.png" },
//    { name: "Dr. Lecturer Three", photoPath: "/images/lecturer3.png" },
  ],
  TeachingAssistants: [
    { name: "Mr. Karlos MA", photoPath: "/images/karlos.png" },
    { name: "Mr. Joe CHAN", photoPath: "/images/Joe.png" },
  ],
};

