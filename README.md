<h1 style="color:#007ac9;border-bottom:none;text-align:center;">Intive Patronage 2022</h1>
<h2 style="text-align:center;border-bottom:none">Wrocław JavaScript Project</h2>

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [Usage](#usage)
- [Project Status](#project-status)
- [Room for Improvement](#room-for-improvement)
- [Contact](#contact)

## General Information

- Provide general information about your project here.
- What problem does it (intend to) solve?
- What is the purpose of your project?
- etc...

## Technologies Used

- links to libs like React/nx/ts etc... with logos?

## Features

List the ready features here:

- Awesome feature 1
- Awesome feature 2
- Awesome feature 3

## Screenshots

![Example screenshot](./img/screenshot.png)

<!-- If you have screenshots you'd like to share, include them here. -->

## Setup

What are the project requirements/dependencies? Where are they listed?

Proceed to describe how to install / setup one's local environment / get started with the project.

## Usage

How does one go about using it?
Provide various use cases and code examples here.

`write-your-code-here`

## Project Status

Project is **_in progress_ **

======================================================

## Style Guide

### Code standards:

1.  https://github.com/airbnb/javascript
2.  https://github.com/airbnb/javascript/tree/master/react

### JavaScript & React rules to be highlighted:

- We prefer using EcmaScript 2015 - 2021
- We use arrow functions
- We prefer hooks and functional components
- We follow KISS and DRY and AHA rules
- We think about interface first, then build component
- We think mobile first, then go up with building styles
- We make empty line between HTML elements on the same hierarchy level if HTML is complex
- We do not use "magic numbers"
- We have in mind SOLID principles (https://github.com/ryanmcdermott/clean-code-javascript)
- If it comes to styles, we follow BEM rules (https://css-tricks.com/bem-101/)
- We add underscore to variables that are not used but required (throwaway variable), for instance:
  ( \_notUsedVariable: any, usedVariable: any) => {
  const result = usedVariable + 1

  return result
  }

### Naming conventions:

- Folders and files should have names with lowercase (kebab case) (https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841)
- Each component should has own folder, inside should be 'index' with component inside or export if more files than 1
- If it comes to variables and functions names: https://github.com/airbnb/javascript#naming-conventions
  - Variable names should be descriptive. Reader should know meaning based on read.
  - For actions that are passed as props use 'onSomeName' and for functions that defines actions inside components use 'handleSomeName'.
  - Methods names - please use verbs - ex. "getAllHeaders"
  - Variables names:
    - For boolean variables please question-like names - ex. "hasProperValue", "shouldContainValue", "isProperElement"
    - For other variables please use noun-like names - ex. "mainTitle", "footer"
  - We use UPPERCASE if it comes to CONSTANTS names

### Component properties order:

- We put useEffects just above render method (or return)

### Translations order:

- We sort them alphabetical ASC

### Meaning of constants.ts:

- Reausable global variables
- This file should be central-place of all important meaning variables which are used in multiple places in application

### Styling

- We use styled components (https://mui.com/pt/system/styled/)
- We use [_css-in-js_](https://cssinjs.org/?v=v10.9.0)
- We keep styles definitions in separate files within component folder
- Naming convention - styled components should have names relevant to intended use and have prefix which determines type of the styled component.

  Sample:

  - OutlinedButton
  - ContainedButton

- Importing - import styled components implicitly:

  Sample:

  import \* as Styled from "./style.ts"

  Usage:

  <Styled.OutlinedButton>...</Styled.OutlinedButton>

======================================================

## Git-Flow

- master (production)
- develop
- feature/\*
- release/\*
- bugfix/\*
- hotfix/\*

## Room for Improvement

Include areas you believe need improvement / could be improved. Also add TODOs for future development.

Room for improvement:

- Improvement to be done 1
- Improvement to be done 2

To do:

- Feature to be added 1
- Feature to be added 2

## Contributors

All Intive Patronage participants nicks or sth :)

## Contact

Created by [@intive](https://www.intive.com/) - feel free to contact us!
