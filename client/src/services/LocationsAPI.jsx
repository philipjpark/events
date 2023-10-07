
// imports the request function from a module located at '../utilities/api'
import { request } from '../utilities/api'

const locationsURL = '/api/locations'

const getAllLocations = () => request('GET', locationsURL)
const getLocationById = (id) => request('GET', `${locationsURL}/${id}`)

export default {
    getAllLocations,
    getLocationById
}