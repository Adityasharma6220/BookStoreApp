
# Book Store App

A responsive Book Store application built with React. This app allows users to browse, search, add to cart, and purchase books. It features a simple user interface, integrated cart functionality, and a sample checkout flow.

## Features

- **Book List**: Browse and view details of available books.
- **Search**: Find books by title, author, or genre.
- **Add to Cart**: Add or remove books from the shopping cart.
- **Cart Summary**: View the total items and price in the cart.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Built With

- **React** - JavaScript library for building user interfaces.
- **React Router** - Routing library for handling page navigation.
- **Redux** - State management for managing cart state across components.
- **Axios** - For fetching data from external APIs.
- **Tailwind CSS** - CSS framework for styling and responsive layout.

## Prerequisites

To run this project locally, ensure you have:

- **Node.js** - [Download Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/book-store-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd book-store-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open the app in your browser at:

   ```
   http://localhost:3000
   ```

## Folder Structure

```
book-store-app/
│
├── public/                # Public assets
│   └── index.html         # Main HTML file
│
├── src/                   # Application source code
│   ├── components/        # Reusable components (e.g., BookCard, CartItem)
│   ├── pages/             # Page components (e.g., Home, Cart, BookDetails)
│   ├── redux/             # Redux setup for managing global state
│   ├── services/          # API calls for fetching book data
│   ├── App.js             # Main app component
│   └── index.js           # App entry point
│
├── .env                   # Environment variables (e.g., API keys)
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## API Integration

This app fetches book data from an external API. Configure your `.env` file with your API key:

```plaintext
REACT_APP_API_URL=https://api.example.com/books
REACT_APP_API_KEY=your_api_key_here
```

## Usage

### Running the Application

After starting the app, you can:

1. **View Books**: Browse books on the home page.
2. **Search Books**: Use the search bar to find specific books by title, author, or genre.
3. **Add to Cart**: Click on any book to view details and add it to the cart.
4. **Manage Cart**: View items in your cart, adjust quantities, and view the total price.

### Key Components

- **BookCard** - Displays book information in a card format.
- **Cart** - Shows the items added to the cart and allows users to manage them.
- **BookDetails** - Displays detailed information about a selected book.
- **SearchBar** - Enables users to search for books.
- **Navigation** - Contains links to navigate across different pages.

## Available Scripts

- `npm start` - Runs the app in development mode.
- `npm test` - Launches the test runner.
- `npm run build` - Builds the app for production.
- `npm run eject` - Exposes hidden configuration files (use with caution).

## State Management

The app uses **Redux** to manage the global state for the shopping cart. The cart state includes:

- `items` - List of books added to the cart.
- `totalItems` - Total count of items in the cart.
- `totalPrice` - Total price of all items in the cart.

### Example Redux Actions

- **ADD_TO_CART**: Adds a book to the cart.
- **REMOVE_FROM_CART**: Removes a book from the cart.
- **UPDATE_QUANTITY**: Adjusts the quantity of a book in the cart.

## Deployment

To deploy the app, use platforms like **Vercel** or **Netlify** for a seamless deployment experience:

1. Build the app:

   ```bash
   npm run build
   ```

2. Deploy the `build` folder to your preferred hosting service.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for review.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

