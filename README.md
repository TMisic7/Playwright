# Test Summary

These tests are end-to-end tests written in Playwright that test [Swag Labs](https://www.saucedemo.com/), a demo web shop. The suite tests the main user flows of the application, including login, product browsing and details, cart management, and checkout related actions.

# How to Run the Project
After cloning the repository, to run the project:
* Install Playwright with this command: "npx playwright install" in your favourite IDE (e.g. VS Code), or in a terminal.

# How to run tests
To execute all test cases enter: "npx playwright test"

To run a test with a specific title enter: "npx playwright test -g "test name""

To run a specific test file enter: "npx playwright test path/to/your/test.spec.ts" (replace path/to/your/test.spec.ts with the actual path to your test file)

# View test reports
After running tests, an HTML report is generated. To view the report enter: "npx playwright show-report". This command opens the test report in your default browser, providing a detailed overview of test results.
