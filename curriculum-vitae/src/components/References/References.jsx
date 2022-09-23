import './References.css';

export default function References(props) {
    const references = props.references;

    return (
        <div className="references">
            <h2>References</h2>
            <ul>
            {references.map((reference, i) => {
                    return <ul key={i}>{Object.values(reference).map(
                        (el, j) => {
                        return <li key={j}>{el}</li>
                    })}</ul>
                })}
            </ul>
        </div>
    )
}