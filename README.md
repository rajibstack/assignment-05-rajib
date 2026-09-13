DevStack
A responsive portfolio web application designed for developers to explore, compare, and build their ideal technology stack with smooth UI interactions and real-time state management.

🛠️ Technologies I Used
  * React & TypeScript
  * Vite for install React in my local computer
  * Tailwind CSS (v4) for inline style
  * React Toastify - Showing activity for 'Add to Stack' and Remove
  * Lucide Icons for hamburger menu icon

✨ Key Features
Interactive Technology: Browse frontend, backend, database, and tooling options dynamically fetched with status loading spinners.

Dynamic Stack Management: Add technologies to your custom stack, showing notifications.

Sticky Sidebar & Responsive Layout: Clean, aligned navigation and responsive multi-column layouts optimized for both desktop and mobile views.

💡 React Q&A
What is JSX, and why is it used in React?
JSX is a special syntax that lets you write HTML code directly inside JavaScript files. It is used because it makes writing and reading UI components much easier and more visual.

What is the difference between props and state?
Props are data passed down from a parent component to a child component and cannot be changed by the child. State is data managed inside a component that can change when the user interacts with the app.

What does the useState hook do, and where did you use it in this project?
The useState hook lets components remember and update data. In this project, it was used to keep track of the technologies added to your stack, handle loading states, and open or close the mobile menu.

What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect lets you run code when a component loads on the screen. It was needed to fetch or load the local JSON technology data when the component first appears.

Why does every item in a .map() list need a unique key prop?
Unique keys help React track which items change, are added, or are removed. This helps the app run faster and prevents rendering bugs.

What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different things on the screen based on a condition (like showing a message when the stack is empty).
Example: {stack.length === 0 ? <p>Your stack is empty.</p> : <StackList />}
