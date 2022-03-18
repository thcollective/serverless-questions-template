import APIStack from "./APIStack";

export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs14.x"
  });

  app.addDefaultFunctionEnv({
    GITHUB_QUESTION_TEMPLATE: process.env.GITHUB_QUESTION_TEMPLATE
  })

  new APIStack(app, "my-stack");

}
