Welcome to my Cypress-based automation project for testing the Amazon Careers website! This project aims to validate job search functionality while applying best practices in automation.

📌 Project Overview
This project automates a couple of smoke test scenarios on Amazon's Global Career Site to ensure a smooth user experience in job searches. It follows best automation practices, including:

✅ Cypress setup for E2E testing
✅ Best practices: Page Object Model (POM), fixtures, and reusable commands
✅ GitHub Actions for CI/CD pipeline integration
✅ Smoke tests for Find Work → Search Jobs section
✅ Automated validation of job listings

📂 Folder Structure
📦 amazon-job-search-tests
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e
 ┃ ┃ ┣ 📜 searchJobs.cy.js
 ┃ ┣ 📂 fixtures
 ┃ ┣ 📂 page_objects
 ┃ ┃ ┣ 📜 searchPage.js
 ┃ ┣ 📂 support
 ┣ 📜 cypress.config.js
 ┣ 📜 package.json
 ┣ 📜 package-lock.json
 ┣ 📜 README.md
 ┣ 📂 .github/workflows
 ┃ ┣ 📜 main.yml

🛠️ Setup Instructions
1️⃣ Clone this repo
git clone https://github.com/alexpanovQA/amazon-job-search-tests.git
cd amazon-job-search-tests

2️⃣ Install dependencies
npm install

3️⃣ Run tests locally
npx cypress open

4️⃣ Run tests in headless mode
npx cypress run

5️⃣ Run GitHub Actions pipeline
Simply push changes to trigger a CI/CD workflow.

