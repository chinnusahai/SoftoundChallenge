$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/challenge.feature");
formatter.feature({
  "name": "To Validate the Softound Challenge",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.step({
  "name": "Enter the \"\u003cfName\u003e\"FirstName",
  "keyword": "Then "
});
formatter.step({
  "name": "Enter the \"\u003clName\u003e\"LastName",
  "keyword": "And "
});
formatter.step({
  "name": "Enter the \"\u003cEmail\u003e\"EmailAddress",
  "keyword": "And "
});
formatter.step({
  "name": "select Your \"\u003cDOB\u003e\"BirthDate",
  "keyword": "And "
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "fName",
        "lName",
        "Email",
        "DOB"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "s",
        "sr.jpriya@gmail.com",
        "29.05.2020"
      ]
    },
    {
      "cells": [
        "s",
        "Jayapriya",
        "sr.jpriya@gmail.com",
        "29.05.199"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "s",
        "sr.jpriya",
        "29.05.2003"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "s",
        "sr.jpriya@gmail.com",
        "29.05.2025"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "s",
        "12345",
        "29.05.2013"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "123125",
        "sr.jpriya@gmail.com",
        "50.05.1000"
      ]
    },
    {
      "cells": [
        "123987",
        "s",
        "sr.jpriya@gmail.com",
        "29.15.1993"
      ]
    },
    {
      "cells": [
        "",
        "s",
        "12345",
        "29.05.2013"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "",
        "sr.jpriya@gmail.com",
        "50.05.1000"
      ]
    },
    {
      "cells": [
        "123987",
        "s",
        "",
        "29.15.1993"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "s",
        "sr.jpriya@gmail.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        "s",
        "",
        "29.05.2013"
      ]
    },
    {
      "cells": [
        "Jayapriya",
        "",
        "sr.jpriya@gmail.com",
        ""
      ]
    },
    {
      "cells": [
        "",
        "s",
        "sr.jpriya@gmail.com",
        "29.15.1993"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.05.2020\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.05.199\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.05.2003\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.05.2025\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"12345\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.05.2013\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"123125\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"50.05.1000\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"123987\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.15.1993\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"12345\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.05.2013\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"50.05.1000\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"123987\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.15.1993\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.05.2013\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"Jayapriya\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To Validate the Registration Form",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": ": launch the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Chall.launch_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch the Softound Url",
  "keyword": "When "
});
formatter.match({
  "location": "Chall.launch_the_Softound_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"\"FirstName",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.enter_the_FirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"s\"LastName",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_LastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the \"sr.jpriya@gmail.com\"EmailAddress",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.enter_the_EmailAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select Your \"29.15.1993\"BirthDate",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.select_Your_BirthDate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click SubmitButton",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.click_SubmitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Print The Submission Message",
  "keyword": "And "
});
formatter.match({
  "location": "Chall.print_The_Submission_Message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Chall.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});