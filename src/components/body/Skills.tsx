import React from 'react';
import Image from "next/image";

type Skill = {
    name: string;
    path: string;
    width: number;
    height: number;
};

const skillsList: Skill[] = [
    { name: "Java", path: "/imgs/skills/java.png", width: 120, height: 120 },
    { name: "Kotlin", path: "/imgs/skills/kotlin.png", width: 100, height: 100 },
    { name: "Spring Framework", path: "/imgs/skills/spring-framework.png", width: 200, height: 100 },
    { name: "Spring Boot", path: "/imgs/skills/spring-boot.png", width: 200, height: 100 },
    { name: "JAX-WS", path: "/imgs/skills/jax-ws.png", width: 200, height: 100 },
    { name: "Netty", path: "/imgs/skills/netty.png", width: 200, height: 100 },
    { name: "Hibernate", path: "/imgs/skills/hibernate.png", width: 200, height: 100 },
    { name: "Hibernate", path: "/imgs/skills/type-script.png", width: 100, height: 100 },
    { name: "Hibernate", path: "/imgs/skills/next.png", width: 100, height: 100 },
    { name: "Hibernate", path: "/imgs/skills/mysql.png", width: 100, height: 100 },
    { name: "Hibernate", path: "/imgs/skills/docker.png", width: 100, height: 100 },
];

const Skills: React.FC = () => {
    return (
        <div className="skill padd-15">
            <h3 className="title">Skills</h3>
            <div className="skills-row">
                {skillsList.map((skill) => (
                    <Image
                        key={skill.name}
                        className="skill-image"
                        src={skill.path}
                        alt={`${skill.name} Logo`}
                        width={skill.width}
                        height={skill.height}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
