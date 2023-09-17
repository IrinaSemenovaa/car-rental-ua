# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Car Rental 

The "Car Rental" project is a web application that provides information about available rental cars. This application allows users to browse and filter the list of available cars, add them to their favorites, and get detailed information about each car.

## Key Features

1. **Home Page:** The home page provides a general description of the services offered by the car rental company.

2. **Car Catalog:** On this page, users can view the list of available cars. They can also filter cars by brand, hourly rental price, and mileage.

3. **Favorites Page:** Here, users can see a list of cars they have added to their favorites. They can also remove cars from the list.

## Technical Details

- **Technologies Used:** I utilized the following technologies in this project: React, React Router, Emotion (including @emotion/react and @emotion/styled), Redux Toolkit, Axios, React Redux, and React Modal.

- **Backend for Advertisements:** For the backend that provides information about available cars, I used https://mockapi.io/. Each advertisement has fields such as id, year, make, model, type, img, description, and others.

- **Pagination:**  I implemented pagination, where 8 cars are displayed on one page, and users can load more ads by clicking the "Load more" button.

## How to Run the Project

To run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-username/your-project.git

# Navigate to the project directory
cd your-project

# Install dependencies
npm install

# Start the project
npm start
