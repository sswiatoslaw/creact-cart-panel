import axios from 'axios'
const getProducts = () => {
    return axios.get('./products.json')
}

export default getProducts