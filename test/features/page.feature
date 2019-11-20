Feature: Visit Github page
  Background:
    Given I visit "/"

  Scenario: Check SEO
    Then <h1> tag should contain "Built for developers"
