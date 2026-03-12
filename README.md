<div align="center">

# 🎭 Playwright Automation Framework

[![Playwright Tests](https://github.com/KunjMaheshwari/Playwright-Automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/KunjMaheshwari/Playwright-Automation/actions/workflows/playwright.yml)
![JavaScript](https://img.shields.io/badge/JavaScript-100%25-yellow?logo=javascript)
![Playwright](https://img.shields.io/badge/Playwright-v1.58.2-45ba63?logo=playwright)
![License](https://img.shields.io/badge/License-ISC-blue)

**A robust end-to-end test automation framework built with Playwright for modern web applications**

[Getting Started](#-getting-started) •
[Features](#-features) •
[Architecture](#-architecture) •
[Test Examples](#-test-examples) •
[CI/CD](#-cicd-pipeline)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Test Examples](#-test-examples)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Configuration](#-configuration)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)

---

## 🎯 Overview

This Playwright Automation Framework provides a comprehensive solution for automated end-to-end testing of web applications. Built with modern JavaScript and Playwright Test, it demonstrates various testing patterns, locator strategies, and best practices for building maintainable test suites.

### Target Applications
- 🌐 [Playwright Documentation](https://playwright.dev/)
- 🛒 [DemoBlaze E-commerce](https://www.demoblaze.com/)
- 🏢 [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌍 **Cross-Browser Testing** | Run tests on Chromium, Firefox, and WebKit |
| ⚡ **Parallel Execution** | Fully parallel test execution for faster results |
| 📊 **HTML Reports** | Beautiful, interactive HTML test reports |
| 🔄 **CI/CD Integration** | GitHub Actions workflow included |
| 🎯 **Multiple Locator Strategies** | XPath, CSS, Built-in locators demonstration |
| 🔁 **Auto-Retry on CI** | Automatic retries for flaky tests in CI environment |
| 📸 **Trace on Failure** | Detailed traces captured on first retry |

---

## 🏗 Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        PLAYWRIGHT AUTOMATION FRAMEWORK                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐    ┌──────────────────┐    ┌─────────────────────────┐   │
│  │   GitHub    │───▶│  GitHub Actions  │───▶│    Test Execution       │   │
│  │   (Push/PR) │    │    CI Pipeline   │    │    Environment          │   │
│  └─────────────┘    └──────────────────┘    └─────────────────────────┘   │
│                              │                          │                   │
│                              ▼                          ▼                   │
│                     ┌──────────────────┐    ┌─────────────────────────┐   │
│                     │  Install Deps    │    │   Playwright Test       │   │
│                     │  & Browsers      │    │   Runner                │   │
│                     └──────────────────┘    └─────────────────────────┘   │
│                                                         │                   │
│                              ┌───────────────────────────┤                   │
│                              │                           │                   │
│                              ▼                           ▼                   │
│                     ┌──────────────────┐    ┌─────────────────────────┐   │
│                     │   HTML Report    │    │   Artifact Upload       │   │
│                     │   Generation     │    │   (30 days retention)   │   │
│                     └──────────────────┘    └─────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Test Execution Flow

```
┌────────────────────────────────────────────────────────────────────────────┐
│                           TEST EXECUTION FLOW                               │
└────────────────────────────────────────────────────────────────────────────┘

    ┌─────────────────┐
    │  Test Spec      │
    │  (.spec.js)     │
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐     ┌─────────────────────────────────────────────┐
    │ Playwright Test │────▶│              BROWSER PROJECTS               │
    │    Runner       │     │  ┌─────────┐ ┌─────────┐ ┌─────────┐       │
    └─────────────────┘     │  │Chromium │ │ Firefox │ │ WebKit  │       │
             │              │  │(Chrome) │ │         │ │(Safari) │       │
             │              │  └─────────┘ └─────────┘ └─────────┘       │
             │              └─────────────────────────────────────────────┘
             │
             ▼
    ┌─────────────────┐
    │  Page Fixture   │──────────────────────────────────────────┐
    │  (Browser Page) │                                          │
    └────────┬────────┘                                          │
             │                                                    │
             ▼                                                    ▼
    ┌─────────────────┐                                 ┌─────────────────┐
    │   Navigation    │                                 │    Locators     │
    │   page.goto()   │                                 │   Strategies    │
    └────────┬────────┘                                 └────────┬────────┘
             │                                                    │
             ▼                                                    ▼
    ┌─────────────────┐                                 ┌─────────────────┐
    │   Interactions  │◀────────────────────────────────│ • XPath         │
    │   • click()     │                                 │ • CSS Selector  │
    │   • fill()      │                                 │ • getByRole()   │
    │   • type()      │                                 │ • getByText()   │
    └────────┬────────┘                                 │ • getByAltText()│
             │                                          │ • Placeholder   │
             ▼                                          └─────────────────┘
    ┌─────────────────┐
    │   Assertions    │
    │   expect()      │
    └────────┬────────┘
             │
             ▼
    ┌─────────────────┐
    │  Test Results   │
    │  (Pass/Fail)    │
    └─────────────────┘
```

### Component Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        COMPONENT ARCHITECTURE                            │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │                     CONFIGURATION LAYER                          │  │
│   │  ┌──────────────────────────────────────────────────────────┐   │  │
│   │  │                playwright.config.js                       │   │  │
│   │  │  • testDir: ./tests                                       │   │  │
│   │  │  • fullyParallel: true                                    │   │  │
│   │  │  • reporter: 'html'                                       │   │  │
│   │  │  • trace: 'on-first-retry'                                │   │  │
│   │  └──────────────────────────────────────────────────────────┘   │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                    │                                    │
│                                    ▼                                    │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │                       TEST LAYER (tests/)                        │  │
│   │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌───────────┐  │  │
│   │  │example.spec │ │HomePage.spec│ │Locators.spec│ │  More...  │  │  │
│   │  │    .js      │ │    .js      │ │    .js      │ │           │  │  │
│   │  └─────────────┘ └─────────────┘ └─────────────┘ └───────────┘  │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                    │                                    │
│                                    ▼                                    │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │                    CI/CD LAYER (.github/workflows/)              │  │
│   │  ┌──────────────────────────────────────────────────────────┐   │  │
│   │  │                  playwright.yml                           │   │  │
│   │  │  Triggers: push/PR to main/master                         │   │  │
│   │  │  Steps: Checkout → Setup Node → Install → Test → Report   │   │  │
│   │  └──────────────────────────────────────────────────────────┘   │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📦 Project Structure

```
Playwright-Automation/
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── 📄 playwright.yml        # CI/CD pipeline configuration
│
├── 📂 tests/                         # Test specifications
│   ├── 📄 example.spec.js           # Playwright.dev basic tests
│   ├── 📄 HomePage.spec.js          # Home page validation tests
│   ├── 📄 Locators.spec.js          # XPath locator examples
│   ├── 📄 Locators_buildin.spec.js  # Built-in locator examples
│   └── 📄 LocatingMultipleElements.spec.js  # Multiple elements handling
│
├── 📄 .gitignore                     # Git ignore rules
├── 📄 package.json                   # Project dependencies
├── 📄 package-lock.json              # Locked dependencies
├── 📄 playwright.config.js           # Playwright configuration
└── 📄 README.md                      # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KunjMaheshwari/Playwright-Automation.git
   cd Playwright-Automation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install --with-deps
   ```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run specific test file
npx playwright test tests/HomePage.spec.js

# Run tests on specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run tests with UI mode
npx playwright test --ui

# Show HTML report
npx playwright show-report
```

---

## 🧪 Test Examples

### 1. Basic Navigation & Assertions
```javascript
test('Home Page', async ({page}) => {
    await page.goto("https://www.demoblaze.com/");
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://www.demoblaze.com/");
});
```

### 2. Built-in Locators
```javascript
test('Build In Locators', async ({page}) => {
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {type:'submit'}).click();
});
```

### 3. XPath Locators
```javascript
test('Locators', async ({page}) => {
    await page.click("//a[text()='Sign up']");
    await page.locator("//input[@id='sign-username']").fill("Kunj");
});
```

### 4. Multiple Elements Handling
```javascript
test('Multiple Locators', async ({page}) => {
    const productList = await page.$$("//div[@id='tbodyid']//h4//a");
    for (const product of productList) {
        const productName = await product.textContent();
        console.log("Product Name: ", productName);
    }
});
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The project includes a fully configured CI/CD pipeline that runs on every push or pull request to `main`/`master` branches.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        GITHUB ACTIONS PIPELINE                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐            │
│   │    PUSH      │    │     PR       │    │   MANUAL     │            │
│   │  to main/    │    │  to main/    │    │   TRIGGER    │            │
│   │   master     │    │   master     │    │              │            │
│   └──────┬───────┘    └──────┬───────┘    └──────┬───────┘            │
│          │                   │                   │                     │
│          └───────────────────┴───────────────────┘                     │
│                              │                                          │
│                              ▼                                          │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │                      JOB: test                                   │  │
│   │                   runs-on: ubuntu-latest                         │  │
│   │                   timeout: 60 minutes                            │  │
│   └─────────────────────────────────────────────────────────────────┘  │
│                              │                                          │
│          ┌───────────────────┼───────────────────┐                     │
│          ▼                   ▼                   ▼                     │
│   ┌────────────┐      ┌────────────┐      ┌────────────┐              │
│   │  Checkout  │─────▶│Setup Node  │─────▶│Install Deps│              │
│   │    Code    │      │  (LTS/*)   │      │  (npm ci)  │              │
│   └────────────┘      └────────────┘      └────────────┘              │
│                                                  │                     │
│                                                  ▼                     │
│                              ┌────────────────────────────────┐        │
│                              │  Install Playwright Browsers   │        │
│                              │  npx playwright install         │        │
│                              │        --with-deps             │        │
│                              └───────────────┬────────────────┘        │
│                                              │                         │
│                                              ▼                         │
│                              ┌────────────────────────────────┐        │
│                              │    Run Playwright Tests        │        │
│                              │    npx playwright test         │        │
│                              └───────────────┬────────────────┘        │
│                                              │                         │
│                                              ▼                         │
│                              ┌────────────────────────────────┐        │
│                              │   Upload Test Artifacts        │        │
│                              │   (playwright-report/)         │        │
│                              │   Retention: 30 days           │        │
│                              └────────────────────────────────┘        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Pipeline Features
- ✅ Automatic trigger on push/PR
- ✅ Node.js LTS version
- ✅ All browser dependencies installed
- ✅ HTML reports uploaded as artifacts
- ✅ 30-day artifact retention

---

## ⚙️ Configuration

### Browser Projects

| Project | Browser | Description |
|---------|---------|-------------|
| `chromium` | Desktop Chrome | Google Chrome browser engine |
| `firefox` | Desktop Firefox | Mozilla Firefox browser |
| `webkit` | Desktop Safari | Apple Safari browser engine |

### Key Configuration Options

```javascript
// playwright.config.js
{
  testDir: './tests',           // Test files location
  fullyParallel: true,          // Run tests in parallel
  forbidOnly: !!process.env.CI, // Fail if test.only in CI
  retries: process.env.CI ? 2 : 0, // Retry failed tests in CI
  workers: process.env.CI ? 1 : undefined, // Worker threads
  reporter: 'html',             // HTML report generation
  trace: 'on-first-retry',      // Capture trace on retry
}
```

---

## 📚 Best Practices

### ✅ Implemented in This Project

- **🎯 Use Semantic Locators** - Prefer `getByRole()`, `getByText()`, `getByPlaceholder()` over CSS/XPath
- **⏱️ Implicit Waiting** - Playwright auto-waits for elements
- **🔄 Parallel Execution** - Tests run in parallel for speed
- **📊 Comprehensive Reporting** - HTML reports with traces
- **🔐 CI/CD Integration** - Automated testing pipeline
- **🧹 Clean Test Structure** - Each test is independent

### 💡 Recommendations for Extension

- Implement **Page Object Model (POM)** for larger test suites
- Add **API testing** capabilities
- Configure **visual comparison** testing
- Set up **environment-specific configurations**
- Add **custom fixtures** for common operations

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Kunj Maheshwari**

- GitHub: [@KunjMaheshwari](https://github.com/KunjMaheshwari)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ using [Playwright](https://playwright.dev/)

</div>