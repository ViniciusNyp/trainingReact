export default class CurriculumVitae {
  constructor(name, about, title, email, phone, address, education = [], experience = [], skills = [], references = []) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.educations = education;
    this.experiences = experience;
    this.skills = skills;
    this.references = references;
    this.title = title;
    this.about = about;
  }
}