import { CardFactory,createErrorPage,createRecentSearches} from "./createCardElements.js";
import { getData,getAddress } from "./getData.js";

const inputSearchedCity = document.querySelector('#search-city')
const divHab = document.querySelector('.habitation-cards')
const habitationCounter = document.querySelector('#counter')
const habitationsCity = document.querySelector('#city')
const habCounter = document.querySelector('.habitations-counter')
const recentSearchesWrapperAside = document.querySelector('.recent-searches')
const recentSearchesWrapperMain = document.querySelector('.recent-searched')



inputSearchedCity.addEventListener('blur',(e)=>{
    recentSearchesWrapperAside.append(createRecentSearches(e.target.value))
    recentSearchesWrapperMain.append(createRecentSearches(e.target.value))
    createCard(e.target.value)
})


const clearContent = ()=>{
    divHab.innerHTML = ''
}

const createCard = async(city)=>{
    try{
    const {search:{result:{listings}}} = await getData(city)
    habitationCounter.innerText = listings.length
    habitationsCity.innerText = city
    habCounter.style.display = 'flex'
    clearContent()

    listings.forEach(item=>{
        divHab.append(CardFactory(item.listing.title,item.medias[0].url,item.listing.pricingInfos[0].price,item.listing.pricingInfos[0].monthlyCondoFee,getAddress(item),item.listing.parkingSpaces,...item.listing.bathrooms,...item.listing.bedrooms,...item.listing.usableAreas,item.listing.amenities))
        
    })
    } catch(err){
        clearContent()
        habCounter.style.display = 'none'
        divHab.append(createErrorPage())
    }
    
}


