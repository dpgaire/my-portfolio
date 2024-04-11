// pages/BlogDetailPage.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const BlogDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Define your markdown content
  const markdownContent = `
<h2 class="text-2xl font-semibold mb-4">Steps to Automate GitHub Workflow with Bash Script</h2>

<h3 class="text-lg font-semibold mb-2">Step 1: Set Up the Bash Script</h3>
<div class="relative border rounded-md bg-gray-100 dark:bg-gray-800 p-4 mb-6">
  <button class="absolute top-2 right-2 bg-gray-300 dark:bg-gray-700 px-2 py-1 text-sm rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
    onclick="copyToClipboard('#bash-script-1')">Copy</button>
  <pre id="bash-script-1" class="whitespace-pre-line">#!/bin/bash</pre>
</div>

<h3 class="text-lg font-semibold mb-2">Step 2: Define the Commit and Push Function</h3>
<div class="relative border rounded-md bg-gray-100 dark:bg-gray-800 p-4 mb-6">
  <button class="absolute top-2 right-2 bg-gray-300 dark:bg-gray-700 px-2 py-1 text-sm rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
    onclick="copyToClipboard('#bash-script-2')">Copy</button>
  <pre id="bash-script-2" class="whitespace-pre-line">commit_and_push() {
    read -p "Enter commit message: " commit_message
    git add .
    git commit -m "\$commit_message"
    current_branch=\$(git symbolic-ref --short HEAD)  # Get the current branch
    git push origin "\$current_branch"
    read -p "Do you want to create a pull request? (yes/no): " create_pull_request
    if [ "\$create_pull_request" = "yes" ]; then
        read -p "Enter user or admin for pull request: " mode
        if [ "\$mode" = "admin" ]; then
            pull_request_url='https://github.com/project1'
        else
            pull_request_url='https://github.com/project2'
        fi
        xdg-open "\$pull_request_url"
    fi
}</pre>
</div>

<h3 class="text-lg font-semibold mb-2">Step 3: Execute the Function</h3>
<div class="relative border rounded-md bg-gray-100 dark:bg-gray-800 p-4 mb-6">
  <button class="absolute top-2 right-2 bg-gray-300 dark:bg-gray-700 px-2 py-1 text-sm rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
    onclick="copyToClipboard('#bash-script-3')">Copy</button>
  <pre id="bash-script-3" class="whitespace-pre-line">commit_and_push</pre>
</div>

<h3 class="text-lg font-semibold mb-2">Step 4: Run the Script</h3>
<div class="relative border rounded-md bg-gray-100 dark:bg-gray-800 p-4 mb-6">
  <button class="absolute top-2 right-2 bg-gray-300 dark:bg-gray-700 px-2 py-1 text-sm rounded hover:bg-gray-400 dark:hover:bg-gray-600 focus:outline-none"
    onclick="copyToClipboard('#bash-script-4')">Copy</button>
  <pre id="bash-script-4" class="whitespace-pre-line">chmod +x github_workflow.sh</pre>
</div>

<p class="mb-6">You can now execute the script by typing <code class="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">./github_workflow.sh</code> in your terminal within the directory containing your Git repository.</p>

<h2 class="text-2xl font-semibold mb-4">Conclusion</h2>
<p class="mb-6">With just a few lines of code, we've created a powerful tool to streamline your GitHub workflow. By automating routine tasks, you can boost productivity, reduce errors, and focus more on writing code. Feel free to customize the script further to suit your specific needs, and enjoy the benefits of a more efficient development process.</p>

<p class="mb-6">That's it for this guide! Happy coding and automating!</p>
`;

  // Function to copy code to clipboard
  const copyToClipboard = (id) => {
    const element = document.querySelector(id);
    const range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Code copied to clipboard!');
  };

  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img className="mr-4 w-16 h-16 rounded-full" src="/images/my-profile.png" alt="Jese Leo/s" />
                  <div>
                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Durga Gairhe</a>
                    <p className="text-base text-gray-500 dark:text-gray-400">Software Engineer</p>
                    <p className="text-base text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">Simplifying GitHub Workflow with Bash Scripting</h1>
            </header>
            <p className='pb-4'>
            In today's fast-paced development environment, efficiency is paramount. Streamlining repetitive tasks can save valuable time and minimize errors. One area where this is particularly beneficial is in managing GitHub repositories. In this guide, we'll explore how to simplify your GitHub workflow using a custom Bash script. By automating common tasks such as committing changes, pushing to remote repositories, creating pull requests, and even merging them, you can enhance your productivity and focus more on coding.
            </p>
            <div className="prose lg:prose-xl dark:prose-dark" dangerouslySetInnerHTML={{ __html: markdownContent }} />
            {/* <code>console.log('It works')</code> */}
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogDetailPage;
