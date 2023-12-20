# Car Rental Website

This project is a web application for managing car rental operations. Firebase is used for authentication, providing login and registration functionalities for both users and admins. The application supports two roles: user and admin.

## Features

### User Features

- **Authentication:** Users can register and log in to the system.
- **Car Listing:** Users can view a list of available cars.
- **Filtering:** Cars can be filtered by category, price, and capacity.
- **Car Details:** Users can view detailed information about a specific car.
- **Car Rental:** Users can rent a car.
- **Car Search:** Users can search cars.

### Admin Features

- **Car Management:** Admins can add, edit, and delete cars.
- **Analytics:** Admins can view analytics regarding the number of car rentals.

## Technologies Used

- **Frontend:** Next.js, Tailwind CSS
- **Authentication:** Firebase Authentication
- **API:** JSON Server with Axios
- **Charting:** Chart.js

## Installation

1. Clone the repository: `git clone https://github.com/your-username/car-rental.git`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Configuration

1. Set up Firebase Authentication and replace the Firebase configuration in the project.
2. Adjust the JSON Server configuration for the API.

## Usage

- Access the application at `http://localhost:3000`.
- Use the navigation to explore available cars, filter them, and view details.
- Log in with admin credentials to access the admin dashboard for car management and analytics.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
