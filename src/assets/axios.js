import axios from 'axios'
export default async function request(options) {
    return await axios.request(options)
}