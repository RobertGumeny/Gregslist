export default class Job{
  constructor(data){
    this.title =  data.title
    console.log("Job Model is linked")
  }

  get Template(){
    return this.title
  }
}
