# Playwright Restful booker

A repo for writing [Playwright][1] tests against the [Restful Booker Platform (RBP)][2].

The tests contained within are for learning more about the test framework. As such some code examples may be imcomplete, bad examples, poor practice, or just plain broken.


## Setup - TODO
- [Install Playwright and its dependencies][3]
    - TDLR: Install node Playwright
- [Build Restful Booker][4] locally
    - Once you've built it all once it'll spin up again more quickly 
    - You can build and run via Docker, after that initial build (Docker image relies on built artefacts)
        - Bring up the containers`cd [path to your local RBP repo] && docker-compose up -d`
        - Shut down when you're finished `docker-compose down`

## Framework

## Test coverage


[1]: https://playwright.dev/
[2]: https://github.com/mwinteringham/restful-booker-platform
[3]: https://playwright.dev/docs/intro
[4]: https://github.com/mwinteringham/restful-booker-platform#building-locally