import {showStatus,showStart,showCarsWaiting,nextCar,radioCall} from "./services/service-menager.js" 


async function main(){
    try{
     await showStart()
     await showStatus()
     console.log()
     await showCarsWaiting()
     console.log()
     await nextCar()
     console.log("============================")
     console.log()
     await radioCall()

    }catch(err){
        console.log(err)
}}


main()
     