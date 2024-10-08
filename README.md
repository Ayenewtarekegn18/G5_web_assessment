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

Link: https://g5-web-assessment-three.vercel.app/

Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)
npm or yarn
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Ayenewtarekegn18/G5_web_assessment.git
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




Blog List Page -:  ![Screenshot 2024-08-28 175052](https://github.com/user-attachments/assets/54eeb6eb-413a-4cd0-98bf-04cd3486bb9b)

Blog List Page search feature -: ![Screenshot 2024-08-28 175109](https://github.com/user-attachments/assets/3a5e67ca-9b92-4e72-9274-d1dc3eb01db5)

Blog Detail Page part-1 -: ![Screenshot 2024-08-28 181211](https://github.com/user-attachments/assets/39a36013-5d0f-4bfc-9941-b533bd6a663f)

Blog Detail page Part-2 -:  ![Screenshot 2024-08-28 181549](https://github.com/user-attachments/assets/233bbe6a-860c-4272-92d6-03225b771c19)

 
