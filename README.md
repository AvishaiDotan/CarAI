# CarAI

**CarAI is an application that allows users to fill out a form and receive an email with the best-fit car for them based on their input.**





![Untitled design](https://github.com/AvishaiDotan/CarAI/assets/108017307/90629b3e-7e7a-4d18-8747-82368f3ca64b)

## Technologies Used

- Angular
- RxJS
- Directives
- Reactive Forms
- SCSS
- ngx-graph
- Angular Routing
- Angular Material

## Features

### CarAI Form

The form is a reactive form with `built-in validations and custom validations`. It uses a pagination component to navigate between different parts of the form. When submitted, the form checks the security of the input using `DomSanitizer`.
![Untitled design (12)](https://github.com/AvishaiDotan/CarAI/assets/108017307/92d8fe1b-b162-4542-afac-7e2a23bbe391)

### CarAI Admin Center

The Admin Center is the place for administrators to view results and statistics. It contains:
![Untitled design (13)](https://github.com/AvishaiDotan/CarAI/assets/108017307/86cac005-0f91-4346-a0ff-26ab94c0f370)

- A table for detailed data
- Three graphs generated with `ngx-graph`
- Data analysis and conversion into graph data
- Options to change the data displayed in the graphs
- Information about website visitors and conversion rates
