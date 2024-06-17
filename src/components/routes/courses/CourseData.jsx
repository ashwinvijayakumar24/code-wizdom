import python_img from '../../../assets/images/course_logos/python.png';
import java_img from '../../../assets/images/course_logos/java.png';
import htmlcss_img from '../../../assets/images/course_logos/htmlcss.png';
import js_img from '../../../assets/images/course_logos/js.png';
import react_img from '../../../assets/images/course_logos/react.png';
import sql_img from '../../../assets/images/course_logos/sql.png';

const courses = [
    { 
        id: 1,
        name: 'Python', 
        description: 'Learn the fundamentals of Python, including data types, control structures, functions, and object-oriented programming, to build versatile and efficient applications.', 
        link: '/python',
        image: python_img,
        about: 'Python is a versatile, high-level programming language known for its simplicity and readability, making it ideal for beginners and experts alike. It is widely used in various fields such as web development, data science, artificial intelligence, machine learning, and automation. Learning Python can open doors to numerous career opportunities in tech, as it is the backbone of many popular frameworks and libraries like Django, Flask, TensorFlow, and Pandas. Its extensive community support and comprehensive documentation make it an excellent choice for anyone looking to delve into computer science.',
        syllabus:[
            { unitNum: 1, unit: "Introduction to Python" },
            { unitNum: 2, unit: "Variables and Data Types" },
            { unitNum: 3, unit: "Control Structures" },
            { unitNum: 4, unit: "Loops" },
            { unitNum: 5, unit: "Functions" },
            { unitNum: 6, unit: "Data Structures - Lists and Tuples" },
            { unitNum: 7, unit: "Data Structures - Dictionaries and Sets" },
            { unitNum: 8, unit: "Working with Files" },
            { unitNum: 9, unit: "Object-Oriented Programming" },
            { unitNum: 10, unit: "Modules and Packages" }
        ]
    },
    { 
        id: 2,
        name: 'Java', 
        description: 'Master the basics of Java, including its object-oriented principles, from variables and loops to inheritance and polymorphism, to develop robust, cross-platform applications.', 
        link: '/java',
        image: java_img,
        about: 'Java is a robust, object-oriented programming language that is platform-independent, meaning it can run on any device with a Java Virtual Machine (JVM). It is extensively used in building enterprise-level applications, Android app development, and large-scale systems. Java\'s strong memory management, security features, and performance efficiency make it a staple in the software industry. Mastering Java can significantly enhance your problem-solving skills and is highly beneficial for a career in software development and engineering.',
        syllabus:[
            { unitNum: 1, unit: "Introduction to Java" },
            { unitNum: 2, unit: "Variables and Data Types" },
            { unitNum: 3, unit: "Control Structures" },
            { unitNum: 4, unit: "Loops" },
            { unitNum: 5, unit: "Methods" },
            { unitNum: 6, unit: "Arrays and ArrayLists" },
            { unitNum: 7, unit: "Object-Oriented Programming - Classes and Objects" },
            { unitNum: 8, unit: "Object-Oriented Programming - Inheritance and Polymorphism" },
            { unitNum: 9, unit: "Exception Handling" },
            { unitNum: 10, unit: "Java Collections Framework" }
        ]
    },
    { 
        id: 3,
        name: 'HTML & CSS', 
        description: 'Understand the core principles of HTML and CSS to create visually appealing and responsive web pages with modern design techniques.', 
        link: '/html-css',
        image: htmlcss_img,
        about: 'HTML and CSS are the foundational technologies for creating and designing web pages. HTML provides the structure of a webpage, while CSS is used to style and layout the content. Learning HTML and CSS is essential for anyone interested in web development, as they form the basis of front-end development. Proficiency in these languages allows you to create visually appealing and responsive websites, making them a crucial skill set for aspiring web designers and developers.',
        syllabus: [
            { unitNum: 1, unit: "Introduction to HTML" },
            { unitNum: 2, unit: "Basic HTML Elements" },
            { unitNum: 3, unit: "Introduction to CSS" },
            { unitNum: 4, unit: "CSS Styling and Selectors" },
            { unitNum: 5, unit: "Box Model and Layout" },
            { unitNum: 6, unit: "Responsive Design with Media Queries" },
            { unitNum: 7, unit: "Flexbox and Grid Layout" },
            { unitNum: 8, unit: "Advanced CSS Techniques" },
            { unitNum: 9, unit: "CSS Frameworks: Tailwind and Bootstrap" },
            { unitNum: 10, unit: "Project: Build a Responsive Website" }
        ]
    },
    { 
        id: 4,
        name: 'JavaScript', 
        description: 'Grasp the fundamentals of JavaScript, including variables, control structures, functions, and DOM manipulation, to create interactive web applications.', 
        link: '/javascript',
        image: js_img,
        about: 'JavaScript is a dynamic, high-level programming language that is essential for creating interactive and responsive web applications. It is used for front-end development to add interactivity to websites, such as form validations, animations, and user interface enhancements. JavaScript is also used in server-side development through environments like Node.js. Learning JavaScript is crucial for anyone pursuing a career in web development, as it enables you to build feature-rich, user-friendly websites and applications.',
        syllabus: [
            { unitNum: 1, unit: "Introduction to JavaScript" },
            { unitNum: 2, unit: "Variables and Data Types" },
            { unitNum: 3, unit: "Control Structures and Loops" },
            { unitNum: 4, unit: "Functions" },
            { unitNum: 5, unit: "Objects and Arrays" },
            { unitNum: 6, unit: "DOM Manipulation" },
            { unitNum: 7, unit: "Events and Event Handling" },
            { unitNum: 8, unit: "Asynchronous JavaScript: Callbacks and Promises" },
            { unitNum: 9, unit: "Error Handling and Debugging" },
            { unitNum: 10, unit: "Project: Build an Interactive Web Application" }
        ]
    },
    { 
        id: 5,
        name: 'ReactJS', 
        description: 'Master the core concepts of ReactJS, the most popular JS framework, including components, state management, and hooks, to build dynamic and efficient user interfaces.', 
        link: '/react',
        image: react_img,
        about: 'ReactJS is a popular JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and develop complex UIs with less code. React\'s component-based architecture and virtual DOM make it highly performant and scalable. Learning ReactJS is beneficial for front-end developers as it is widely used in the industry, powering many modern web applications and offering excellent career prospects.',
        syllabus:[
            { unitNum: 1, unit: "Introduction to React" },
            { unitNum: 2, unit: "JSX and Components" },
            { unitNum: 3, unit: "Props and State" },
            { unitNum: 4, unit: "Event Handling" },
            { unitNum: 5, unit: "Conditional Rendering" },
            { unitNum: 6, unit: "Lists and Keys" },
            { unitNum: 7, unit: "Forms and Controlled Components" },
            { unitNum: 8, unit: "Lifecycle Methods and Hooks" },
            { unitNum: 9, unit: "Context API and State Management" },
            { unitNum: 10, unit: "Project: Build a React Application" }
        ]
    },
    { 
        id: 6,
        name: 'SQL', 
        description: 'Understand the basics of SQL, including database design, querying, and data manipulation, to manage and retrieve data from relational databases effectively.', 
        link: '/sql',
        image: sql_img,
        about: 'SQL (Structured Query Language) is a powerful language used for managing and manipulating relational databases. It is essential for performing tasks such as querying data, updating records, and managing database structures. SQL is used across various domains, including web development, data analysis, and business intelligence, making it a critical skill for anyone working with data. Mastering SQL allows you to efficiently handle large datasets, perform complex queries, and ensure data integrity, which is invaluable in the tech industry.',
        syllabus:[
            { unitNum: 1, unit: "Introduction to SQL and Databases" },
            { unitNum: 2, unit: "Creating and Managing Databases" },
            { unitNum: 3, unit: "Basic SQL Queries" },
            { unitNum: 4, unit: "Filtering and Sorting Data" },
            { unitNum: 5, unit: "Joins and Relationships" },
            { unitNum: 6, unit: "Aggregations and Grouping" },
            { unitNum: 7, unit: "Subqueries and Nested Queries" },
            { unitNum: 8, unit: "Data Manipulation: Insert, Update, Delete" },
            { unitNum: 9, unit: "Database Design and Normalization" },
            { unitNum: 10, unit: "Project: Build and Query a Database" }
        ]
    },
  ];


  export default courses