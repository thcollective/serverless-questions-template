import handler from './util/handler'
import Template from './api/template'

export const base = handler(async () => {
	const baseTemplate = await Template.getBase()

	return baseTemplate
})

export const portfolio = handler(async () => {
	const portfolioTemplate = await Template.getPortfolio()

	return portfolioTemplate
})

export const fridayEvents = handler(async () => {
	const fridayEventsTemplate = await Template.getFridayEvents()

	return fridayEventsTemplate
})

export const professionalService = handler(async () => {
	const professionalServiceTemplate = await Template.getProfessionalService()

	return professionalServiceTemplate
})
