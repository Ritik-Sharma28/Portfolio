import {
  Code2, Braces, Atom, Layers, Zap,
  Server, Globe, Wifi, Database, Triangle,
  Link, Cpu, Sparkles, GitBranch, Container, Send,
  Bot, Wand2,
} from 'lucide-react'

export const skillCategories = [
  'All', 'Languages', 'Frontend', 'Backend', 'Databases', 'AI/ML', 'DevOps', 'AI Tools',
]

export const skills = [
  // Languages
  { name: 'C++',              category: 'Languages', icon: Code2,     color: '#00599C', level: 95, label: 'Expert' },
  { name: 'JavaScript (ES6+)',category: 'Languages', icon: Braces,    color: '#F7DF1E', level: 90, label: 'Expert' },

  // Frontend
  { name: 'React.js',         category: 'Frontend',  icon: Atom,      color: '#61DAFB', level: 90, label: 'Expert' },
  { name: 'Redux',            category: 'Frontend',  icon: Layers,    color: '#764ABC', level: 90, label: 'Expert' },
  { name: 'Vite',             category: 'Frontend',  icon: Zap,       color: '#646CFF', level: 90, label: 'Expert' },

  // Backend
  { name: 'Node.js',          category: 'Backend',   icon: Server,    color: '#339933', level: 88, label: 'Expert' },
  { name: 'Express.js',       category: 'Backend',   icon: Globe,     color: '#ffffff', level: 88, label: 'Expert' },
  { name: 'Socket.io',        category: 'Backend',   icon: Wifi,      color: '#25c2a0', level: 90, label: 'Expert' },
  { name: 'Redis',            category: 'Backend',   icon: Database,  color: '#DC382D', level: 65, label: 'Intermediate' },

  // Databases
  { name: 'MongoDB',          category: 'Databases',  icon: Database,  color: '#47A248', level: 88, label: 'Expert' },
  { name: 'Pinecone',         category: 'Databases',  icon: Triangle,  color: '#ffffff', level: 65, label: 'Intermediate' },

  // AI/ML
  { name: 'LangChain',        category: 'AI/ML',     icon: Link,      color: '#1C3C3C', level: 40, label: 'Beginner' },
  { name: 'Groq API',         category: 'AI/ML',     icon: Cpu,       color: '#F55036', level: 78, label: 'Advanced' },
  { name: 'Gemini AI',        category: 'AI/ML',     icon: Sparkles,  color: '#8E75B2', level: 75, label: 'Advanced' },
  { name: 'RAG Pipelines',    category: 'AI/ML',     icon: GitBranch, color: '#22d3ee', level: 90, label: 'Expert' },

  // DevOps
  { name: 'Docker',           category: 'DevOps',    icon: Container, color: '#2496ED', level: 40, label: 'Beginner' },
  { name: 'Git / GitHub',     category: 'DevOps',    icon: GitBranch, color: '#F05032', level: 92, label: 'Expert' },
  { name: 'Postman',          category: 'DevOps',    icon: Send,      color: '#FF6C37', level: 90, label: 'Expert' },
  { name: 'VS Code',          category: 'DevOps',    icon: Code2,     color: '#007ACC', level: 95, label: 'Expert' },

  // AI Tools
  { name: 'Codex',            category: 'AI Tools',  icon: Bot,       color: '#10b981', level: 82, label: 'Advanced' },
  { name: 'Antigravity',      category: 'AI Tools',  icon: Wand2,     color: '#a78bfa', level: 80, label: 'Advanced' },
  { name: 'Cursor',           category: 'AI Tools',  icon: Sparkles,  color: '#22d3ee', level: 85, label: 'Advanced' },
]
