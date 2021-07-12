export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} received ${res.status}`);
        }
        return await res.json();
    }

    async getAllPlanets() {
        const res = await this.getResource('/planets/');
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/person/${id}`);
        return  this._transformPerson(person)
    }

    async getAllStarships() {
        const res = await this.getResource('/starships/');
        return res.results.map(this._transformStarship)
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarship(starship)
    }

    extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformPerson(person) {
        return {
            id: this.extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            gender: person.gender,
            height: person.height
        }
    }

    _transformStarship(starships) {
        return {
            id: this.extractId(starships),
            name: starships.name,
            cargoCapacity: starships.cargo_capacity,
            costInCredits: starships.cost_in_credits,
            length: starships.length
        }
    }
}


