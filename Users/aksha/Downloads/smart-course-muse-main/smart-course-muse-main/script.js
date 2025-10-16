const courses = [
  {
    id: 'py-001',
    title: 'Python for Beginners',
    description: 'Learn Python basics including variables, loops, functions, and object-oriented programming',
    category: 'Programming',
    duration: '8 weeks',
    level: 'Beginner',
    provider: 'Udemy',
    tags: ['Python', 'Programming', 'Beginner', 'Coding'],
    rating: 4.8,
    students: 52000,
    price: '$14.99'
  },
  {
    id: 'py-002',
    title: 'Advanced Python Development',
    description: 'Master decorators, generators, async programming, and advanced Python patterns',
    category: 'Programming',
    duration: '6 weeks',
    level: 'Advanced',
    provider: 'Coursera',
    tags: ['Python', 'Advanced', 'Development', 'Coding'],
    rating: 4.7,
    students: 18000,
    price: 'Free to audit'
  },
  {
    id: 'py-003',
    title: 'Python for Data Science and AI',
    description: 'Dive into Python libraries like NumPy, Pandas, and Scikit-learn for data science applications',
    category: 'Programming',
    duration: '10 weeks',
    level: 'Intermediate',
    provider: 'Simplilearn',
    tags: ['Python', 'Data Science', 'AI', 'Libraries'],
    rating: 4.6,
    students: 45000,
    price: '₹4,999'
  },
  {
    id: 'js-001',
    title: 'JavaScript Essentials',
    description: 'Complete guide to JavaScript including ES6+, DOM manipulation, and async programming',
    category: 'Programming',
    duration: '7 weeks',
    level: 'Beginner',
    provider: 'Udemy',
    tags: ['JavaScript', 'Web Development', 'Frontend', 'Coding'],
    rating: 4.9,
    students: 89000,
    price: '$14.99'
  },
  {
    id: 'js-002',
    title: 'JavaScript Advanced Patterns',
    description: 'Learn design patterns, closures, prototypes, and functional programming in JavaScript',
    category: 'Programming',
    duration: '5 weeks',
    level: 'Advanced',
    provider: 'Pluralsight',
    tags: ['JavaScript', 'Advanced', 'Patterns', 'Coding'],
    rating: 4.6,
    students: 12000,
    price: '$299/year'
  },
  {
    id: 'js-003',
    title: 'Node.js and JavaScript Full Stack',
    description: 'Build full-stack applications using JavaScript on both frontend and backend',
    category: 'Programming',
    duration: '12 weeks',
    level: 'Intermediate',
    provider: 'UpGrad',
    tags: ['JavaScript', 'Full Stack', 'Node.js', 'Backend'],
    rating: 4.7,
    students: 32000,
    price: '₹25,000'
  },
  {
    id: 'react-001',
    title: 'React - The Complete Guide',
    description: 'Build modern UIs with React, hooks, context API, and state management',
    category: 'Web Development',
    duration: '12 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['React', 'Frontend', 'JavaScript', 'Web Development'],
    rating: 4.8,
    students: 120000,
    price: '$14.99'
  },
  {
    id: 'react-002',
    title: 'Advanced React & Redux',
    description: 'Master Redux, middleware, performance optimization, and large-scale React applications',
    category: 'Web Development',
    duration: '8 weeks',
    level: 'Advanced',
    provider: 'egghead.io',
    tags: ['React', 'Redux', 'State Management', 'Web Development'],
    rating: 4.7,
    students: 28000,
    price: '$299/year'
  },
  {
    id: 'react-003',
    title: 'React Native for Mobile Apps',
    description: 'Develop cross-platform mobile apps using React Native and native modules',
    category: 'Web Development',
    duration: '9 weeks',
    level: 'Intermediate',
    provider: 'Great Learning',
    tags: ['React Native', 'Mobile', 'React', 'Cross-Platform'],
    rating: 4.8,
    students: 15000,
    price: '₹15,000'
  },
  {
    id: 'vue-001',
    title: 'Vue.js Fundamentals',
    description: 'Learn Vue 3 fundamentals including components, routing, and state management',
    category: 'Web Development',
    duration: '6 weeks',
    level: 'Beginner',
    provider: 'Vue Mastery',
    tags: ['Vue', 'Frontend', 'JavaScript', 'Web Development'],
    rating: 4.7,
    students: 35000,
    price: '$199/year'
  },
  {
    id: 'ts-001',
    title: 'TypeScript Masterclass',
    description: 'Master TypeScript with advanced types, generics, decorators, and best practices',
    category: 'Programming',
    duration: '7 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Web Development'],
    rating: 4.8,
    students: 45000,
    price: '$14.99'
  },
  {
    id: 'ts-002',
    title: 'TypeScript for Enterprise Applications',
    description: 'Apply TypeScript in large-scale enterprise projects with Angular integration',
    category: 'Programming',
    duration: '8 weeks',
    level: 'Advanced',
    provider: 'NIIT',
    tags: ['TypeScript', 'Enterprise', 'Angular', 'Advanced'],
    rating: 4.5,
    students: 8000,
    price: '₹10,000'
  },

  {
    id: 'web-001',
    title: 'Full Stack Web Development with MERN',
    description: 'Build complete web applications using MongoDB, Express, React, and Node.js',
    category: 'Web Development',
    duration: '14 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['MERN', 'Full Stack', 'Web Development', 'Node.js'],
    rating: 4.8,
    students: 98000,
    price: '$14.99'
  },
  {
    id: 'web-002',
    title: 'Next.js - Advanced Web Development',
    description: 'Build server-side rendered React apps with Next.js, API routes, and deployment',
    category: 'Web Development',
    duration: '8 weeks',
    level: 'Intermediate',
    provider: 'Vercel',
    tags: ['Next.js', 'React', 'Full Stack', 'Web Development'],
    rating: 4.9,
    students: 62000,
    price: 'Free'
  },
  {
    id: 'web-003',
    title: 'HTML & CSS - Web Design Foundations',
    description: 'Master HTML5, CSS3, responsive design, and modern web design principles',
    category: 'Web Development',
    duration: '5 weeks',
    level: 'Beginner',
    provider: 'Codecademy',
    tags: ['HTML', 'CSS', 'Web Design', 'Frontend'],
    rating: 4.6,
    students: 156000,
    price: 'Free to start'
  },
  {
    id: 'web-004',
    title: 'Responsive Web Design',
    description: 'Learn mobile-first design, CSS Grid, Flexbox, and responsive testing',
    category: 'Web Development',
    duration: '4 weeks',
    level: 'Beginner',
    provider: 'FreeCodeCamp',
    tags: ['CSS', 'Web Design', 'Responsive', 'Frontend'],
    rating: 4.7,
    students: 87000,
    price: 'Free'
  },
  {
    id: 'web-005',
    title: 'Angular Full Stack Development',
    description: 'Build dynamic web apps with Angular, Node.js, and MongoDB',
    category: 'Web Development',
    duration: '12 weeks',
    level: 'Intermediate',
    provider: 'Simplilearn',
    tags: ['Angular', 'Full Stack', 'Web Development', 'MEAN'],
    rating: 4.7,
    students: 25000,
    price: '₹6,500'
  },
  {
    id: 'design-001',
    title: 'UI/UX Design Principles',
    description: 'Master user interface and experience design, usability testing, and design thinking',
    category: 'Design',
    duration: '6 weeks',
    level: 'Beginner',
    provider: 'Interaction Design Foundation',
    tags: ['UI/UX', 'Design', 'User Experience', 'Design Thinking'],
    rating: 4.8,
    students: 42000,
    price: 'Free to $99'
  },
  {
    id: 'design-002',
    title: 'Figma - UI Design Tool Mastery',
    description: 'Learn to create professional UI designs using Figma with components and prototypes',
    category: 'Design',
    duration: '5 weeks',
    level: 'Beginner',
    provider: 'Udemy',
    tags: ['Figma', 'UI Design', 'Design Tools', 'Prototyping'],
    rating: 4.7,
    students: 38000,
    price: '$14.99'
  },
  {
    id: 'design-003',
    title: 'Web Design for Developers',
    description: 'Design beautiful websites using color theory, typography, and layout principles',
    category: 'Design',
    duration: '4 weeks',
    level: 'Beginner',
    provider: 'Scrimba',
    tags: ['Web Design', 'Design', 'Frontend', 'Aesthetics'],
    rating: 4.6,
    students: 28000,
    price: '$189/month'
  },
  {
    id: 'design-004',
    title: 'Adobe XD for UI/UX Prototyping',
    description: 'Create interactive prototypes and wireframes using Adobe XD for web and mobile',
    category: 'Design',
    duration: '4 weeks',
    level: 'Beginner',
    provider: 'UpGrad',
    tags: ['Adobe XD', 'UI/UX', 'Prototyping', 'Design'],
    rating: 4.6,
    students: 12000,
    price: '₹8,000'
  },

  {
    id: 'node-001',
    title: 'Node.js - Backend Development',
    description: 'Build scalable backend applications with Node.js, Express, and RESTful APIs',
    category: 'Backend Development',
    duration: '9 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Node.js', 'Backend', 'Express', 'JavaScript'],
    rating: 4.8,
    students: 76000,
    price: '$14.99'
  },
  {
    id: 'node-002',
    title: 'Advanced Node.js & Microservices',
    description: 'Learn clustering, workers, microservices architecture, and production deployment',
    category: 'Backend Development',
    duration: '8 weeks',
    level: 'Advanced',
    provider: 'Coursera',
    tags: ['Node.js', 'Microservices', 'Backend', 'Architecture'],
    rating: 4.7,
    students: 22000,
    price: 'Free to audit'
  },
  {
    id: 'node-003',
    title: 'Spring Boot for Java Backend',
    description: 'Develop robust backend services using Spring Boot, REST APIs, and security',
    category: 'Backend Development',
    duration: '10 weeks',
    level: 'Intermediate',
    provider: 'Great Learning',
    tags: ['Spring Boot', 'Java', 'Backend', 'REST'],
    rating: 4.8,
    students: 18000,
    price: '₹12,000'
  },
  {
    id: 'db-001',
    title: 'SQL & Relational Databases',
    description: 'Master SQL, database design, normalization, and complex queries',
    category: 'Databases',
    duration: '6 weeks',
    level: 'Beginner',
    provider: 'Udemy',
    tags: ['SQL', 'Databases', 'PostgreSQL', 'MySQL'],
    rating: 4.7,
    students: 89000,
    price: '$14.99'
  },
  {
    id: 'db-002',
    title: 'MongoDB & NoSQL Databases',
    description: 'Learn MongoDB, document databases, indexing, and aggregation pipelines',
    category: 'Databases',
    duration: '5 weeks',
    level: 'Beginner',
    provider: 'MongoDB University',
    tags: ['MongoDB', 'NoSQL', 'Databases', 'Data Storage'],
    rating: 4.8,
    students: 64000,
    price: 'Free'
  },
  {
    id: 'db-003',
    title: 'Database Design & Architecture',
    description: 'Design scalable databases, understand ACID properties, and optimize performance',
    category: 'Databases',
    duration: '7 weeks',
    level: 'Advanced',
    provider: 'Coursera',
    tags: ['Database Design', 'Architecture', 'Databases', 'Optimization'],
    rating: 4.6,
    students: 18000,
    price: 'Free to audit'
  },
  {
    id: 'db-004',
    title: 'Redis for Caching and Real-time Data',
    description: 'Implement caching, pub/sub, and session management with Redis',
    category: 'Databases',
    duration: '4 weeks',
    level: 'Intermediate',
    provider: 'Simplilearn',
    tags: ['Redis', 'Caching', 'NoSQL', 'Real-time'],
    rating: 4.7,
    students: 11000,
    price: '₹3,500'
  },

  {
    id: 'react-native-001',
    title: 'React Native - Mobile Development',
    description: 'Build iOS and Android apps with React Native and Expo',
    category: 'Mobile Development',
    duration: '10 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
    rating: 4.7,
    students: 58000,
    price: '$14.99'
  },
  {
    id: 'flutter-001',
    title: 'Flutter - Dart Mobile Development',
    description: 'Create beautiful cross-platform mobile apps with Flutter and Dart',
    category: 'Mobile Development',
    duration: '9 weeks',
    level: 'Beginner',
    provider: 'Udemy',
    tags: ['Flutter', 'Dart', 'Mobile', 'iOS', 'Android'],
    rating: 4.8,
    students: 52000,
    price: '$14.99'
  },
  {
    id: 'flutter-002',
    title: 'Advanced Flutter with Firebase Integration',
    description: 'Build scalable mobile apps with Flutter, state management, and Firebase backend',
    category: 'Mobile Development',
    duration: '8 weeks',
    level: 'Advanced',
    provider: 'UpGrad',
    tags: ['Flutter', 'Firebase', 'Advanced Mobile', 'State Management'],
    rating: 4.7,
    students: 14000,
    price: '₹18,000'
  },
  {
    id: 'swift-001',
    title: 'iOS Development with Swift',
    description: 'Build native iOS apps using Swift, SwiftUI, and Core Data',
    category: 'Mobile Development',
    duration: '12 weeks',
    level: 'Intermediate',
    provider: 'Coursera',
    tags: ['Swift', 'iOS', 'Mobile', 'Apple'],
    rating: 4.7,
    students: 31000,
    price: 'Free to audit'
  },
  {
    id: 'android-001',
    title: 'Android Development with Kotlin',
    description: 'Build native Android apps using Kotlin, Jetpack, and Android Studio',
    category: 'Mobile Development',
    duration: '11 weeks',
    level: 'Intermediate',
    provider: 'Udacity',
    tags: ['Kotlin', 'Android', 'Mobile', 'Google'],
    rating: 4.6,
    students: 44000,
    price: '$399'
  },
  {
    id: 'android-002',
    title: 'Android Jetpack Compose for Modern UI',
    description: 'Develop declarative UIs for Android using Jetpack Compose',
    category: 'Mobile Development',
    duration: '7 weeks',
    level: 'Intermediate',
    provider: 'Great Learning',
    tags: ['Jetpack Compose', 'Android', 'UI', 'Kotlin'],
    rating: 4.8,
    students: 9000,
    price: '₹9,000'
  },

  {
    id: 'ml-001',
    title: 'Machine Learning - Supervised Learning',
    description: 'Master supervised learning, regression, classification, and model evaluation',
    category: 'AI & Machine Learning',
    duration: '8 weeks',
    level: 'Intermediate',
    provider: 'Coursera',
    tags: ['Machine Learning', 'Supervised Learning', 'Data Science', 'AI'],
    rating: 4.8,
    students: 125000,
    price: 'Free to audit'
  },
  {
    id: 'ml-002',
    title: 'Deep Learning & Neural Networks',
    description: 'Learn CNNs, RNNs, transformers, and deep learning frameworks like TensorFlow',
    category: 'AI & Machine Learning',
    duration: '10 weeks',
    level: 'Advanced',
    provider: 'deeplearning.ai',
    tags: ['Deep Learning', 'Neural Networks', 'TensorFlow', 'AI'],
    rating: 4.9,
    students: 98000,
    price: 'Free'
  },
  {
    id: 'ml-003',
    title: 'Natural Language Processing',
    description: 'Master NLP techniques, transformers, GPT models, and text analysis',
    category: 'AI & Machine Learning',
    duration: '9 weeks',
    level: 'Advanced',
    provider: 'Hugging Face',
    tags: ['NLP', 'Natural Language Processing', 'AI', 'Deep Learning'],
    rating: 4.8,
    students: 67000,
    price: 'Free'
  },
  {
    id: 'ml-004',
    title: 'Computer Vision & Image Processing',
    description: 'Learn image recognition, object detection, and OpenCV techniques',
    category: 'AI & Machine Learning',
    duration: '8 weeks',
    level: 'Intermediate',
    provider: 'Coursera',
    tags: ['Computer Vision', 'Image Processing', 'AI', 'Deep Learning'],
    rating: 4.7,
    students: 52000,
    price: 'Free to audit'
  },
  {
    id: 'ai-001',
    title: 'Generative AI & Large Language Models',
    description: 'Learn about LLMs, prompt engineering, fine-tuning, and building with OpenAI APIs',
    category: 'AI & Machine Learning',
    duration: '6 weeks',
    level: 'Intermediate',
    provider: 'DeepLearning.AI',
    tags: ['Generative AI', 'LLM', 'OpenAI', 'ChatGPT', 'AI'],
    rating: 4.9,
    students: 89000,
    price: 'Free'
  },
  {
    id: 'ml-005',
    title: 'Reinforcement Learning',
    description: 'Learn Q-learning, policy gradients, and building intelligent agents',
    category: 'AI & Machine Learning',
    duration: '8 weeks',
    level: 'Advanced',
    provider: 'Udacity',
    tags: ['Reinforcement Learning', 'AI', 'Deep Learning', 'Agents'],
    rating: 4.6,
    students: 28000,
    price: '$399'
  },
  {
    id: 'ai-002',
    title: 'AI Ethics and Responsible AI',
    description: 'Explore ethical considerations, bias mitigation, and responsible deployment of AI systems',
    category: 'AI & Machine Learning',
    duration: '5 weeks',
    level: 'Intermediate',
    provider: 'Simplilearn',
    tags: ['AI Ethics', 'Responsible AI', 'Bias', 'Governance'],
    rating: 4.6,
    students: 6000,
    price: '₹4,000'
  },

  {
    id: 'ds-001',
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and statistical methods for data science',
    category: 'Data Science',
    duration: '7 weeks',
    level: 'Beginner',
    provider: 'Coursera',
    tags: ['Data Science', 'Data Analysis', 'Statistics', 'Python'],
    rating: 4.7,
    students: 98000,
    price: 'Free to audit'
  },
  {
    id: 'ds-002',
    title: 'Pandas & Data Manipulation',
    description: 'Master data cleaning, transformation, and analysis with Pandas',
    category: 'Data Science',
    duration: '4 weeks',
    level: 'Beginner',
    provider: 'DataCamp',
    tags: ['Pandas', 'Data Science', 'Python', 'Data Analysis'],
    rating: 4.8,
    students: 67000,
    price: '$299/year'
  },
  {
    id: 'ds-003',
    title: 'Data Visualization with Python',
    description: 'Create stunning visualizations using Matplotlib, Seaborn, and Plotly',
    category: 'Data Science',
    duration: '5 weeks',
    level: 'Beginner',
    provider: 'Udemy',
    tags: ['Data Visualization', 'Python', 'Matplotlib', 'Data Science'],
    rating: 4.7,
    students: 54000,
    price: '$14.99'
  },
  {
    id: 'ds-004',
    title: 'Statistical Analysis & Hypothesis Testing',
    description: 'Master statistics, probability, A/B testing, and statistical inference',
    category: 'Data Science',
    duration: '6 weeks',
    level: 'Intermediate',
    provider: 'Coursera',
    tags: ['Statistics', 'Data Science', 'Probability', 'A/B Testing'],
    rating: 4.6,
    students: 42000,
    price: 'Free to audit'
  },
  {
    id: 'bi-001',
    title: 'Business Intelligence with Power BI',
    description: 'Create dashboards and reports using Power BI for data-driven decisions',
    category: 'Data Science',
    duration: '6 weeks',
    level: 'Beginner',
    provider: 'Udemy',
    tags: ['Power BI', 'Business Intelligence', 'Data Analytics', 'Dashboards'],
    rating: 4.7,
    students: 48000,
    price: '$14.99'
  },
  {
    id: 'ds-005',
    title: 'Big Data with Hadoop and Spark',
    description: 'Process large-scale data using Hadoop ecosystem and Apache Spark',
    category: 'Data Science',
    duration: '10 weeks',
    level: 'Advanced',
    provider: 'UpGrad',
    tags: ['Big Data', 'Hadoop', 'Spark', 'Data Processing'],
    rating: 4.7,
    students: 22000,
    price: '₹30,000'
  },
  {
    id: 'ds-006',
    title: 'Tableau for Data Visualization',
    description: 'Build interactive dashboards and stories with Tableau for business analytics',
    category: 'Data Science',
    duration: '5 weeks',
    level: 'Beginner',
    provider: 'Great Learning',
    tags: ['Tableau', 'Data Visualization', 'Analytics', 'Dashboards'],
    rating: 4.8,
    students: 15000,
    price: '₹7,500'
  },

  {
    id: 'docker-001',
    title: 'Docker - Containerization Mastery',
    description: 'Learn Docker containers, images, networking, and container orchestration',
    category: 'DevOps',
    duration: '6 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Docker', 'Containers', 'DevOps', 'Deployment'],
    rating: 4.8,
    students: 87000,
    price: '$14.99'
  },
  {
    id: 'k8s-001',
    title: 'Kubernetes - Container Orchestration',
    description: 'Master Kubernetes deployment, scaling, and managing containerized applications',
    category: 'DevOps',
    duration: '8 weeks',
    level: 'Advanced',
    provider: 'Linux Academy',
    tags: ['Kubernetes', 'DevOps', 'Container Orchestration', 'Deployment'],
    rating: 4.7,
    students: 62000,
    price: '$299/year'
  },
  {
    id: 'aws-001',
    title: 'AWS - Cloud Computing Fundamentals',
    description: 'Learn EC2, S3, RDS, Lambda, and other core AWS services',
    category: 'Cloud Computing',
    duration: '10 weeks',
    level: 'Intermediate',
    provider: 'A Cloud Guru',
    tags: ['AWS', 'Cloud', 'Cloud Computing', 'DevOps'],
    rating: 4.8,
    students: 103000,
    price: '$299/year'
  },
  {
    id: 'gcp-001',
    title: 'Google Cloud Platform - Cloud Solutions',
    description: 'Master GCP services including Compute, Storage, and BigQuery',
    category: 'Cloud Computing',
    duration: '9 weeks',
    level: 'Intermediate',
    provider: 'Coursera',
    tags: ['Google Cloud', 'Cloud', 'Cloud Computing', 'GCP'],
    rating: 4.7,
    students: 54000,
    price: 'Free to audit'
  },
  {
    id: 'azure-001',
    title: 'Microsoft Azure - Cloud Fundamentals',
    description: 'Learn Azure VMs, App Services, SQL Database, and Azure DevOps',
    category: 'Cloud Computing',
    duration: '8 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Azure', 'Cloud', 'Microsoft', 'Cloud Computing'],
    rating: 4.6,
    students: 45000,
    price: '$14.99'
  },
  {
    id: 'ci-cd-001',
    title: 'CI/CD Pipelines & Automation',
    description: 'Learn GitHub Actions, Jenkins, GitLab CI, and automated deployment',
    category: 'DevOps',
    duration: '5 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['CI/CD', 'DevOps', 'Automation', 'GitHub'],
    rating: 4.7,
    students: 58000,
    price: '$14.99'
  },
  {
    id: 'devops-002',
    title: 'Terraform for Infrastructure as Code',
    description: 'Automate cloud infrastructure provisioning with Terraform and IaC best practices',
    category: 'DevOps',
    duration: '6 weeks',
    level: 'Intermediate',
    provider: 'Simplilearn',
    tags: ['Terraform', 'IaC', 'DevOps', 'Cloud'],
    rating: 4.7,
    students: 13000,
    price: '₹5,000'
  },

  {
    id: 'se-001',
    title: 'Software Design Patterns',
    description: 'Master creational, structural, and behavioral design patterns',
    category: 'Software Engineering',
    duration: '6 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Design Patterns', 'Software Engineering', 'Architecture', 'Best Practices'],
    rating: 4.8,
    students: 72000,
    price: '$14.99'
  },
  {
    id: 'se-002',
    title: 'System Design & Architecture',
    description: 'Learn scalable system design, databases, caching, and microservices architecture',
    category: 'Software Engineering',
    duration: '10 weeks',
    level: 'Advanced',
    provider: 'Educative',
    tags: ['System Design', 'Architecture', 'Scalability', 'Software Engineering'],
    rating: 4.9,
    students: 58000,
    price: '$299/year'
  },
  {
    id: 'se-003',
    title: 'SOLID Principles & Clean Code',
    description: 'Write maintainable, scalable code following SOLID principles and best practices',
    category: 'Software Engineering',
    duration: '4 weeks',
    level: 'Intermediate',
    provider: 'Pluralsight',
    tags: ['SOLID', 'Clean Code', 'Best Practices', 'Software Engineering'],
    rating: 4.7,
    students: 42000,
    price: '$299/year'
  },
  {
    id: 'se-004',
    title: 'Agile & Scrum Methodology',
    description: 'Learn Agile, Scrum, Kanban, and team-based software development',
    category: 'Software Engineering',
    duration: '3 weeks',
    level: 'Beginner',
    provider: 'Coursera',
    tags: ['Agile', 'Scrum', 'Project Management', 'Software Engineering'],
    rating: 4.6,
    students: 95000,
    price: 'Free to audit'
  },
  {
    id: 'se-005',
    title: 'Microservices Architecture Design',
    description: 'Design and implement microservices with API gateways, service discovery, and resilience',
    category: 'Software Engineering',
    duration: '9 weeks',
    level: 'Advanced',
    provider: 'UpGrad',
    tags: ['Microservices', 'Architecture', 'Design', 'Scalability'],
    rating: 4.8,
    students: 10000,
    price: '₹22,000'
  },

  {
    id: 'qa-001',
    title: 'Unit Testing & Test-Driven Development',
    description: 'Learn Jest, Mocha, Chai, and writing maintainable test suites',
    category: 'Testing',
    duration: '5 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Testing', 'Jest', 'TDD', 'Quality Assurance'],
    rating: 4.7,
    students: 52000,
    price: '$14.99'
  },
  {
    id: 'qa-002',
    title: 'End-to-End Testing with Cypress',
    description: 'Master E2E testing with Cypress for web applications',
    category: 'Testing',
    duration: '4 weeks',
    level: 'Intermediate',
    provider: 'Cypress.io',
    tags: ['Testing', 'Cypress', 'E2E Testing', 'Quality Assurance'],
    rating: 4.8,
    students: 38000,
    price: 'Free'
  },
  {
    id: 'qa-003',
    title: 'Selenium - Automated Testing',
    description: 'Learn automated testing with Selenium WebDriver and testing frameworks',
    category: 'Testing',
    duration: '6 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Selenium', 'Testing', 'Automation', 'Quality Assurance'],
    rating: 4.6,
    students: 44000,
    price: '$14.99'
  },
  {
    id: 'qa-004',
    title: 'Performance Testing with JMeter',
    description: 'Conduct load, stress, and performance testing using Apache JMeter',
    category: 'Testing',
    duration: '5 weeks',
    level: 'Intermediate',
    provider: 'NIIT',
    tags: ['JMeter', 'Performance Testing', 'Load Testing', 'QA'],
    rating: 4.5,
    students: 7000,
    price: '₹6,000'
  },

  {
    id: 'sec-001',
    title: 'Web Security & Ethical Hacking',
    description: 'Learn OWASP top 10, penetration testing, and web application security',
    category: 'Cybersecurity',
    duration: '8 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Security', 'Cybersecurity', 'Ethical Hacking', 'Web Security'],
    rating: 4.7,
    students: 67000,
    price: '$14.99'
  },
  {
    id: 'sec-002',
    title: 'Network Security Fundamentals',
    description: 'Master networking, firewalls, VPNs, and network security concepts',
    category: 'Cybersecurity',
    duration: '7 weeks',
    level: 'Intermediate',
    provider: 'CompTIA',
    tags: ['Network Security', 'Cybersecurity', 'Networking', 'Infrastructure'],
    rating: 4.6,
    students: 48000,
    price: '$399'
  },
  {
    id: 'sec-003',
    title: 'Advanced Cryptography',
    description: 'Learn encryption, hashing, digital signatures, and cryptographic protocols',
    category: 'Cybersecurity',
    duration: '6 weeks',
    level: 'Advanced',
    provider: 'Coursera',
    tags: ['Cryptography', 'Security', 'Cybersecurity', 'Encryption'],
    rating: 4.8,
    students: 31000,
    price: 'Free to audit'
  },
  {
    id: 'sec-004',
    title: 'Cloud Security Best Practices',
    description: 'Secure cloud environments on AWS, Azure, and GCP with identity management and compliance',
    category: 'Cybersecurity',
    duration: '7 weeks',
    level: 'Intermediate',
    provider: 'Simplilearn',
    tags: ['Cloud Security', 'AWS', 'Azure', 'Compliance'],
    rating: 4.7,
    students: 9000,
    price: '₹8,500'
  },

  {
    id: 'java-001',
    title: 'Java - From Basics to Advanced',
    description: 'Master Java fundamentals, OOP, collections, and enterprise development',
    category: 'Programming',
    duration: '10 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Java', 'Programming', 'OOP', 'Backend'],
    rating: 4.7,
    students: 98000,
    price: '$14.99'
  },
  {
    id: 'go-001',
    title: 'Go Programming - Concurrency & Systems',
    description: 'Learn Go language, goroutines, channels, and building scalable systems',
    category: 'Programming',
    duration: '6 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['Go', 'Golang', 'Programming', 'Backend', 'Concurrency'],
    rating: 4.8,
    students: 42000,
    price: '$14.99'
  },
  {
    id: 'rust-001',
    title: 'Rust - Systems Programming',
    description: 'Master Rust, ownership, memory safety, and systems-level programming',
    category: 'Programming',
    duration: '8 weeks',
    level: 'Intermediate',
    provider: 'Educative',
    tags: ['Rust', 'Systems Programming', 'Programming', 'Performance'],
    rating: 4.8,
    students: 35000,
    price: '$299/year'
  },
  {
    id: 'csharp-001',
    title: 'C# & .NET Development',
    description: 'Learn C#, ASP.NET Core, and building enterprise applications',
    category: 'Programming',
    duration: '10 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['C#', '.NET', 'Backend', 'Microsoft', 'Programming'],
    rating: 4.7,
    students: 76000,
    price: '$14.99'
  },
  {
    id: 'r-001',
    title: 'R Programming for Data Science',
    description: 'Master R language, data analysis, visualization, and statistical computing',
    category: 'Data Science',
    duration: '6 weeks',
    level: 'Beginner',
    provider: 'Coursera',
    tags: ['R', 'Data Science', 'Statistics', 'Data Analysis'],
    rating: 4.6,
    students: 58000,
    price: 'Free to audit'
  },
  {
    id: 'php-001',
    title: 'PHP & Laravel for Web Backend',
    description: 'Build dynamic web applications with PHP and the Laravel framework',
    category: 'Programming',
    duration: '8 weeks',
    level: 'Intermediate',
    provider: 'Udemy',
    tags: ['PHP', 'Laravel', 'Backend', 'Web'],
    rating: 4.7,
    students: 65000,
    price: '$14.99'
  },
  {
    id: 'scala-001',
    title: 'Scala - Functional Programming',
    description: 'Learn Scala, functional programming, and building concurrent applications',
    category: 'Programming',
    duration: '7 weeks',
    level: 'Intermediate',
    provider: 'Coursera',
    tags: ['Scala', 'Functional Programming', 'JVM', 'Big Data'],
    rating: 4.7,
    students: 18000,
    price: 'Free to audit'
  }
];

