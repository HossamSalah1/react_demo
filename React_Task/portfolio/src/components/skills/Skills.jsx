
import './Skills.css'; // You can create a CSS file to style the component

const skillsData = [
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML/CSS', level: 'Intermediate' }
];

const Skills = () => {
    return (
        <div id='skills' className="skills-section">
            <h2>My Skills</h2>
            <ul className="skills-list">
                {skillsData.map((skill, index) => (
                    <li key={index} className="skill-item">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
