 # Contributing Guidelines 📄

Welcome to our project! We're thrilled to have you contribute. Your efforts, big or small, make a difference. Please ensure that you follow our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions.

<br>

# Need Help with the Basics? 🤔

If you're new to Git and GitHub, no worries! Here are some useful resources:

- [Forking a Repository](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repository](https://help.github.com/en/desktop/contributing-to-projects/creating-an-issue-or-pull-request)
- [How to Create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)
- [Getting Started with Git and GitHub](https://towardsdatascience.com/getting-started-with-git-and-github-6fcd0f2d4ac6)
- [Learn GitHub from Scratch](https://docs.github.com/en/get-started/start-your-journey/git-and-github-learning-resources)

<br>

# Project Structure 📂

```bash
FinVeda/
├── .github/                  # Configuration files for GitHub, like issue templates
├── .vscode/                  # VS Code specific settings and configurations
├── assets/                   # Assets like images, icons, or other resources
├── blogs/                    # Blog content or HTML files for blog posts
├── tools/                    # Utility tools or scripts used in the project
├── about.html                # About page
├── auth.html                 # Authentication or login page
├── blog.html                 # Blog main page
├── careers/
│   ├── careers.css           # CSS specific to the careers page
│   ├── careers.html          # Careers page
│   └── careers.js            # JavaScript for the careers page
├── CODE_OF_CONDUCT.md        # Code of conduct file
├── contact/
│   ├── contact.html          # Contact page
│   └── ContactUs.html        # Duplicate contact page (consider merging)
├── contributors.html         # Page for contributors
├── CONTRIBUTING.md           # Guidelines for contributing to the project
├── faq.html                  # Frequently asked questions page
├── footer.html               # Footer content
├── google/                   # Files related to Google verification or other services
│   ├── google6ffe5ce00f27f0...
│   └── google585d479acf35...
├── index.html                # Main landing page
├── LICENSE                   # Project license file
├── Licensing.html            # Additional licensing information page
├── login/
│   ├── login.html            # Login page
│   ├── loginPage.css         # CSS for the login page
│   └── loginPage.html        # Another login page (consider merging)
├── logo.png                  # Project logo
├── navbar.css                # CSS for the navigation bar
├── navbar.js                 # JavaScript for the navigation bar
├── package-lock.json         # Dependency tree for npm
├── preview.gif               # Preview or demo of the project
├── quiz.html                 # Quiz or interactive section page
├── README.md                 # Project's main README file
└── trends.html               # Trends or analytics page
```

<br>

# First Pull Request ✨

1. **Star this repository**
    Click on the top right corner marked as **Stars** at last.

2. **Fork this repository**
    Click on the top right corner marked as **Fork** at second last.

3. **Clone the forked repository**

```bash
git clone https://github.com/<your-github-username>/FinVeda.git
```
  
4. **Navigate to the project directory**

```bash
cd FinVeda
```

5. **Create a new branch**

```bash
git checkout -b <your_branch_name>
```

6. **To make changes**

```bash
git add .
```

7. **Now to commit**

```bash
git commit -m "add comment according to your changes or addition of features inside this"
```

8. **Push your local commits to the remote repository**

```bash
git push -u origin <your_branch_name>
```

9. **Create a Pull Request**

10. **Congratulations! 🎉 you've made your contribution**

<br>

# Alternatively contribute using GitHub Desktop 🖥️

1. **Open GitHub Desktop:**
   Launch GitHub Desktop and log in to your GitHub account if you haven't already.

2. **Clone the Repository:**
   - If you haven't cloned the repository yet, you can do so by clicking on the "File" menu and selecting "Clone Repository."
   - Choose the repository from the list of repositories on GitHub and clone it to your local machine.

3. **Switch to the Correct Branch:**
   - Ensure you are on the branch that you want to submit a pull request for.
   - If you need to switch branches, you can do so by clicking on the "Current Branch" dropdown menu and selecting the desired branch.

4. **Make Changes:**
   Make your changes to the code or files in the repository using your preferred code editor.

5. **Commit Changes:**
   - In GitHub Desktop, you'll see a list of the files you've changed. Check the box next to each file you want to include in the commit.
   - Enter a summary and description for your changes in the "Summary" and "Description" fields, respectively. Click the "Commit to <branch-name>" button to commit your changes to the local branch.

6. **Push Changes to GitHub:**
   After committing your changes, click the "Push origin" button in the top right corner of GitHub Desktop to push your changes to your forked repository on GitHub.

7. **Create a Pull Request:**
   - Go to the GitHub website and navigate to your fork of the repository.
   - You should see a button to "Compare & pull request" between your fork and the original repository. Click on it.

8. **Review and Submit:**
   - On the pull request page, review your changes and add any additional information, such as a title and description, that you want to include with your pull request.
   - Once you're satisfied, click the "Create pull request" button to submit your pull request.

9. **Wait for Review:**
    Your pull request will now be available for review by the project maintainers. They may provide feedback or ask for changes before merging your pull request into the main branch of the repository.

<br>

# For Help And Support 💬

- Admin :- Ayush Singh
- Contact :- [Email](ayush1337@hotmail.com)

# Good Coding Practices 🧑‍💻

1. **Follow the Project's Code Style**

   - Maintain consistency with the existing code style (indentation, spacing, comments).
   - Use meaningful and descriptive names for variables, functions, and classes.
   - Keep functions short and focused on a single task.
   - Avoid hardcoding values; instead, use constants or configuration files when possible.

2. **Write Clear and Concise Comments**

   - Use comments to explain why you did something, not just what you did.
   - Avoid unnecessary comments that state the obvious.
   - Document complex logic and functions with brief explanations to help others understand your thought -process.

3. **Keep Code DRY (Don't Repeat Yourself)**

   - Avoid duplicating code. Reuse functions, methods, and components whenever possible.
   - If you find yourself copying and pasting code, consider creating a new function or component.

4. **Write Tests**

   - Write unit tests for your functions and components.
   - Ensure your tests cover both expected outcomes and edge cases.
   - Run tests locally before making a pull request to make sure your changes don’t introduce new bugs.

5. **Code Reviews and Feedback**

   - Be open to receiving constructive feedback from other contributors.
   - Conduct code reviews for others and provide meaningful suggestions to improve the code.
   - Always refactor your code based on feedback to meet the project's standards.

<br>

# Pull Request Process 🚀

When submitting a pull request, please adhere to the following:

1. **Self-review your code** before submission. 😀
2. Include a detailed description of the functionality you’ve added or modified.
3. Comment your code, especially in complex sections, to aid understanding.
4. Add relevant screenshots to assist in the review process.
5. Submit your PR using the provided template and hang tight; we'll review it as soon as possible! 🚀

<br>

# Issue Report Process 📌

To report an issue, follow these steps:

1. Navigate to the project's issues section :- [Issues](https://github.com/ayush-that/FinVeda/issues)
2. Provide a clear and concise description of the issue.
3. **Avoid spamming** to claim an issue. Patience is key! 😀
4. Wait until someone looks into your report.
5. Begin working on the issue only after you have been assigned to it. 🚀

<br>

# Thank you for contributing 💗

We truly appreciate your time and effort to help improve our project. Feel free to reach out if you have any questions or need guidance. Happy coding! 🚀

##