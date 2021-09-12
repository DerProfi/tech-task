# Homeday Tech Task
## Table of contents
* [About the project] <a >
* [Technologies](#technologies)
* [Setup](#setup)
## About the project

Here is my solution to a coding challenge given to me by Homeday. The rough task was to write an app that uses the Github user API to search for Github users and display some information about them.

### Demo
![alt text](src/images/demo.png)

## Built with

I decided to write the app using Vue Version 2, as this is my framework of choice and it is used by Homeday.

## Getting started
### Prerequisites
You need to install npm und your machine and listen to changes in CSS preprocessor files.
```
# Install dependencies
$ npm install npm@latest -g

# Listen to CSS preprocessor
$ npm run compile:scss
```
### Instalation
1. Clone the repo
```
git clone https://github.com/DerProfi/tech-task
```

## Testing
Since I'm not very familiar with testing yet, I've only tested the app on the most used browsers (Chrome, Firefox, Edge, Safari).
I will add the unit testing as soon as I am confident here.

## Styling
I decided to use a desktop first approach, as this is also Homeday's approach, and added a breakpoint at 720px for mobile devices.

.
├── build                   # Compiled files (alternatively `dist`)
├── docs                    # Documentation files (alternatively `doc`)
├── src                     # Source files (alternatively `lib` or `app`)
├── test                    # Automated tests (alternatively `spec` or `tests`)
├── tools                   # Tools and utilities
├── LICENSE
└── README.md