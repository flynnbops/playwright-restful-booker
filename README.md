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
    - You can build and run via Docker, after that initial build (Docker image relies on built artifacts)
        - Bring up the containers `cd [path to your local RBP repo] && docker-compose up -d`
        - Shut down when you're finished `docker-compose down`
- To speed things up for me, I've pushed tagged versions of the images I've build to my own [Docker Hub profile][7]. You can try these to bring up the application without building the images yourself. With `docker-compose up -d`

## Framework
- Github Action manually disabled. If you fork this project it will run automatically.
- To [upgrade Playwright][7] run `npm install -D @playwright/test@latest`

### Run tests
Tests can be run locally or via `docker-compose`

#### Against local dev
- Make sure the [env is up and running](README.md#setup)

Assuming we want to run tests as part of `docker-compose`
- To run some tests against your local env use `docker-compose run playwright npm run test:dev:all`

#### Against staging
We may want to run the tests from our local machine or via `docker-compose`. The difference here being we do not control the staging env.

- To run tests from your local machine against "staging" env use `npm run test:staging:all`
- To run tests using `docker-compose` against "staging" use `docker-compose run playwright npm run test:dev:all`

## Test coverage
TBD

<!-- Playwright Links -->
[1]: https://playwright.dev/
[3]: https://playwright.dev/docs/intro
[7]: https://playwright.dev/docs/intro#updating-playwright
<!-- RBP Links -->
[2]: https://github.com/mwinteringham/restful-booker-platform
[4]: https://github.com/mwinteringham/restful-booker-platform#building-locally
[5]: https://automationintesting.online/
[6]: https://www.postman.com/automation-in-testing/workspace/restful-booker-collections/overview
<!-- Other Links -->
[7]: https://hub.docker.com/u/flynnbops