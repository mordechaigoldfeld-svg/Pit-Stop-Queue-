import {showStatus,showStart,showCarsWaiting,nextCar,radioCall,searchCarByNumber} from "./services/service-menager.js" 


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
     console.log("--- Search for a car by number ---")
     await searchCarByNumber(44)
     searchCarByNumber(99)

    }catch(err){
        console.log(err)
}}


main()
     