let userKeywords = [];
let currentPage = 1;
const resultsPerPage = 10;

const keywordInput = document.getElementById('keywordInput');
const keywordInputArea = document.getElementById('keywordInputArea');
const resultsContainer = document.getElementById('resultsContainer');
const mobileActionBtn = document.getElementById('mobileActionBtn');
const backToTopBtn = document.getElementById('backToTop');

// Star background implementation
const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to full screen
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Star colors: Mostly white, but some varied (yellow, orange, blue, red)
const starColors = ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#fff8dc', '#ffd700', '#ffcc99', '#ff9966', '#ccccff', '#9999ff'];

// Star properties
const stars = [];
const numStars = 800; // Even more stars for denser galaxy

class Star {
  constructor() {
    this.reset();
  }

  getColor() {
    // Bias heavily towards white (first 4 are white duplicates for higher probability)
    const rand = Math.random();
    if (rand < 0.8) { // 80% chance white
      return '#ffffff';
    } else {
      return starColors[Math.floor(Math.random() * starColors.length)]; // Otherwise, varied
    }
  }

  reset() {
    this.x = Math.random() * canvas.width * 2 - canvas.width; // Wider initial spread for depth
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.z = Math.random() * canvas.width * 2 + 1; // Start even farther for more depth
    this.size = Math.random() * 1.8 + 0.3; // Slightly varied base size for realism
    this.speed = Math.random() * 2.5 + 0.3; // Varied speed, a bit slower for immersion
    this.color = this.getColor();
    this.phase = Math.random() * Math.PI * 2; // For twinkling
    this.twinkleSpeed = Math.random() * 0.03 + 0.01; // Varied twinkle speed
    this.brightness = Math.random() * 0.5 + 0.5; // Base brightness variation
  }

