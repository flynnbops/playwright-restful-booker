FROM mcr.microsoft.com/playwright:v1.40.1-jammy

WORKDIR /tests

COPY ["package.json", "."]
COPY ["package-lock.json", "."]
COPY ["playwright.config.ts", "."]
COPY ["rbp/", "rbp/"]
COPY ["utils/", "utils/"]

RUN ["npm", "install"]
CMD [ "npm", "run"]