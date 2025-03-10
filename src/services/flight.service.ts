//kako definisemo klasu koja ce biti dostupna u drugim fajlovima, async f-ja koja ima neko obecanje u buducnosti
//ovu f-ju sada pozovemo u home.component.html
//sta god da pozivamo u home.component.html mora biti importovano u home.component.ts
import axios from 'axios';
//promenljiva konstanta, pravimo kastm aksios instancu koja u sebi ima neka predefinisana podesavanja
//acept znaci da zelim da dobijem json kao rispons
//``{$} templejt stringovi
//sortirani po najskorasnjem letu scheduled to znaci
//sve je ovo implementacija flight servisa
const client = axios.create({
    baseURL: 'https://flight.pequla.com/api',
    headers: {
        'Accept': 'application/json',
        'X-Client-Name': 'KVA-2025'
    },
    validateStatus: (status: number) => {
        return status === 200 
        //samo ako je 200 vrati response, u ostalim slucajevima baci izuzetak
    }
})

export class FlightService {
    static async getFlights(page: number = 0, size:number = 10) {
        return client.request({
            url: '/flight',
            method: 'GET',
            params: {  
                //prosledjujemo parametre 
                'page': page,
                'size': size,
                'sort': 'scheduledAt,asc',
                'type': 'departure'
            }
        }) 
    }

    static async getFlightById(id: number) {
        return axios.get(`/flight${id}`)
    }
}
