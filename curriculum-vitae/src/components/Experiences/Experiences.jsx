import './Experiences.css';

export default function Experiences(props) {
    const experiences = props.experiences;

    return (
        <div className="experiences">
            <h2>Experiences</h2>
            <ul>
                {experiences.map((experience, i) => {
                    return <ul key={i}>{Object.values(experience).map(
                        (el, j) => {
                        return <li key={j}>{el}</li>
                    })}</ul>
                })}
            </ul>
        </div>
    )
}