  update() {
    this.z -= this.speed;
    if (this.z <= 0.1) {
      this.reset();
    }
    // Update phase for twinkling
    this.phase += this.twinkleSpeed;
  }

  draw() {
    const scale = canvas.width / this.z;
    const px = (this.x / canvas.width * 2 - 1) * scale * canvas.width / 2 + canvas.width / 2;
    const py = (this.y / canvas.height * 2 - 1) * scale * canvas.height / 2 + canvas.height / 2;
    const size = this.size * scale * this.brightness;

    // Only draw if on screen
    if (px > -50 && px < canvas.width + 50 && py > -50 && py < canvas.height + 50 && size > 0.1) {
      // Twinkling: vary size and opacity slightly for realism
      const twinkle = (Math.sin(this.phase) * 0.4 + 0.6) * this.brightness;
      const drawSize = size * twinkle;
      const opacity = twinkle * 0.8 + 0.2; // Vary opacity too

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(drawSize, 0.2), 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();

      // Add subtle glow for brighter/larger stars
      if (size > 1.5) {
        ctx.beginPath();
        ctx.arc(px, py, drawSize * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.floor(opacity * 255).toString(16).padStart(2, '0'); // Match opacity
        ctx.fill();
      }
      ctx.restore();
    }
  }
}

// Initialize stars
for (let i = 0; i < numStars; i++) {
  stars.push(new Star());
}

// Animation loop with smoother trail fade
function animate() {
  // Clear with a softer fade for longer trails (more realistic motion blur)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Sort by z-depth for proper layering (farther stars smaller)
  stars.sort((a, b) => a.z - b.z);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

animate();

function initApp() {
  setupEventListeners();
  renderEmptyState();
}

function setupEventListeners() {
  keywordInput.addEventListener('keydown', handleKeywordInput);
  keywordInputArea.addEventListener('click', () => keywordInput.focus());
  if (mobileActionBtn) {
    mobileActionBtn.addEventListener('click', handleMobileAction);
  }
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });
}

