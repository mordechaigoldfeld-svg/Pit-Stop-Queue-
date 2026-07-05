import { get } from "node:http";
import {gett,writeFile,readfile} from "./service-file.js"



export function showStart(){
    console.log("Pit Stop Queue - Race Team Management System");
    console.log("Race engineer: Let's check the current queue status on the pit wall.")
}


export async function showStatus() {
    try{
        console.log("========== PIT STOP QUEUE ==========")
        console.log("race:",await getname())
        console.log("cars:",await getCars())
        console.log(`lap: ${await getcurrentLap()}/${await getrounds()}`)
        console.log("pits stop completed:",await getstatusPit())
        

    }catch(err){
        console.log(err)
    }
}




export async function getCars() {
    try{
        const data = await readfile()
        const inform = await data.cars
        return inform.length

    }catch(err){
        console.log(err)
    }
}


export async function getrounds() {
    try{
        const data = await readfile()
        const inform = await data.totalLaps
        return inform

    }catch(err){
        console.log(err)
    }
}


export async function getcurrentLap() {
    try{
        const data = await readfile()
        const inform = await data.currentLap
        return inform

    }catch(err){
        console.log(err)
    }
}


export async function getname() {
    try{
        const data = await readfile()
        const inform = await data.raceName
        return inform

    }catch(err){
        console.log(err)
    }
}




export async function getstatusPit() {
    try{
        const data = await readfile()
        const inform = await data.cars.filter((res)=>{return res.status === "done"})
        return inform.length

    }catch(err){
        console.log(err)
    }
}



export async function carsWaiting() {
    try{
        const data = await readfile()
        const inform = await data.cars.filter((res)=>{return res.status === "waiting"})
        return inform

    }catch(err){
        console.log(err)
    }
}

console.log(await carsWaiting())


export async function showCarsWaiting(){
    try{

    const cars = await carsWaiting()
    console.log("Cars waiting for pit stop:")
    for (let car of cars){
        console.log(`car#${car.carNumber} | driver: ${car.driverName}`)
        
    }

        
        }catch(err){
            console.log(err)
    }
    
}

await showCarsWaiting()



