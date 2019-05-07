const baseUrl = 'https://swapi.co/api/';

export const Endpoints = {
    root: () => {
        return `${baseUrl}`
    },
    people: () => {
        return `${baseUrl}people`
    }
}