function handleKeywordInput(event) {
  if (event.key === 'Enter' && keywordInput.value.trim()) {
    event.preventDefault();
    addKeyword(keywordInput.value.trim());
    keywordInput.value = '';
    rankAndDisplayCourses();
  } else if (event.key === 'Backspace' && !keywordInput.value && userKeywords.length > 0) {
    userKeywords.pop();
    renderKeywords();
    rankAndDisplayCourses();
  }
}

function handleMobileAction() {
  if (keywordInput.value.trim()) {
    addKeyword(keywordInput.value.trim());
    keywordInput.value = '';
  }
  rankAndDisplayCourses();
}

function addKeyword(keyword) {
  if (!userKeywords.includes(keyword)) {
    userKeywords.push(keyword);
    renderKeywords();
    currentPage = 1;
    rankAndDisplayCourses();
  }
}

function renderKeywords() {
  keywordInputArea.innerHTML = '';
  
  userKeywords.forEach(keyword => {
    const badge = document.createElement('div');
    badge.className = 'keyword-badge';
    badge.innerHTML = `
      ${keyword}
      <button class="remove-keyword" data-keyword="${keyword}">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    `;
    keywordInputArea.appendChild(badge);
  });
  
  keywordInputArea.appendChild(keywordInput);
  
  document.querySelectorAll('.remove-keyword').forEach(button => {
    button.addEventListener('click', () => {
      const keywordToRemove = button.getAttribute('data-keyword');
      userKeywords = userKeywords.filter(k => k !== keywordToRemove);
      renderKeywords();
      currentPage = 1;
      rankAndDisplayCourses();
    });
  });
}

