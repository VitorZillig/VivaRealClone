const spDictionary = [
    'são paulo',
    'sp',
    'sao paulo',
    'sao-paulo'
]

const rjDicionary = [
    'rio de janeiro',
    'rj',
    'rio janeiro',
]

export const verifyCity = (city)=>{
    let rightCity = {}
    spDictionary.includes(city.toLowerCase())? rightCity = {state:'sp',city:'sao-paulo'}:rjDicionary.includes(city.toLowerCase())?rightCity={state:'rj',city:'rio-de-janeiro'}:rightCity = undefined;
    return rightCity
}

const amenitiesDictionary = {
    party_hall:"Salão de festas",
    furnished:"Mobiliado",
    fireplace:"Lareira",
    pool:'Piscina',
    barbecue_grill:"Churrasqueira",
    air_conditioning:'Ar Condicionado',
    elevator:'Elevador',
    bicycles_place:'Bicicletário',
    gated_community:'Condomínio Fechado',
    sports_court:'Quadras de esporte',
    playground:'Playground',
    pets_allowed:'Aceita animais',
    american_kitchen:'Cozinha americana',
    tennis_court:'Quadra de tênis',
    laundry:'Lavanderia',
    gym:'Academia',
    electronic_gate:'Portão eletrônico',
    cinema:'Cinema',
    sauna:'Sauna',
    garden:'Jardim'
}

export const translateAmenity = (amn)=>{
    return amenitiesDictionary[amn.toLowerCase()]
}




