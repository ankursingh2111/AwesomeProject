Feature: Test existence of elements
    As a developer
    I want to be able to test the existence of a element

    Background:
        Given I open the app 
        Then  I expect that element "Welcome" does  exist

    Scenario: Enter the value in Input Box from Excel
        When I set "rowIndex1" to the inputfield "TextInput"
        Then I expect that element "TextOutput" contains the text "rowIndex1"
        When  I clear the inputfield "TextInput"
        Then  I expect that element "TextOutput" not contains any text
        When I set "rowIndex2" to the inputfield "TextInput"
        Then I expect that element "TextOutput" contains the text "rowIndex2"