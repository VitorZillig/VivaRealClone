import { translateAmenity } from "./citiesDictionary.js";


export const CardFactory = (title, photo, price, monthlyCondoFee, address, parkingSpaces, bathrooms, bedrooms, usableAreas, amenities) => {
    const card = document.createElement('div');
    card.classList.add('card')
    card.append(createHabitationImage(photo), createContentCardSide(title, address, usableAreas, bedrooms, bathrooms, parkingSpaces, amenities, price, monthlyCondoFee))
    return card
}

const createHabitationImage = (photo) => {
    const habitationImageWrapper = document.createElement('div')
    const habitationPhoto = document.createElement('img')
    habitationPhoto.src = photo
    habitationImageWrapper.classList.add('habitation-image')
    habitationImageWrapper.append(habitationPhoto)
    return habitationImageWrapper
}

const createContactButtons = ()=>{
    const contactButtonsWrapper = document.createElement('div')
    contactButtonsWrapper.classList.add('contact-buttons')
    const phoneButton = document.createElement('button')
    const messageButton = document.createElement('button')
    phoneButton.innerText = 'TELEFONE';
    messageButton.innerText = 'ENVIAR MENSAGEM'
    contactButtonsWrapper.append(phoneButton,messageButton)
    return contactButtonsWrapper
}

const createHabitationParticulars = (area, bedr, bathr, ps) => {
    const habitationParticularsWrapper = document.createElement('div')
    habitationParticularsWrapper.classList.add('habitation-particulars');
    const usableAreas = document.createElement('span');
    const bedrooms = document.createElement('span');
    const bathrooms = document.createElement('span');
    const parkingSpaces = document.createElement('span');

    usableAreas.innerText = area + ' m²';
    bedrooms.innerText = bedr + ' Quartos';
    bathrooms.innerText = bathr + ' Banheiros';
    parkingSpaces.innerText = ps + ' Vagas';

    habitationParticularsWrapper.append(usableAreas, bedrooms, bathrooms, parkingSpaces);

    return habitationParticularsWrapper

}

const createPrices = (pr, condPr) => {
    const pricesWrapper = document.createElement('div')
    const price = document.createElement('span');
    const condPrice = document.createElement('span');

    price.innerText = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pr);
    condPrice.innerText = condPr ? `Condomínio: ` + new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(condPr) : ''
    pricesWrapper.classList.add('prices')
    pricesWrapper.append(price, condPrice)

    return pricesWrapper
}

const createAmenities = (amn) => {
    const amenitiesList = document.createElement('ul');
    amn.forEach(item => {
        let amenity = document.createElement('li');
        amenity.classList.add('amenity')
        amenity.innerText = translateAmenity(item);
        amenitiesList.append(amenity)
    })
    return amenitiesList;
}

const createTitle = (title) => {
    const titleName = document.createElement('span')
    titleName.classList.add('card-title')
    titleName.innerText = title
    return titleName;
}

const createAddress = (adr) => {
    const addressName = document.createElement('span');
    addressName.classList.add('address')
    addressName.innerText = adr;
    return addressName;
}

const createCardHeader = (title, address) => {
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-head')
    cardHeader.append(createAddress(address), createTitle(title))
    return cardHeader;
}

const createCardDownside = (pr,condPr)=>{
    const cardDownside = document.createElement('div')
    cardDownside.classList.add('card-downside')
    cardDownside.append(createPrices(pr,condPr),createContactButtons())
    return cardDownside
}

const createContentCardSide = (title, address, area, bedr, bathr, ps, amn, pr, condPr) => {
    const contentSide = document.createElement('div');
    contentSide.classList.add('content-card-side')
    contentSide.append(createCardHeader(title, address), createHabitationParticulars(area, bedr, bathr, ps), createAmenities(amn), createCardDownside(pr,condPr))
    return contentSide
}

export const createErrorPage = () => {
    const errorMessage = document.createElement('h2')
    const errorCode = document.createElement('span')
    errorMessage.classList.add('error-page')
    errorMessage.innerText = "OOOOPS! \n ALGO DEU ERRADO NA SUA BUSCA \n"
    errorCode.innerText = 'status 500 \n '
    errorMessage.append(errorCode, 'POR FAVOR, TENTE NOVAMENTE');
    return errorMessage
}

export const createRecentSearches = (city)=>{
    const recentSearch = document.createElement('div');
    recentSearch.classList.add('recent-search')
    const removeCity = document.createElement('button')
    removeCity.classList.add('remove-city-button')
    recentSearch.innerText = city;
    removeCity.innerText = 'X'
    recentSearch.append(removeCity)
    return recentSearch
}
