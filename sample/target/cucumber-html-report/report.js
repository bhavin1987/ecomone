$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("smoke.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 19,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Test Facebook valid login",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-facebook-valid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Facebook And start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter valid \"\u003cusername\u003e\" And valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully.",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-facebook-valid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "test-facebook-smoke-scenario;test-facebook-valid-login;;1"
    },
    {
      "cells": [
        "username1",
        "passwor1"
      ],
      "line": 30,
      "id": "test-facebook-smoke-scenario;test-facebook-valid-login;;2"
    },
    {
      "cells": [
        "username2",
        "passwor2"
      ],
      "line": 31,
      "id": "test-facebook-smoke-scenario;test-facebook-valid-login;;3"
    },
    {
      "cells": [
        "username3",
        "passwor3"
      ],
      "line": 32,
      "id": "test-facebook-smoke-scenario;test-facebook-valid-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Test Facebook valid login",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-facebook-valid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Facebook And start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter valid \"username1\" And valid \"passwor1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefination.open_Facebook_And_start_application()"
});
formatter.result({
  "duration": 11975091066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 13
    },
    {
      "val": "passwor1",
      "offset": 35
    }
  ],
  "location": "Stepdefination.enter_valid_username_And_valid_password(String,String)"
});
formatter.result({
  "duration": 608712359,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 35251697031,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Test Facebook valid login",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-facebook-valid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Facebook And start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter valid \"username2\" And valid \"passwor2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefination.open_Facebook_And_start_application()"
});
formatter.result({
  "duration": 23747545541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 13
    },
    {
      "val": "passwor2",
      "offset": 35
    }
  ],
  "location": "Stepdefination.enter_valid_username_And_valid_password(String,String)"
});
formatter.result({
  "duration": 776602475,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 13180373114,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Test Facebook valid login",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-facebook-valid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open Facebook And start application",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Enter valid \"username3\" And valid \"passwor3\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user should be able to login successfully.",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefination.open_Facebook_And_start_application()"
});
formatter.result({
  "duration": 30536522635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username3",
      "offset": 13
    },
    {
      "val": "passwor3",
      "offset": 35
    }
  ],
  "location": "Stepdefination.enter_valid_username_And_valid_password(String,String)"
});
formatter.result({
  "duration": 688406990,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefination.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 13451341264,
  "status": "passed"
});
});