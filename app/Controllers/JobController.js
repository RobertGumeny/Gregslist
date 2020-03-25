import _jobService from "../Services/JobService.js"
import _store from "../store.js"

function _drawJobs(){
  let template = ''
  let jobs = _store.State.jobs

  jobs.forEach((job, index) => template += job.getTemplate(index))
  document.getElementById("job-display").innerHTML = template
}

export default class JobController {

  constructor(){
    console.log("Job Controller is linked")
  }

  listJob(event){
    event.preventDefault()
    let formData = event.target
    let newJobObject = {
      title: formData.title.value,
      industry: formData.industry.value,
      company: formData.company.value,
      salary: formData.salary.value,
      jobDescription: formData.jobDescription.value
    }
    _jobService.listJob(newJobObject)
    formData.reset()
    // @ts-ignore 
    $('#list-job-modal').modal('toggle')
    _drawJobs()
  }

  delete(index){
    _jobService.delete(index)
    _drawJobs()
  }

}