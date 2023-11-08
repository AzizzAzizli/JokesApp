import axios from "axios"
import { baseURL } from "../constants/baseURL"
export async function getJokes(){
    try{
        const url=baseURL+"/search?limit=10";
        let response= await axios({
            headers:{ Accept: "application/json" },
            method:"GET",
            url
        })
        return response

    }catch(err){
        console.log("Error: ",err);
    }
}