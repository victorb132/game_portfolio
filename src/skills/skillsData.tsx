interface Skill {
  title: string;
  level: number;
}

const skills: Record<number, Skill[]> = {
  1: [
    {
      title: "React Native",
      level: 6,
    },
    {
      title: "Flutter",
      level: 5,
    },
    {
      title: "Kotlin",
      level: 3,
    },
    {
      title: "Swift",
      level: 3,
    },
    {
      title: "TypeScript",
      level: 4,
    },
    {
      title: "React JS",
      level: 3,
    },
  ],
  2: [
    {
      title: "Node.js",
      level: 4,
    },
    {
      title: "Git",
      level: 5,
    },
    {
      title: "PostgreSQL",
      level: 2,
    },
    {
      title: "SQL",
      level: 3,
    },
    {
      title: "Express.js",
      level: 2,
    },
  ],
};

export default skills;
