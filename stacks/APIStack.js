import { Stack, Api } from "@serverless-stack/resources";

export default class MyStack extends Stack {
	constructor(scope, id, props) {
		super(scope, id, props);

		const api = new Api(this, "Api", {
			cors: true,
			routes: {
				"GET /base": "src/template.base",
				"GET /portfolio": "src/template.portfolio",
				"GET /fridayEvents": "src/template.fridayEvents",
				"GET /professionalService": "src/template.professionalService",
			},
		});

		this.addOutputs({
			"ApiEndpoint": api.url,
		});
	}
}
