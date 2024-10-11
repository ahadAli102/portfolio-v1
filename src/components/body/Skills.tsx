import React from 'react';

const skillsData = {
    frontend: [
        'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'DOM', 'Unit Test', 'Performance Optimization', 'SSR'
    ],
    backend: [
        'Node', 'Bun', 'Express', 'REST API', 'Zod Validation', 'JWT/OAuth', 'SQL', 'Postgres', 'Prisma ORM', 'DB Modeling', 'Stripe Payments'
    ],
    others: [
        'JavaScript', 'TypeScript', 'Python', 'Go', 'React Native', 'Git', 'GitHub', 'Linux', 'WordPress', 'VPS', 'Vercel', 'UX/UI Design', 'Product Design', 'Figma', 'Adobe XD', 'Wireframe'
    ]
};

const Skills: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
            <div className="container mx-auto p-6">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-white neon-text">My Skills</h1>
                </div>

                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend Skills */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Frontend</h2>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.frontend.map((skill) => (
                                <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Backend</h2>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.backend.map((skill) => (
                                <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Other Skills */}
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Other Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {skillsData.others.map((skill) => (
                                <span key={skill} className="bg-gray-800 px-4 py-2 rounded-full shadow-lg">
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
