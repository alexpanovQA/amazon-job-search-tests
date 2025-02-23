Amazon Jobs Automation Project (Cypress)

🚀 Welcome to my Cypress-based automation project for testing the Amazon Careers website!
This project automates a couple of smoke test scenarios on Amazon's Global Career Site to ensure a smooth user experience in job searches. 

✅ Key Features & Best Practices
Cypress setup for end-to-end testing 🏗️
Page Object Model (POM) for maintainability (implemented for tests in "search" folder 📂)
Reusable custom commands & fixtures for dynamic data handling ⚙️
CI/CD Integration with GitHub Actions 🚀
Mailosaur API for OTP authentication validation 🔐

🛠️ Project Setup
1️⃣ Clone the Repository
git clone https://github.com/alexpanovQA/amazon-job-search-tests.git
cd amazon-job-search-tests

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables
This project relies on a cypress.env.json file to store sensitive test credentials.
Alternatively, you can use GitHub Secrets for CI/CD (if not using cypress.env.json).

🚀 Run Tests
Run all tests in headless mode: npx cypress run
Run tests in interactive mode: npx cypress open

🏗️ Continuous Integration (CI) with GitHub Actions
This project is CI/CD ready with GitHub Actions. The workflow automatically:
- Runs Cypress tests on Ubuntu-Latest
- Fetches OTP via Mailosaur API
- Uploads test artifacts (screenshots/videos on failures)

Triggering CI Pipeline
- Runs on every push to main branch
- Executes on every Pull Request

📌 Next Steps
✅ Expand test coverage
✅ Integrate reporting tools for better test analysis
✅ Improve data-driven testing for dynamic validations

🚀 Happy Testing! 🚀