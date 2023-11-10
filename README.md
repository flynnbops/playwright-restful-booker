# Playwright Restful booker
> Work In Progress

A repo for writing [Playwright][1] tests against the [Restful Booker Platform (RBP)][2].
- [Online hosted version of RBP][5]
- [RBP Postman Collections][6]

The tests contained within are for learning more about the test framework. As such some code examples may be incomplete, bad examples, poor practice, or just plain broken.

## Setup
- [Install Playwright and its dependencies][3]
    - TDLR: Install Node and Playwright
- [Build Restful Booker][4] locally
    - Once you've built it all once it'll spin up again more quickly 
    - You can build and run via Docker, after that initial build (Docker image relies on built artefacts)
        - Bring up the containers `cd [path to your local RBP repo] && docker-compose up -d`
        - Shut down when you're finished `docker-compose down`

## Framework
- Github Action manually disabled. If you fork this project it will run automatically.

### Run tests

#### @WIP
- To run them against your local env use `npm run test:dev:wip`
- To run them against "staging" env use `npm run test:staging:wip`

## Test coverage
TBD

<!-- Playwright Links -->
[1]: https://playwright.dev/
[3]: https://playwright.dev/docs/intro
<!-- RBP Links -->
[2]: https://github.com/mwinteringham/restful-booker-platform
[4]: https://github.com/mwinteringham/restful-booker-platform#building-locally
[5]: https://automationintesting.online/
[6]: https://www.postman.com/automation-in-testing/workspace/restful-booker-collections/overview