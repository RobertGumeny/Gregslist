import Job from "../Models/Job.js";
import store from "../store.js";

//Public
class JobService {
  constructor(){
    console.log("Job Service is Linked")
  }
}

const JOBSERVICE = new JobService();
export default JOBSERVICE;
