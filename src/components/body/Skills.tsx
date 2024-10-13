import React from 'react';
import Image from "next/image";

const Skills: React.FC = () => {
    return (
        <div className="skill padd-15">
            <h3 className="title">Skills</h3>
            <div className="skills-row">
                <Image
                    className="skill-image"
                    src="/imgs/skills/java.png"
                    alt="Java Logo"
                    width={120}
                    height={120}
                    layout="intrinsic"
                />
                <Image
                    className="skill-image"
                    src="/imgs/skills/kotlin.png"
                    alt="Kotlin Logo"
                    width={100}
                    height={100}
                    layout="intrinsic"
                />
                <Image
                    className="skill-image"
                    src="/imgs/skills/spring-framework.png"
                    alt="Spring Framework Logo"
                    width={200}
                    height={100}
                    layout="intrinsic"
                />
                <Image
                    className="skill-image"
                    src="/imgs/skills/spring-boot.png"
                    alt="Spring Boot Logo"
                    width={200}
                    height={100}
                    layout="intrinsic"
                />
                <Image
                    className="skill-image"
                    src="/imgs/skills/jax-ws.png"
                    alt="JAX-WS Logo"
                    width={200}
                    height={100}
                    layout="intrinsic"
                />
                <Image
                    className="skill-image"
                    src="/imgs/skills/netty.png"
                    alt="Netty Logo"
                    width={200}
                    height={100}
                    layout="intrinsic"
                />
                <Image
                    className="skill-image"
                    src="/imgs/skills/hibernate.png"
                    alt="Hibernate Logo"
                    width={200}
                    height={100}
                    layout="intrinsic"
                />
            </div>
        </div>
    );
};

export default Skills;
