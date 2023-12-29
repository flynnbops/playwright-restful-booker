# Playwright Restful booker
> Work In Progress

A repo for writing [Playwright][1] tests against the [Restful Booker Platform (RBP)][2].
- [Online hosted version of RBP][5] being used as my `staging` environment.
- [RBP Postman Collections][6]

The tests contained within are for learning more about the test framework. As such some code examples may be incomplete, bad examples, poor practice, or just plain broken.

## Setup
1. [Install Playwright and its dependencies][3]
    - TDLR: Install Node and Playwright
2. Install [Docker Desktop][9]
3. Build the application with `docker-compose`
    - To speed things up for me, I've pushed tagged versions of the images I've built to my own [Docker Hub profile][8]. These are used in `docker-compose.yml`. 
    - You can use these images to build and run the application `docker-compose up -d`
    - Shut down when you're finished `docker-compose down --remove-orphans`

- `Alternatively` [build the Restful Booker images][4] locally yourself
    - Once you've built it all once it'll spin up again more quickly 
    - You can build and run via Docker, after that initial build (Docker image relies on built artifacts)
        - Bring up the containers `cd [path to your local RBP repo] && docker-compose up -d`
        - Shut down when you're finished `docker-compose down --remove-orphans`

## Framework
- Github Action manually disabled. If you fork this project it will run automatically.
- To [upgrade Playwright][7] run `npm install -D @playwright/test@latest`
- Test run files are available on the local machine when using `docker-compose` via a mounted `volume`. The volume also applies test file updates in subsequent runs without the need to rebuild the `playwright` test image.

### Run tests
Tests can be run locally or via `docker-compose`. The default setup uses `docker-compose`. To run tests from your local machine directly, will need to update the env vars in `tests/utils/environment-base-urls.ts` first.

#### Against local dev
- Make sure the [env is up and running](README.md#setup).
- To run some tests against your local env use `docker-compose run playwright npm run test:dev:all`
- Tests can be run from your local machine with`npm run test:dev:all`

#### Against staging
We may want to run the tests from our local machine or via `docker-compose`. The difference here being we do not control the staging env as it is hosted online. 

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
[8]: https://hub.docker.com/u/flynnbops
[9]: https://docs.docker.com/get-docker/
