# CarAI

**CarAI is an application that allows users to fill out a form and receive an email with the best-fit car for them based on their input.**


![Untitled design](https://github.com/AvishaiDotan/CarAI/assets/108017307/3acdbe60-aa59-4eb2-8f0c-398403be1440)

Link: [Here]([https://your-deployment-link.com](https://avishaidotan.github.io/CarAI/CarAI/))


## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Running the Application](#running-the-application)
6. [Contributing](#contributing)
7. [License](#license)
8. [Contact](#contact)

## Introduction
CarAI is an application designed to help users find the best-fit car for them based on their input through a form. The application sends an email with the car recommendations after the form submission.

## Features

### CarAI Form
The form is a reactive form with built-in validations and custom validations. It uses a pagination component to navigate between different parts of the form. When submitted, the form checks the security of the input using DomSanitizer.


https://github.com/AvishaiDotan/CarAI/assets/108017307/cc6d9309-e3bd-4b26-8645-91fadce60925

### CarAI Admin Center
The Admin Center is the place for administrators to view results and statistics. It contains:


https://github.com/AvishaiDotan/CarAI/assets/108017307/88dde3a0-fc1c-46bb-ad11-c7afc65cd66a


- A table for detailed data
- Three graphs generated with `ngx-graph`
- Data analysis and conversion into graph data
- Options to change the data displayed in the graphs
- Information about website visitors and conversion rates

## Technologies Used
- Angular
- RxJS
- Directives
- Reactive Forms
- SCSS
- ngx-graph
- Angular Routing
- Angular Material

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/avishaidotan/CarAI.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CarAI
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the Application
To run the application, use the following command:
```bash
ng serve
