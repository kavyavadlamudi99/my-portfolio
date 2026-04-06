export const personalInfo = {
  name: "Kavya Vadlamudi",
  title: "Full Stack Developer",
  tagline: "Building scalable enterprise systems for banking, healthcare, and insurance",
  location: "United States",
  email: "Kavya.work93@gmail.com",
  phone: "838-262-5621",
  linkedin: "https://linkedin.com/in/kavya-vadlamudi",
  github: "https://github.com/kavya-vadlamudi",
};

export const about = {
  introduction: "I build and scale backend systems that handle millions of transactions. Over the past five years, I've worked across banking, healthcare, and insurance—domains where performance, security, and compliance aren't optional.",
  
  approach: "My work focuses on solving real engineering problems: migrating legacy systems to microservices, designing event-driven architectures that scale, and building APIs that handle high-volume traffic without breaking. I care about clean code, thoughtful architecture, and systems that teams can actually maintain.",
  
  current: "Currently working on distributed systems at a tier-1 financial institution, where I lead modernization efforts for core banking platforms. I recently completed my Master's in Computer Science from Fitchburg State University.",
  
  expertise: [
    {
      area: "Backend Engineering",
      description: "Microservices architecture, REST/GraphQL APIs, event-driven systems with Kafka, database optimization for high-throughput applications"
    },
    {
      area: "Cloud & Infrastructure",
      description: "AWS and Azure deployment, containerization with Docker/Kubernetes, CI/CD automation, serverless architectures"
    },
    {
      area: "Domain Experience",
      description: "Financial services (payments, trading systems), healthcare (HIPAA compliance, FHIR integration), insurance (policy and claims processing)"
    },
    {
      area: "Technical Leadership",
      description: "Legacy system modernization, cross-team collaboration, technical documentation, mentoring junior developers"
    }
  ]
};

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Global Financial Institution",
    location: "New York, USA",
    period: "July 2025 - Present",
    achievements: [
      "Leading migration of legacy COBOL/DB2 systems to Java microservices, improving scalability and reducing maintenance overhead",
      "Architecting Kafka-based event streaming platform processing 10M+ requests daily with sub-second latency",
      "Reduced API latency by 50% implementing Redis caching layer for high-frequency data access",
      "Built serverless notification system using Azure Functions, cutting infrastructure costs by 40%"
    ]
  },
  {
    role: "Software Engineer",
    company: "Healthcare Technology Company",
    location: "Remote, USA",
    period: "April 2024 - September 2024",
    achievements: [
      "Developed HIPAA-compliant microservices for claims processing handling millions of daily transactions",
      "Implemented FHIR-based integration enabling secure health data exchange across provider systems",
      "Optimized PostgreSQL queries reducing claims processing time by 50%",
      "Automated CI/CD pipelines with GitHub Actions, reducing deployment cycle by 40%"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Fintech Company",
    location: "Hyderabad, India",
    period: "January 2023 - June 2023",
    achievements: [
      "Built RESTful APIs for medical imaging platform supporting CT, MRI, and ultrasound data",
      "Implemented DICOM image processing modules integrated with radiology information systems",
      "Containerized services with Docker and deployed to Azure, enabling horizontal scaling",
      "Designed asynchronous processing pipelines with Kafka for high-volume imaging workflows"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Real-Time Payment Processing Platform",
    category: "Financial Services",
    description: "Event-driven payment orchestration system supporting multi-currency transfers, FX conversions, and real-time settlements.",
    challenge: "The existing system couldn't scale beyond 50K daily transactions. Processing delays caused settlement failures and poor customer experience.",
    solution: "Redesigned the architecture using Kafka event streams and microservices. Built dedicated services for payment orchestration, transaction validation, and fraud detection. Implemented SWIFT ISO 20022 messaging for international payments.",
    impact: [
      "Scaled to 100K+ daily transactions with 99.9% uptime",
      "Reduced transaction processing latency by 30%",
      "Cut fraud false positives by 20% with improved detection algorithms"
    ],
    technologies: ["Spring Boot", "Apache Kafka", "Oracle DB", "Docker", "AWS", "OAuth2"],
    keyFeatures: [
      "Multi-currency support with real-time FX rate integration",
      "SWIFT ISO 20022 compliant message processing",
      "Event-driven architecture for scalable transaction flows",
      "OAuth2 and MFA for PSD2 compliance"
    ]
  },
  {
    id: 2,
    title: "Claims Processing & Adjudication System",
    category: "Healthcare",
    description: "HIPAA-compliant microservices platform for end-to-end insurance claims submission, processing, and reimbursement workflows.",
    challenge: "Manual claims processing created bottlenecks. The system lacked real-time status updates and struggled with provider data integration.",
    solution: "Built microservices architecture with Spring Boot handling each workflow stage independently. Integrated with provider systems using HL7 FHIR standards. Implemented Kafka-powered real-time notifications for claims status updates.",
    impact: [
      "Automated 70% of claims processing workflow",
      "Reduced average claims processing time from 5 days to 2 days",
      "Improved API response time by 50% with Redis caching"
    ],
    technologies: ["Spring Boot", "HL7 FHIR", "PostgreSQL", "Kafka", "Redis", "Azure AKS"],
    keyFeatures: [
      "HL7 FHIR integration for seamless provider data exchange",
      "Role-based access control with audit logging",
      "Real-time event notifications via Kafka",
      "AES-256 encryption for data in transit and at rest"
    ]
  },
  {
    id: 3,
    title: "Legacy Mainframe Modernization",
    category: "Enterprise Systems",
    description: "Complete migration of COBOL/DB2 mainframe applications to Java microservices with MongoDB and PostgreSQL.",
    challenge: "40-year-old COBOL codebase running on expensive mainframe hardware. Limited scalability, difficult to maintain, and no modern integration capabilities.",
    solution: "Analyzed existing COBOL business logic and reimplemented in Java using Spring Boot. Migrated DB2 hierarchical data to normalized PostgreSQL schemas and MongoDB document stores. Built automated ETL pipelines for zero-downtime data migration.",
    impact: [
      "Reduced infrastructure costs by 60% moving off mainframe",
      "Enabled real-time analytics previously impossible with batch processing",
      "Improved system maintainability with modern tech stack"
    ],
    technologies: ["Java", "Spring Boot", "PostgreSQL", "MongoDB", "ETL Tools", "Docker"],
    keyFeatures: [
      "Incremental migration strategy with parallel run validation",
      "Automated data transformation pipelines",
      "Backward-compatible APIs for legacy system integration",
      "Comprehensive test coverage ensuring business logic parity"
    ]
  },
  {
    id: 4,
    title: "Medical Imaging Management Platform",
    category: "Healthcare Technology",
    description: "Scalable platform for storing, processing, and sharing diagnostic radiology images across distributed healthcare facilities.",
    challenge: "Healthcare facilities struggled to share imaging data between systems. No standardized way to store and retrieve CT, MRI, and ultrasound images.",
    solution: "Developed RESTful APIs integrated with DICOM imaging standards. Built microservices for image storage, retrieval, and secure sharing. Implemented asynchronous processing for large file uploads and image transformation.",
    impact: [
      "Enabled secure image sharing across 50+ healthcare facilities",
      "Reduced diagnostic report generation time by 40%",
      "Achieved full HIPAA and GDPR compliance"
    ],
    technologies: ["Spring Boot", "DICOM", "MySQL", "Azure Blob Storage", "Docker", "Kafka"],
    keyFeatures: [
      "DICOM-compliant image processing and storage",
      "JWT authentication with AES-256 encryption",
      "Horizontal scaling with containerized microservices",
      "Asynchronous processing pipelines for peak workloads"
    ]
  },
  {
    id: 5,
    title: "AI-Powered Customer Support Platform",
    category: "Generative AI",
    description: "Multi-agent conversational AI system using RAG (Retrieval-Augmented Generation) for intelligent customer support automation.",
    challenge: "Customer support teams overwhelmed with repetitive queries. Existing chatbot provided generic responses without understanding context.",
    solution: "Built generative AI platform using multi-agent framework with RAG techniques. Integrated with internal knowledge bases for context-aware responses. Implemented agent orchestration for complex multi-step queries.",
    impact: [
      "Automated 60% of customer support queries",
      "Reduced average resolution time from 24 hours to real-time",
      "Improved customer satisfaction scores by 35%"
    ],
    technologies: ["Python", "LangChain", "Vector DB", "FastAPI", "React", "AWS Lambda"],
    keyFeatures: [
      "Multi-agent framework for complex query handling",
      "RAG integration with enterprise knowledge base",
      "Context-aware conversational flows",
      "Seamless handoff to human agents when needed"
    ]
  }
];

export const skills = {
  languages: ["Java", "JavaScript/TypeScript", "Python", "SQL", "Go"],
  
  backend: [
    "Spring Boot / Spring Cloud",
    "Node.js / Express",
    "RESTful APIs / GraphQL",
    "Microservices Architecture",
    "Apache Kafka / RabbitMQ",
    "Hibernate / JPA"
  ],
  
  frontend: [
    "React.js / Redux",
    "Next.js",
    "Angular",
    "TypeScript",
    "Responsive Design"
  ],
  
  databases: [
    "PostgreSQL / MySQL",
    "MongoDB / DynamoDB",
    "Redis (Caching)",
    "Oracle DB / DB2",
    "Cassandra"
  ],
  
  cloud: [
    "AWS (EC2, S3, Lambda, RDS, ECS, EKS)",
    "Azure (Functions, AKS, Blob Storage)",
    "Docker / Kubernetes",
    "CI/CD (Jenkins, GitHub Actions)",
    "Terraform"
  ],
  
  specializations: [
    "Event-Driven Architecture",
    "HIPAA / GDPR Compliance",
    "Payment Systems (SWIFT, ISO 20022)",
    "Healthcare Integration (HL7 FHIR, DICOM)",
    "System Modernization & Migration",
    "Performance Optimization"
  ]
};

export const education = {
  degree: "Master of Science in Computer Science",
  institution: "Fitchburg State University",
  location: "Fitchburg, MA, USA",
  period: "2023 - 2025",
  gpa: "3.8/4.0"
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" }
];