function rankCourses(courses, userKeywords) {
  if (userKeywords.length === 0) {
    return [];
  }

  const normalizedUserKeywords = userKeywords.map(k => k.toLowerCase().trim());

  const rankedCourses = courses
    .map(course => {
      const matchedKeywords = [];
      let score = 0;

      course.tags.forEach(courseTag => {
        const normalizedCourseTag = courseTag.toLowerCase();
        
        normalizedUserKeywords.forEach(userKeyword => {
          if (normalizedCourseTag === userKeyword) {
            if (!matchedKeywords.includes(courseTag)) {
              matchedKeywords.push(courseTag);
            }
            score += 20;
          }
          else if (
            normalizedCourseTag.includes(userKeyword) ||
            userKeyword.includes(normalizedCourseTag)
          ) {
            if (!matchedKeywords.includes(courseTag)) {
              matchedKeywords.push(courseTag);
            }
            score += 10;
          }
        });
      });
      
      score += (course.rating * 2);
      score += Math.min(10, Math.floor(course.students / 10000));
      
      score += Math.random() * 5;

      return {
        ...course,
        relevanceScore: score,
        matchedKeywords
      };
    })
    .filter(course => course.relevanceScore > 0)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);

  return rankedCourses;
}

function rankAndDisplayCourses() {
  const rankedCourses = rankCourses(courses, userKeywords);
  
  if (userKeywords.length === 0) {
    renderEmptyState();
    return;
  }
  
  if (rankedCourses.length === 0) {
    renderNoMatchesState();
    return;
  }
  
  renderResults(rankedCourses);
}

