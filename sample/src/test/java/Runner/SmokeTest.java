package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="features", glue = {"com.selenium.cucumber.sample"},
plugin = {"html:target/cucumber-html-report"})
public class SmokeTest {
	

}
