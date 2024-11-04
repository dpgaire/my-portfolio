const blogData = [
  {
    id: 1,
    title: "How the Web Works for Developers",
    author: "Durga Gairhe",
    authorImage: "/images/durga.png", // Author image
    date: new Date("2020-01-20"),
    category: "Web Development",
    image: "/images/blog/h-w-w.png",
    metaDescription: `This blog provides a clear and simple explanation of how the web works for developers, breaking down the main components and how they interact to create functional websites. Here’s a closer look at frontend, backend, and database with real-life examples.`,
    description: `<div>The Web functions as a bridge between users and the information they need. For developers, building websites and applications involves three core parts: <b>Frontend&nbsp;(Client-Side), Backend&nbsp;(Server-side), </b>and <b>Database. </b>Each part plays a unique role, and together they create a seamless web experience. Let's look at each part with examples.&nbsp;</div><div><ol><li><b>Frontend&nbsp;(Client-Side)</b><br>The frontend is what user see and interact with on a website. It includes the visual parts like text, images, buttons, forms, and any content that users can click or type into. Think of it as the "face" of the website.<br><br><b>Example: </b>Imagine a social media profile page. The front-end includes the profile picture, the 'Like' button, comments, and anything users see and use. Developers build this layer using HTML&nbsp;(for structure), CSS&nbsp;(for design), and JavaScript&nbsp;(for interaction like&nbsp; clicking buttons or updating content without refreshing the page).<br><br></li><li><b>Backend (Server-Side)</b>&nbsp;&nbsp;<br>The backend is like the 'brain' behind the scenes. When users take actions on the frontend, such as clicking 'submit' on a form, backend receives these actions, processes them, and decides what to do next.&nbsp;<br><br><b>Example: </b>On a social media site, when a user clicks 'Post' to share a new status, the backend takes this information and saves it. It may also notify the user's followers. Programming language like Python, Ruby, and Node.js are the popular choices for backend development. The backend handles things like user login, checking permissions, and other business logic.&nbsp;&nbsp;<br><br></li><li><b>Database&nbsp;</b><br>The database is where all the information is stored. Think of it as a digital filing cabinet where everything the user shares is saved and organized. When the backend needs to retrieve or save information, it talks to the database.<br><br><b>Example: </b>When users log in, the backend checks the database to see if the user's email and password match. Similarly, when a users views their profiles, the backend retrieves their posts, pictures, and comments from the database and sends them to the frontend for display. Common databases include MySQL, PostgreSQL, and MongoDB.&nbsp;<br><br><b>How It All Works Together<br></b>Here's how these three parts connect:<br><br><b>User Action&nbsp;(Request):</b> A user enters a UTL&nbsp;(like www.example.com) or click a button. This action sends a request, processes it, and,&nbsp; if needed, retrieves data from the database.<br><b><br>Processing: </b>The backend receives that request, processes it, and, if needed, retrieves data from the database.<br><br><b>Response</b>: Once the backend gathers the necessary information, it sends the response back to the frontend, where it's displayed for the user.<br><br><b>Example</b>: Imagine an online store. A user clicks 'Add to Cart ' on the product,&nbsp;<br>This action:<br><br>Sends a request to the backend.<br>The backend then updates the user's cart in the database.<br>The updated cart information is sent back to the frontend and displayed in the real-tile for the user.<br><br>This process happens within seconds, making the web feel fast and responsive. For developers, understanding how these parts work together helps create websites that are user-friendly, efficient and scalable.&nbsp;&nbsp;<br>&nbsp; &nbsp;&nbsp;&nbsp;<br><br>&nbsp;&nbsp;</li></ol></div><div><br></div>`,
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    author: "Durga Gairhe",
    authorImage: "/images/durga.png", // Author image
    date: new Date("2020-01-20"),
    category: "Web Development",
    image: "/images/blog/css-grid-vs-flexbox.png",
    metaDescription: `This blog explores the differences between CSS Grid and Flexbox, helping developers understand when to use each layout system for optimal web design.`,
    description: `
    <div>In the world of web design, understanding layout techniques is crucial for creating visually appealing and functional websites. Two of the most powerful CSS layout systems available are <b>CSS Grid</b> and <b>Flexbox</b>. Both offer unique capabilities and serve different purposes in responsive web design.</div>
    <div><ol>
      <li><b>CSS Grid</b><br>
      CSS Grid is a two-dimensional layout system that allows developers to create complex layouts on both the rows and columns of a webpage. It provides a grid-based approach that enables precise control over the positioning and size of elements.<br><br>
      <b>Example:</b> Imagine designing a magazine-style layout where you need images, text, and other components to occupy specific areas of the page. CSS Grid makes it easy to define these areas with grid templates, allowing for creative freedom in design.</li>
      <li><b>Flexbox</b><br>
      Flexbox, or the Flexible Box Layout, is a one-dimensional layout system primarily designed for arranging items in either a row or a column. It excels at distributing space and aligning items within a container, making it ideal for simpler layouts and components like navigation bars or form elements.<br><br>
      <b>Example:</b> Think of a navigation menu where items need to be spaced evenly across the width of the container. Flexbox allows you to easily achieve this alignment, adjusting the items dynamically based on screen size.</li>
    </ol></div>
    <div><b>When to Use CSS Grid vs. Flexbox</b><br>
    Understanding when to use each layout system is key to effective web design. For more complex, two-dimensional layouts, CSS Grid is the best choice. For simpler, one-dimensional arrangements, Flexbox is often more suitable. Many projects benefit from using both systems in tandem, leveraging the strengths of each to create responsive designs that adapt beautifully to various screen sizes.</div>
    <div>In conclusion, both CSS Grid and Flexbox are essential tools in a web developer's toolkit. By mastering these layout techniques, you can create sophisticated and responsive web designs that enhance the user experience.</div>
  `,
  },
];

export { blogData };
