import { Template } from "@aws-cdk/assertions";
import * as cdk from "@aws-cdk/core";
import * as Api from "../api-stack";

describe("cognito", () => {
  it("API Created", () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Api.APIStack(app, "MyTestStack");
    // THEN
    const template = Template.fromStack(stack);

    template.hasResourceProperties("AWS::AppSync::GraphQLApi", {});
  });
});
