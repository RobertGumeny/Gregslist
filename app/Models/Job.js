export default class Job{
  constructor(data){
    this.title =  data.title
    this.industry = data.industry
    this.company = data.company
    this.salary = data.salary
    this.jobDescription = data.jobDescription
  }

  getTemplate(index){
    return /*html*/ `
    <div class="col-3 border border-dark rounded">
    <h2>${this.title}</h2>
    <h5>${this.industry}</h5>
    <h5>${this.company}</h5>
    <h5>${this.salary} per year</h5>
    <p>${this.jobDescription}</p>
    </div>
    `
  }
}