function renderResults(rankedCourses) {
  const totalPages = Math.ceil(rankedCourses.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = Math.min(startIndex + resultsPerPage, rankedCourses.length);
  const paginatedCourses = rankedCourses.slice(startIndex, endIndex);
  
  resultsContainer.innerHTML = `
    <div class="results-header">
      <svg class="graduation-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 3h20"/>
        <path d="M12 3v18"/>
        <path d="M6 12a6 6 0 0 1 12 0"/>
        <path d="M6 12a6 6 0 0 0 12 0"/>
      </svg>
      <h2 class="results-title">Recommended for You</h2>
      <span class="course-count">${rankedCourses.length} ${rankedCourses.length === 1 ? 'course' : 'courses'}</span>
    </div>
    
    <div class="courses-grid">
      ${paginatedCourses.map((course, index) => renderCourseCard(course, startIndex + index)).join('')}
    </div>
    
    <div class="pagination-controls">
      <button id="prevPage" class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''}>
        Previous
      </button>
      <span class="pagination-info">
        Page ${currentPage} of ${totalPages}
      </span>
      <button id="nextPage" class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''}>
        Next
      </button>
    </div>
  `;
  
  const prevBtn = document.getElementById('prevPage');
  const nextBtn = document.getElementById('nextPage');
  
  if (prevBtn && !prevBtn.disabled) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderResults(rankedCourses);
      }
    });
  }
  
  if (nextBtn && !nextBtn.disabled) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderResults(rankedCourses);
      }
    });
  }
}

