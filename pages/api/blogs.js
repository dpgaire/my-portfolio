
const blogs = [
    {
      title: 'Automating Git Branch Creation and Pushing with a Bash Script',
      description: 'Learn how to automate repetitive GitHub tasks like committing changes, pushing to remote repositories, and creating pull requests using a simple Bash script. Enhance your productivity and focus more on coding with this efficient workflow solution.',
      image: '/images/bash-script.png',
      projectUrl: 'https://-extensioexample.com',
      githubUrl: 'https://github.com/dpgaire/browserns/blob/master/to_do_app/README.md',

    },
    {
      title: 'Simplify Branch Creation with Bash Scripting',
      description: 'In this blog, we will explore streamlining Git branch creation and pushing using a Bash script, helping developers save time and focus on coding.',
      image: '/images/bash-script.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/dpgaire/browserns/blob/master/to_do_app/README.md',

    },
    {
      title: 'Streamlining Development Server Management with Bash',
      description: 'Learn how to simplify the management of development server processes using a Bash script. Automate tasks like listing processes by port and killing them if necessary to streamline your workflow and focus more on coding.',
      image: '/images/bash-script.png', 
      projectUrl: 'https://example.com',
      githubUrl: 'https://github.com/dpgaire/browserns/blob/master/to_do_app/README.md',

    }
  ];
  
  export default (req, res) => {
    if (req.method === 'GET') {
      res.status(200).json({ blogs });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  