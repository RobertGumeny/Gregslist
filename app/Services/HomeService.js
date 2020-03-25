import Home from "../Models/Home.js";
import store from "../store.js";

//Public
class HomeService {
  constructor(){
    console.log("Home Service is Linked")
  }
}

const HOMESERVICE = new HomeService();
export default HOMESERVICE;
