# TaskMate

TaskMate is a simple and efficient to-do list web application that helps you manage multiple task lists, edit entries, and store your tasks in browser storage.

## Features

- Create, rename, and delete multiple task lists
- Add, edit, and remove tasks within a list
- Save all lists and tasks using browser local storage
- Checkbox feature to mark tasks as completed
- Edit and delete buttons appear only on hover for a cleaner UI
- Sidebar for easy navigation between task lists

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js (for server deployment)

## Installation (Node.js Server Deployment)

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/TaskMate.git
   ```
2. **Navigate to the project folder:**
   ```sh
   cd TaskMate
   ```
3. **Initialize a Node.js project:**
   ```sh
   npm init -y
   ```
4. **Install dependencies:**
   ```sh
   npm install express cors
   ```
5. **Create a simple Express server:**
   - Create a file `server.js` and add the following content:
     ```js
     const express = require('express');
     const cors = require('cors');
     const app = express();
     const PORT = process.env.PORT || 3000;

     app.use(cors());
     app.use(express.static('public'));

     app.listen(PORT, () => {
         console.log(`Server running on http://localhost:${PORT}`);
     });
     ```
6. **Move your frontend files into a `public` directory.**
7. **Start the server:**
   ```sh
   node server.js
   ```
8. **Access TaskMate in your browser:**
   Open `http://localhost:3000` in your web browser.

## Usage

- Click the **Add List** button to create a new task list.
- Click on a list name in the sidebar to view and manage its tasks.
- Use the **Add Task** button to create new tasks.
- Hover over a task or list to reveal the edit and delete buttons.
- Check off completed tasks using the checkbox.

## Contributing

Feel free to fork this repository and submit pull requests with improvements or new features!

## License

This project is open-source and available under the [MIT License](LICENSE).

