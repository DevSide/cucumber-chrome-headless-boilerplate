Feature: Visit Google

  Background:
    Given I visit "/"

  Scenario: Check the title
    Then I expect the title to be "Google"
