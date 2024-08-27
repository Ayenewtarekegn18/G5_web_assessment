Blog Application
Overview
This is a Next.js application that showcases a blog platform. The application is built using Next.js, Redux Toolkit, Tailwind CSS, and TypeScript. It includes features for viewing a list of blogs, searching through them, and viewing individual blog details.

Features
Blog List: Displays a list of blogs with search functionality.
Blog Details: Shows detailed information about a selected blog.
Responsive Design: Optimized for both desktop and mobile views.
State Management: Uses Redux Toolkit for state management.
Technologies Used
Next.js: React framework for server-rendered applications.
Redux Toolkit: For managing global state.
Tailwind CSS: Utility-first CSS framework for styling.
TypeScript: Superset of JavaScript with static typing.
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-repository.git
cd your-repository
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Running the Application
Start the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open your browser and navigate to http://localhost:3000 to view the application.

API Endpoints
Fetch Blogs: GET /api/blogs - Retrieve a list of all blogs.
Fetch Blog by ID: GET /api/blogs/[id] - Retrieve a specific blog by its ID.
State Management
The application uses Redux Toolkit for state management. The BlogSlice manages the state related to blogs, including the list of blogs and the details of a selected blog.

Redux Slice
setBlogs: Sets the list of blogs.
addBlog: Adds a new blog to the list.
setCurrentBlog: Sets the details of the currently selected blog.
Components
Header: Contains navigation links and a responsive sidebar menu.
BlogList: Displays a list of blog cards with search functionality.
BlogCard: Represents a single blog card in the list.
BlogDetail: Displays detailed information about a selected blog.
Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License.

Contact
For any questions or feedback, please contact your-email@example.com.

Feel free to customize the sections based on your project’s specific details and requirements.
