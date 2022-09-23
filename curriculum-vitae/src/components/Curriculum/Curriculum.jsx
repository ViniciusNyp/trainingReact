import About from '../About';
import Educations from '../Educations';
import Experiences from '../Experiences';
import Skills from '../Skills';
import References from '../References';
import './Curriculum.css';

export default function Curriculum(props) {
    const curriculum = props.curriculum;

    return (
        <div className="curriculum">
                <h1>{curriculum.name}</h1>
                <h2>{curriculum.title}</h2>
                <ul className='contactInfo'>
                    <li>{curriculum.email}</li>
                    <li>{curriculum.address}</li>
                    <li>{curriculum.phone}</li>
                </ul>
                <About about={curriculum.about} />
                <Experiences experiences={curriculum.experiences} />
                <Educations educations={curriculum.educations} />
                <Skills skills={curriculum.skills} />
                <References references={curriculum.references} />
        </div>
    )
}