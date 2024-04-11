# Simplifying GitHub Workflow with Bash Scripting

In today's fast-paced development environment, efficiency is paramount. Streamlining repetitive tasks can save valuable time and minimize errors. One area where this is particularly beneficial is in managing GitHub repositories. In this guide, we'll explore how to simplify your GitHub workflow using a custom Bash script. By automating common tasks such as committing changes, pushing to remote repositories, creating pull requests, and even merging them, you can enhance your productivity and focus more on coding.

## Steps to Automate GitHub Workflow with Bash Script

### Step 1: Set Up the Bash Script
Start by creating a new Bash script file, for instance, `github_workflow.sh`, and add the following shebang line at the beginning:

```bash
#!/bin/bash
```

### Step 2: Define the Commit and Push Function

The core functionality of our script revolves around committing changes, pushing them to the remote repository, and optionally creating a pull request. Define a function named `commit_and_push()` to encapsulate these tasks. Here's how you can implement it:

```bash
commit_and_push() {
    read -p "Enter commit message: " commit_message
    git add .
    git commit -m "$commit_message"
    current_branch=$(git symbolic-ref --short HEAD)  # Get the current branch
    git push origin "$current_branch"
    read -p "Do you want to create a pull request? (yes/no): " create_pull_request
    if [ "$create_pull_request" = "yes" ]; then
        read -p "Enter user or admin for pull request: " mode
        if [ "$mode" = "admin" ]; then
            pull_request_url='https://github.com/project1'
        else
            pull_request_url='https://github.com/project2'
        fi
        xdg-open "$pull_request_url"
    fi
}
```

### Step 3: Execute the Function
Invoke the `commit_and_push()` function to trigger the automation process. This can be done by adding the following line at the end of your script:

```bash
commit_and_push
```

### Step 4: Run the Script
Save the changes to your script file and make it executable by running:

```bash
chmod +x github_workflow.sh
```
You can now execute the script by typing `./github_workflow.sh` in your terminal within the directory containing your Git repository.

## Conclusion

With just a few lines of code, we've created a powerful tool to streamline your GitHub workflow. By automating routine tasks, you can boost productivity, reduce errors, and focus more on writing code. Feel free to customize the script further to suit your specific needs, and enjoy the benefits of a more efficient development process.

That's it for this guide! Happy coding and automating!


