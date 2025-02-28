# WasteAway

WasteAway is an application designed to help users reduce food waste, which is one of the major environmental issues worldwide. The application assists users in keeping track of the food items in their refrigerator along with their expiration dates. Additionally, WasteAway provides features for creating shopping lists, finding recipes based on available ingredients, and sharing a fridge with others who can contribute to the shopping list.

## Features
- **Food Inventory Tracking:** Keep an organized list of food items with expiration dates.
- **Shopping List Management:** Create and manage shopping lists with ease.
- **Recipe Suggestions:** Get recipe recommendations based on the ingredients available in your fridge.
- **Shared Fridge:** Collaborate with others by sharing your fridge and contributing to shopping lists.
- **REST API Integration:** Securely store and retrieve user data through REST API endpoints.

## Technology Stack
WasteAway is built using the following technologies:
- **Backend:** Spring Boot
- **Frontend:** Vue 3
- **Build Tools:** Maven (for backend), NPM (for frontend)

## Installation & Setup
Follow these steps to run WasteAway locally:

1. Clone the repository to your local machine:
   ```sh
   git clone https://github.com/your-repo/WasteAway.git
   cd WasteAway
   ```

2. Start the backend:
   ```sh
   cd backend
   mvn spring-boot:run
   ```

3. Start the frontend:
   ```sh
   cd frontend
   npm install
   npm run serve
   ```

The application will now be available at `http://localhost:5173`.

## User Registration & Login
To start using WasteAway:
1. Go to `http://localhost:5173/register` and fill out the registration form.
2. After registering, log in at `http://localhost:5173/login`.

## System Requirements
WasteAway has no specific system requirements and should work on most computers and modern web browsers. The project size is approximately **2 GB**, so downloading and building it may take some time.

## License
This project is licensed under the **MIT License**, giving you the freedom to use and modify the code as needed.

## Additional Notes
A `.gitignore` file is included to exclude unnecessary files such as the `node_modules` directory, reducing unnecessary data transfers.

For any contributions or issues, feel free to open a pull request or submit an issue in the repository.

---
**Enjoy using WasteAway and help reduce food waste!**