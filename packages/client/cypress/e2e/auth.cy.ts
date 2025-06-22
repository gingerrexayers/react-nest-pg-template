/// <reference types="cypress" />

describe("Registration Form Validation", () => {
  beforeEach(() => {
    cy.visit("/register");
  });

  it("should initially have a disabled submit button and validate fields on blur", () => {
    // Check initial state: button disabled
    cy.get('[data-cy="register-submit-button"]').should("be.disabled");

    // Name field validation
    cy.get('[data-cy="register-name-input"]').type("J").blur(); // Min 2 chars, so 'J' is invalid by current zod
    cy.contains("Name must be at least 2 characters.").should("be.visible");
    cy.get('[data-cy="register-submit-button"]').should("be.disabled");
    cy.get('[data-cy="register-name-input"]').clear().type("John Doe").blur();
    cy.contains("Name must be at least 2 characters.").should("not.exist");

    // Email field validation
    cy.get('[data-cy="register-email-input"]').type("invalid-email").blur();
    cy.contains("Invalid email address.").should("be.visible");
    cy.get('[data-cy="register-submit-button"]').should("be.disabled");
    cy.get('[data-cy="register-email-input"]')
      .clear()
      .type("valid@example.com")
      .blur();
    cy.contains("Invalid email address.").should("not.exist");

    // Password field validation (min 8 characters)
    cy.get('[data-cy="register-password-input"]').type("short").blur();
    cy.contains("Password must be at least 8 characters.").should("be.visible");
    cy.get('[data-cy="register-submit-button"]').should("be.disabled");
    cy.get('[data-cy="register-password-input"]')
      .clear()
      .type("password123")
      .blur();
    cy.contains("Password must be at least 8 characters.").should("not.exist");

    // All fields valid, button should be enabled
    cy.get('[data-cy="register-submit-button"]').should("be.enabled");

    // Make a field invalid again
    cy.get('[data-cy="register-password-input"]').clear().type("short").blur();
    cy.contains("Password must be at least 8 characters.").should("be.visible");
    cy.get('[data-cy="register-submit-button"]').should("be.disabled");
  });

  it("should allow for successful registration and redirect to login", () => {
    // Use a unique email for each test run to avoid conflicts
    const userEmail = `testuser_${Date.now()}@example.com`;

    // Fill out the form with valid data
    cy.get('[data-cy="register-name-input"]').type("Test User");
    cy.get('[data-cy="register-email-input"]').type(userEmail);
    cy.get('[data-cy="register-password-input"]').type("password123");

    // Submit the form
    cy.get('[data-cy="register-submit-button"]').should("be.enabled").click();

    // Assert redirection to the login page and success message
    cy.url().should("include", "/login");
    // Check for a success toast or message. Adjust the selector as needed.
    cy.get('[data-sonner-toast]:contains("Registration successful!")').should(
      "be.visible"
    );
  });
});

describe("Login Flow", () => {
  it("should allow a user to log in and be redirected to the dashboard", () => {
    // The cy.login() command is defined in cypress/support/commands.ts
    // It handles the full login flow, including registration if the user doesn't exist.
    cy.login().then(() => {
      // After login, visiting the root should redirect to the dashboard
      cy.visit("/");
      cy.url().should("include", "/dashboard");
      cy.get('[data-cy="dashboard-title"]').should("be.visible");
      cy.log("Successfully logged in and redirected to the dashboard.");
    });
  });
});
