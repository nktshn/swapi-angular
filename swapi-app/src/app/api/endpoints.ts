const baseUrl = 'https://swapi.co/api/';

export const Endpoints = {
    root: () => {
        return `${baseUrl}`
    },
    people: () => {
        return `${baseUrl}people`
    },
    films: () => {
        return `${baseUrl}films`
    },
    planets: () => {
        return `${baseUrl}planets`
    },
    species: () => {
        return `${baseUrl}species`
    },
    starships: () => {
        return `${baseUrl}starships`
    },
    vehicles: () => {
        return `${baseUrl}vehicles`
    },
}