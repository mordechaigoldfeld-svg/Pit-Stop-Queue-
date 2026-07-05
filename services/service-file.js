import fs from "fs/promises"
import { stringify } from "querystring"


const apiPath = "https://server-for-test-week-13.onrender.com/api/race"

async function getFromApi(apiPath) {
    try{
        const getData  = await fetch(apiPath)
        const data = await getData.json()
        // console.log(data)
        return await data

    }catch(err){
        console.log(err)
    }
    
}

const gett = await getFromApi(apiPath)
// console.log (gett)



async function writeFile(content){
    try{
        await fs.writeFile("./data/pitJson.json",JSON.stringify(content,null,2),"utf-8")

    }catch(err){
        console.log(err)
    }
}

writeFile(gett)


