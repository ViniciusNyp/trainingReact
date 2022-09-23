import './About.css';

export default function About(props) {
    const text = props.about;

    return (
        <div className="about">
            <h2>About</h2>
            <p>{text}</p>
        </div>
    )
}