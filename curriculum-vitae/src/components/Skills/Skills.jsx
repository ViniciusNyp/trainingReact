import './Skills.css';

export default function Skills(props) {
    const skills = props.skills;

    return (
        <div className="skills">
            <h2>Skills</h2>
            <ul>
            {skills.map((skill, i) => {
                    return <ul key={i} className='skill'>{Object.values(skill).map((el, j) => {
                        return <li className={j === 0 ? 'skillName' : 'skillLevel'} key={j}>{el}</li>
                    })}</ul>
                })}
            </ul>
        </div>
    )
}