$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/service-features/my.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag_my_first_feature"
    },
    {
      "name": "@browser"
    },
    {
      "name": "@UI"
    }
  ]
});
formatter.scenario({
  "name": "new gherkin test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag_my_first_feature"
    },
    {
      "name": "@browser"
    },
    {
      "name": "@UI"
    },
    {
      "name": "@tag_my_first_feature"
    }
  ]
});
formatter.step({
  "name": "that I have 3 \"red\" \"balls\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.mystuff.MysSteps.that_I_have_red_balls(java.lang.Integer,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some other precondition",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.mystuff.MysSteps.some_other_precondition()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I complete action",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.mystuff.MysSteps.i_complete_action()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "some other action",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.mystuff.MysSteps.some_other_action()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "yet another action",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.mystuff.MysSteps.yet_another_action()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.mystuff.MysSteps.i_validate_the_outcomes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.mystuff.MysSteps.check_more_outcomes()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart.feature");
formatter.feature({
  "name": "validate the requests for the end points in the simple kart service",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart10.feature");
formatter.feature({
  "name": "dummy feature 10",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart2.feature");
formatter.feature({
  "name": "dummy feature 2",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart3.feature");
formatter.feature({
  "name": "dummy feature 3",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart4.feature");
formatter.feature({
  "name": "dummy feature 4",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart5.feature");
formatter.feature({
  "name": "dummy feature 5",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart6.feature");
formatter.feature({
  "name": "dummy feature 6",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart7.feature");
formatter.feature({
  "name": "dummy feature 7",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart8.feature");
formatter.feature({
  "name": "dummy feature 8",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:features/service-features/simplekart9.feature");
formatter.feature({
  "name": "dummy feature 9",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"\u003cparametervalue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "parametervalue"
      ]
    },
    {
      "cells": [
        "10"
      ]
    },
    {
      "cells": [
        "-1"
      ]
    },
    {
      "cells": [
        "9899"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: [selenium grid reachable] expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:101)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"-1\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify if items are returned successfully",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@API1"
    },
    {
      "name": "@API2"
    },
    {
      "name": "@API3"
    },
    {
      "name": "@api"
    },
    {
      "name": "@abhijeet"
    }
  ]
});
formatter.before({
  "error_message": "org.junit.AssumptionViolatedException: assumption was not met due to: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor34.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1206)\r\n\tat org.assertj.core.api.Assumptions.assumptionNotMet(Assumptions.java:1184)\r\n\tat org.assertj.core.api.Assumptions.access$100(Assumptions.java:93)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:117)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isEqualTo(Unknown Source)\r\n\tat org.assertj.core.api.AbstractBooleanAssert.isTrue(AbstractBooleanAssert.java:59)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue$accessor$f31y017g(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs$Assertj$Assumptions$wXHguIpX.call(Unknown Source)\r\n\tat org.assertj.core.api.Assumptions$AssumptionMethodInterceptor.intercept(Assumptions.java:111)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat org.assertj.core.api.BooleanAssert$ByteBuddy$RjakGevs.isTrue(Unknown Source)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\nCaused by: org.junit.ComparisonFailure: expected:\u003c[tru]e\u003e but was:\u003c[fals]e\u003e\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor29.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getRemoteWebDriver(SeleniumDriverProvider.java:94)\r\n\tat com.expleoautomation.utils.SeleniumDriverProvider.getWebDriver(SeleniumDriverProvider.java:62)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.SharedBrowserSteps.startHeadlessChromeForCookiesRetriev(SharedBrowserSteps.java:148)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssuredSessionAndBaseUri(StartAndCleanSteps.java:74)\r\n\tat com.expleoautomation.stepdefinitions.startandcleansteps.StartAndCleanSteps.configureRestAssured(StartAndCleanSteps.java:120)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\r\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\r\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.apache.maven.surefire.junitcore.pc.Scheduler$1.run(Scheduler.java:410)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "skipped"
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user calls \"simpleKartItemsAPI\" with \"GET\" http request using the query parameter \"list\" as \"9899\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_using_the_query_parameter(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"\u003citemID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "itemID"
      ]
    },
    {
      "cells": [
        "1657"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if items details are returned successfully  for a given itemID",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@web-ui"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartItemDetailsAPI\" with \"GET\" http request for the \"1657\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"\u003corderID\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderID"
      ]
    },
    {
      "cells": [
        "674"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify if order details are returned successfully  for a given orderid",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderDetailsAPI\" with \"GET\" http request for the \"674\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_the(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate if order is created for the given orderid",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@simplekartservice"
    }
  ]
});
formatter.step({
  "name": "user access the \"simpleKart\" BaseUrl",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_access_the_BaseUrl(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the json payload for the \"simpleKartOrderCreateAPI\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_json_payload_for_the_end_point(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls \"simpleKartOrderCreateAPI\" with \"POST\" http request",
  "keyword": "When "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.user_calls_with_http_request_for_a_given(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call is success with status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_API_call_is_success_with_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the status line in response body is \"HTTP/1.1 200 OK\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_status_line_in_response_body_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the content type of response is \"application/json; charset\u003dutf-8\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.expleoautomation.stepdefinitions.ServiceLayerSteps.the_content_type_of_response_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});