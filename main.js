import {showStatus,showStart,showCarsWaiting} from "./services/service-menager.js" 


async function main(){
    try{
     await showStart()
     await showStatus()
     console.log()
     await showCarsWaiting()

    }catch(err){
        console.log(err)
}}


main()
     