import { verifyCity } from "./citiesDictionary.js";



const divHab = document.querySelector('.habitation-cards')

export const getData = async(city)=>{
    const params = verifyCity(city)
    const baseUrl = `https://private-9e061d-piweb.apiary-mock.com/venda?state=${params.state}&city=${params.city}`
    try{
    const res = await fetch(baseUrl);
    const data = await res.json()
    return data
    } catch(err){
       throw new Error(err) 
    }
    
}


export const getAddress = ({listing,link})=>{
    const street = listing.address.street
    const neighborhood = listing.address.neighborhood
    const city = listing.address.city
    const streetNumber = link.data.streetNumber?link.data.streetNumber:''
    const state = listing.address.stateAcronym
    const completeAddress =  `${street}, ${streetNumber} - ${neighborhood}, ${city} - ${state}`
    return completeAddress    
}