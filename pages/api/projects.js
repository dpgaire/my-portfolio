
const projects = [
    {
      title: 'To do App',
      description: 'This is a simple Chrome extension for managing your to-do list. It allows you to add, remove, and mark tasks as completed directly from your browser.',
      image: '/images/background.png',
      video:'/video/todo_app.mp4',
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/dpgaire/browser-extensions/to_do_app',
    },
    {
      title: 'Note Saver',
      description: 'The Note Saver Chrome Extension simplifies saving text snippets from web pages directly to your notes. With seamless browser integration, it streamlines the process of collecting and organizing information on the go.',
      image: '/images/background.png', 
      video:'/video/notes-f.mp4',
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/dpgaire/browser-extensions/notes',
    },
    {
      title: 'Image Gallery',
      description: 'An image gallery Google Chrome extension that allows you to easily save images from your browser with a simple click.',
      image: '/images/background.png', 
      video:'/video/image-gallery.mp4',
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/dpgaire/browser-extensions',
    }
  ];
  
  export default (req, res) => {
    if (req.method === 'GET') {
      res.status(200).json({ projects });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  