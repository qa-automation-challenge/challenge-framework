# Challenge Repository

A simple project repository for solving a test automation challenge.

## Project Overview

This repository contains the source code and resources for a challenge-based project. The framework allows automate tests cases for ui and api.

## Tools Recommended

- visual studio code [https://code.visualstudio.com/]
- node.js [https://nodejs.org/en]
- git bash [https://git-scm.com/downloads]

## Project Structure

```text
challenge-framework/
│
├── src/
│   ├── api/
│   │   ├── clients/
│   │   ├── data/
│   │   └── schemas/
│   │
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── DashboardPage.ts
│   │   ├── PimPage.ts
│   │   ├── SidebarComponent.ts
│   │   └── UpBarComponent.ts
│   │
│   ├── utils/
│   │   ├── authHelper.ts
│   │   ├── employeeGenerator.ts
│   │   └── config.ts
│
├── tests/
│   ├── api/
│   └── ui/
│
├── .prettierrc.json
├── eslint.config.mjs
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── .env
└── README.md
```

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/qa-automation-challenge/challenge-framework.git
   cd challenge
   ```

2. Install dependencies

   ```bash
   npm install
   ```

## How to run tests

Before to run some test it needs have .env file with all confidential data.

After .env file configured, to run all test it just needed run the following command:

```
npm test
```

To run ui tests only:

```
npm run test:ui
```

To run api tests only

```
npm run test:api
```

To run tests headed

```
npm run test:headed
```

## How to generate report

To generate the report, execute the following command:

```
npm run report
```

## How to execute the linters

To check the code quality, execute the following command:

```
npm run lint
```

To check and fix the code style, execute the following command:

```
npm run format:fix
```
