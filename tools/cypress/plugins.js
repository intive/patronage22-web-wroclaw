module.exports = (on, config) => {
  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.family === "chromium" && browser.name !== "electron") {
      // auto open devtools
      launchOptions.args.push("--auto-open-devtools-for-tabs");
    }

    if (browser.name === "chrome" && browser.isHeadless) {
      launchOptions.args.push("--disable-gpu");
      launchOptions.args.push("--disable-dev-shm-usage");

      return launchOptions;
    }
  });
};
