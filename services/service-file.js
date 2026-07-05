import fs from "fs/promises"
import { stringify } from "querystring"


const apiPath = "https://server-for-test-week-13.onrender.com/api/race"

async function getFromApi(apiPath) {
    try{
        console.log("loading queue data...")
        const getData  = await fetch(apiPath)
        const data = await getData.json()
        // console.log(data)
        return await data

    }catch(err){
        console.log("error:\n",err)
    }
    
}

export const gett = await getFromApi(apiPath)
// console.log (gett)



export async function writeFile(content){
    try{
        await fs.writeFile("./data/pitJson.json",JSON.stringify(content,null,2),"utf-8")
        console.log("success writed")

    }catch(err){
        console.log(err)
    }
}





export async function readfile() {
    try{
        const data = await fs.readFile("./data/pitJson.json");
        return JSON.parse(data)

    }catch(err){
        console.log(err)
    }
    
}


// console.log(await readfile())


