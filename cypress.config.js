const { defineConfig } = require("cypress");
const Mailosaur = require("mailosaur");
const fs = require("fs");

function loadEnvVariables(config) {
  const envPath = "cypress.env.json";
  if (fs.existsSync(envPath)) {
    const envConfig = JSON.parse(fs.readFileSync(envPath, "utf8"));
    Object.assign(config.env, envConfig);
  }
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://amazon.jobs/en/",

    setupNodeEvents(on, config) {
      loadEnvVariables(config);

      on("task", {
        async getMailosaurOTP() {
          try {
            const mailosaur = new Mailosaur(
              config.env.CYPRESS_MAILOSAUR_API_KEY
            );
            const email = await mailosaur.messages.get(
              config.env.CYPRESS_MAILOSAUR_SERVER_ID,
              {
                sentTo: config.env.CYPRESS_TEST_EMAIL,
              }
            );

            if (!email) return null;

            const otpMatch = email.html.body.match(/\b\d{6}\b/);
            return otpMatch ? otpMatch[0] : null;
          } catch {
            return null;
          }
        },
      });

      return config;
    },
  },
});
