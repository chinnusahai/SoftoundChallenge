package org.StepDefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources",
glue = "org.StepDefinition", 
monochrome = true,
dryRun = false,

plugin = {"html:Report",
		"junit:Report\\junitreport.xml" ,
		"json:Report\\jsonReport.json"})
public class TestRunner {
}
