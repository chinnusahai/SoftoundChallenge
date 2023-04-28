Feature: To Validate the Softound Challenge

Scenario Outline: To Validate the Registration Form

Given : launch the browser

When launch the Softound Url

Then Enter the "<fName>"FirstName

And Enter the "<lName>"LastName

And Enter the "<Email>"EmailAddress

And select Your "<DOB>"BirthDate

And click SubmitButton

And Print The Submission Message

Then close the Browser

Examples:
|fName		|lName		|Email								|	DOB				 |
|Jayapriya|s				|sr.jpriya@gmail.com	| 29.05.2020 |
|s				|Jayapriya|sr.jpriya@gmail.com	| 29.05.199  |
|Jayapriya|s				|sr.jpriya						| 29.05.2003 |
|Jayapriya|s				|sr.jpriya@gmail.com	| 29.05.2025 |
|Jayapriya|s				|12345								| 29.05.2013 |
|Jayapriya|123125		|sr.jpriya@gmail.com	| 50.05.1000 |
|123987		|s		 		|sr.jpriya@gmail.com	| 29.15.1993 |
||s				|12345								| 29.05.2013 |
|Jayapriya||sr.jpriya@gmail.com	| 50.05.1000 |
|123987		|s		 		|| 29.15.1993 |
|Jayapriya|s				|sr.jpriya@gmail.com	||
||s				|| 29.05.2013 |
|Jayapriya|		|sr.jpriya@gmail.com	|  |
|	|s		 		|sr.jpriya@gmail.com	| 29.15.1993 |