function renderCourseCard(course, index) {
  const relevancePercentage = Math.min(100, Math.max(10, Math.floor((course.relevanceScore / 50) * 100)));
  
  return `
    <div class="course-card" style="animation-delay: ${index * 0.1}s">
      <div class="course-header">
        <div class="course-rank">#${index + 1}</div>
        <div>
          <h3 class="course-title">${course.title}</h3>
        </div>
      </div>
      
      <p class="course-description">${course.description}</p>
      
      <div class="keyword-tags">
        ${course.matchedKeywords.map(keyword => `
          <span class="keyword-tag">${keyword}</span>
        `).join('')}
      </div>
      
      <div class="course-footer">
        <div class="course-details">
          <div class="detail-item">
            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4"/>
              <path d="M12 8h.01"/>
            </svg>
            <span>${course.level}</span>
          </div>
          <div class="detail-item">
            <svg class="detail-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>${course.duration}</span>
          </div>
          <div class="provider">${course.provider}</div>
          <div class="rating">
            <span class="star">★</span>
            <span>${course.rating}</span>
            <span class="students">(${course.students.toLocaleString()} students)</span>
          </div>
          <div class="price ${course.price === 'Free' || course.price.includes('Free') ? 'free' : 'paid'}">${course.price}</div>
        </div>
        
        <div class="relevance-container">
          <div class="relevance-label">Relevance:</div>
          <div class="relevance-bar">
            <div class="relevance-progress" style="width: ${relevancePercentage}%"></div>
          </div>
          <div class="relevance-percent">${relevancePercentage}%</div>
        </div>
      </div>
    </div>
  `;
}

function renderEmptyState() {
  resultsContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon-container">
        <svg class="empty-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          <path d="M8 12h8"/>
          <path d="M8 8h8"/>
          <path d="M8 16h4"/>
        </svg>
      </div>
      <h3 class="empty-title">Start Your Learning Journey</h3>
      <p class="empty-description">Enter keywords that interest you to get personalized course recommendations</p>
    </div>
  `;
}

function renderNoMatchesState() {
  resultsContainer.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon-container" style="background: hsla(120, 100%, 40%, 0.2)">
        <svg class="empty-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(120, 100%, 40%)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          <path d="M8 12h8"/>
          <path d="M8 8h8"/>
          <path d="M8 16h4"/>
        </svg>
      </div>
      <h3 class="empty-title">No matches found</h3>
      <p class="empty-description">Try different keywords or broader terms like "Python", "Web Development", or "AI"</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});