import Job from "../Models/Job.js";
import _store from "../store.js";

//Public
class JobService {

  delete(index){
    _store.State.jobs.splice(index, 1)
  }

  listJob(newJobObject){
    let newJob = new Job (newJobObject)
    _store.State.jobs.push(newJob)
  }
  constructor(){
    console.log("Job Service is Linked")
  }
}

const JOBSERVICE = new JobService();
export default JOBSERVICE;
