# NewsApp

## Overview

NewsApp is a modern news application that fetches and displays the latest news articles. Users can browse news articles by category, search for specific news topics, and view their search history.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (version 12 or higher)
- [npm](https://www.npmjs.com/get-npm) (Node Package Manager)

## Installation

Follow these steps to set up and run NewsApp on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ARAVIND281/NewsApp
   cd news-app

2. **Install dependencies**:
   ```bash
   npm install

2. **Set your API KEY in newsService.js**:
   ```bash
   replace API_KEY with your API KEY in newsService.js

This will start the development server and open the application in your default web browser. The server will reload automatically if you make any edits to the code.

## Usage

### Home Page
- **Home**: The homepage displays the latest news articles fetched from the API.
- **Load More**: Click the "Load More" button to fetch and display more news articles.

### Category Pages
- **Politics, Sports, Technology**: Navigate to these category pages to view news articles specific to each category.
- **Load More**: Click the "Load More" button to fetch and display more news articles in the selected category.

### Search Functionality
- **Search**: Enter keywords into the search bar and click the "Search" button to find news articles related to the entered keywords.
- **Load More**: Click the "Load More" button to fetch and display more search results.
- **Search History**: The search history section displays the user’s past search queries as clickable chips. Users can:
  - **Click a search query chip**: This will re-run the search for the clicked query.
  - **Remove a search query chip**: Click the remove icon on the chip to delete it from the history.

## Project Structure


### Description of Key Files and Directories

- **public/**: Contains static files that are served directly by the web server, including `index.html`.
  - **index.html**: The main HTML file that includes a div with the id of "root" where the React application mounts.

- **src/**: Contains the source code for the React application.
  - **components/**: Contains all the React components used in the application.
    - **ArticleCard.js**: Component for displaying individual news articles.
    - **CategoryPage.js**: Component for displaying news articles by category.
    - **HomePage.js**: Component for displaying the homepage with the latest news articles.
    - **Navbar.js**: Component for the navigation bar.
    - **Search.js**: Component for the search functionality.
    - **ArticlePage.js**: Component for displaying a detailed view of a single news article.
    - **styles/**: Directory containing CSS files for styling the components.
      - **styles.css**: Global styles for the application.
      - **Navbar.css**: Styles specific to the Navbar component.
      - **ArticleCard.css**: Styles specific to the ArticleCard component.
      - **HomePage.css**: Styles specific to the HomePage component.
      - **CategoryPage.css**: Styles specific to the CategoryPage component.
      - **Search.css**: Styles specific to the Search component.
  
  - **services/**: Contains service files for making API calls.
    - **newsService.js**: Service file for fetching news data from the News API.

  - **App.js**: The root component that defines the main structure of the application.
  - **index.js**: The entry point of the React application. It renders the App component into the root div in index.html.

- **.env**: Contains environment variables such as the News API key.
- **package.json**: Contains metadata about the project and dependencies.
- **README.md**: The README file providing information about the project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or improvements, please create an issue or submit a pull request.

### Steps to Contribute

1. **Fork the repository**: Click the "Fork" button at the top right of this repository.
2. **Clone your forked repository**:
   ```bash
   git clone https://github.com/ARAVIND281/NewsApp
   cd news-app
3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
4. **Make your changes**: Implement your changes or new features.
5. **Clone your forked repository**:
   ```bash
   git add .
   git commit -m "Add your commit message"
6. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
7. **Create a pull request**: Go to the repository on GitHub and click the "New pull request" button.

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.