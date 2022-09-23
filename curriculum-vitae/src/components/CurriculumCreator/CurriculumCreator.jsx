import React, { useState, useEffect } from 'react';
import CurriculumVitae from '../../models/CurriculumVitaeModel';
import Education from '../../models/EducationModel';
import Experience from '../../models/ExperienceModel';
import Reference from '../../models/ReferenceModel';
import Skill from '../../models/SkillModel';
import Curriculum from "../Curriculum/Curriculum";
import './CurriculumCreator.css';



export default function CurriculumCreator() {
    const [nameInput, setNameInput] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [addressInput, setAddressInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [aboutInput, setAboutInput] = useState('');
    const [educationInput, setEducationInput] = useState('');
    const [experienceInput, setExperienceInput] = useState('');
    const [skillInput, setSkillInput] = useState('');
    const [referenceInput, setReferenceInput] = useState('');

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [about, setAbout] = useState('');
    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);
    const [references, setReferences] = useState([]);
    const [curriculum, setCurriculum] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        setName(nameInput);
        setTitle(titleInput);
        setEmail(emailInput);
        setAddress(addressInput);
        setPhone(phoneInput);
        setAbout(aboutInput);
        setEducations([educations, new Education(educationInput)]);
        setExperiences([experiences, new Experience(experienceInput)]);
        setSkills([skills, new Skill(skillInput)]);
        setReferences([references, new Reference(referenceInput)]);
    }

    useEffect(() => {
        setCurriculum(new CurriculumVitae(name, title, email, address, phone, about, educations, experiences, skills, references));
    },[name, title, email, address, phone, about, educations, experiences, skills, references])

    return (
        <div className="curriculumCreator">
            <form>

                <label htmlFor="name">Name</label>
                <input onChange={e => setNameInput(e.target.value)} type="text" id="name" name="name" value={nameInput} />

                <label htmlFor="title">Title</label>
                <input onChange={e => setTitleInput(e.target.value)} type="text" id="title" name="title" value={titleInput} />

                <label htmlFor="email">Email</label>
                <input onChange={e => setEmailInput(e.target.value)} type="text" id="email" name="email" value={emailInput} />

                <label htmlFor="address">Address</label>
                <input onChange={e => setAddressInput(e.target.value)} type="text" id="address" name="address" value={addressInput} />

                <label htmlFor="phone">Phone</label>
                <input onChange={e => setPhoneInput(e.target.value)} type="text" id="phone" name="phone" value={phoneInput} />

                <label htmlFor="about">About</label>
                <input onChange={e => setAboutInput(e.target.value)} type="text" id="about" name="about" value={aboutInput} />

                <label htmlFor="education">Education</label>
                <input onChange={e => setEducationInput(e.target.value)} type="text" id="education" name="education" value={educationInput} />

                <label htmlFor="experience">Experience</label>
                <input onChange={e => setExperienceInput(e.target.value)} type="text" id="experience" name="experience" value={experienceInput} />

                <label htmlFor="skill">Skill</label>
                <input onChange={e => setSkillInput(e.target.value)} type="text" id="skill" name="skill" value={skillInput} />

                <label htmlFor="reference">Reference</label>
                <input onChange={e => setReferenceInput(e.target.value)} type="text" id="reference" name="reference" value={referenceInput} />

                <button onClick={handleSubmit}>Submit</button>
            </form>

            {curriculum.name ? 
            <Curriculum curriculum={curriculum} /> : 
            null}
        </div>
    )
}