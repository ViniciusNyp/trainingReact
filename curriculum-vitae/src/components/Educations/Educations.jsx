import './Educations.css';

export default function Educations(props) {
    const educations = props.educations;

    return (
        <div className="educations">
            <h2>Educations</h2>
            <ul>
            {educations.map((education, i) => {
                    return <li key={i}><ul>{Object.values(education).map(
                        (el, j) => {
                        return <li key={j}>{el}</li>
                    })}</ul></li>
                })}
            </ul>
        </div>
    )
}