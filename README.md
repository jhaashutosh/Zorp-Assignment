# Zorp-Assignment

## Project Description

This project is a responsive web application built using HTML, CSS, and JavaScript, with a primary goal of achieving a pixel-perfect user interface. It features three modes of responsiveness for different devices: laptop, tablet, and mobile phones.

## Features

### 1. Pixel-Perfect Design

The project focuses on creating a pixel-perfect user interface. Great attention has been paid to matching the details as closely as possible to achieve a high-quality visual design.

### 2. Pagination with Constraints

The project includes a functional pagination system that enforces constraints on the "Previous" and "Next" buttons. The "Previous" button is disabled on the first page, and the "Next" button is disabled on the last page, ensuring a user-friendly navigation experience.

### 3. Dynamic Data Population

Data in the table is not hard-coded but fetched from a JSON file. A custom function, `addTableRow`, creates a dynamic table row element based on the data parameters. This enhances the project's flexibility and scalability.

### 4. Dynamic Entries Per Page

Users can select the number of entries per page with options of 10, 25, 50, and 100. The project includes functions, `updatePageInfo` and `changeEntriesPerPage`, to calculate the number of records based on the selected option and populate the table accordingly.

### 5. Dynamic Action Field Colors

The "Action" field features dynamic colors mapped to specific words. An object maps words to colors, allowing different colors for various entries, enhancing the visual appeal and user experience.

## How to Run the Project

1. Clone this repository to your local machine.
2. Open the project's main HTML file in a web browser.

## Technologies Used

- HTML
- CSS (custom, no frameworks)
- JavaScript

## Usage

- Browse through the responsive web application on your laptop, tablet, or mobile phone.
- Test the pagination functionality and observe how the "Previous" and "Next" buttons behave.
- Change the number of entries per page and observe how the table updates accordingly.
- Explore the dynamic action field colors.

## Sample Data

A JSON file with dummy data is provided in the project to showcase its dynamic capabilities.

## Contact

- Ashutosh Kumar Jha
- jhaashutosh58@gmail.com
