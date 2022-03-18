import axios from 'axios'
import 'dotenv/config'

const baseURL = process.env.GITHUB_QUESTION_TEMPLATE

const client = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    async getBase() {
        const { data } = await client.get('/index.json')

        return data
    },

    async getPortfolio() {
        const { data } = await client.get('/portfolioTemplate.json')

        return data
    },

    async getFridayEvents() {
        const { data } = await client.get('/fridayEventsTemplate.json')

        return data
    },

    async getProfessionalService() {
        const { data } = await client.get('/professionalService.json')

        return data
    }
}