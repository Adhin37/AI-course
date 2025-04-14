# AI Agent Building Guide

A comprehensive guide for building AI agents using modern tools and frameworks.

## Project Overview

This project provides educational resources, tutorials, and code examples to help developers understand and implement AI agents for specific tasks.  
The content is organized as a set of HTML pages with a shared CSS stylesheet, offering a responsive design, modern UI, and code examples with explanations.

## Getting Started

To get started with building AI agents, follow the guide for setting up a development environment in the "environment-setup.html" page.  
This guide will help you set up your environment and get ready to start building AI agents.

You can view the live version of this guide at: [https://adhin37.github.io/AI-course/](https://adhin37.github.io/AI-course/)

## GitHub Pages Hosting

This project is hosted using GitHub Pages, which allows you to host websites directly from a GitHub repository.  
The live site is automatically updated whenever changes are pushed to the main branch. This provides an easy way to share your documentation with others without needing a separate hosting service.

To set up GitHub Pages for your own project:
1. Go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Select the branch you want to deploy (usually main or master)
4. Choose the folder (/ (root) or /docs)
5. Click Save

Your site will be available at `https://[username].github.io/[repository-name]/`

## Project Structure

The project is organized as follows:

- `docs/`: Contains all HTML and CSS files for the documentation
  - `index.html`: Main landing page
  - `introduction.html`: Introduction to AI agents
  - `environment-setup.html`: Guide for setting up a development environment
  - `first-agent.html`: Tutorial for building your first AI agent
  - `frameworks.html`: Overview of AI agent frameworks
  - `code-examples.html`: Code examples for common agent patterns
  - `advanced-features.html`: Advanced features for AI agents including:
    - Memory systems
    - Chain-of-thought reasoning
    - Tool integration
    - Retrieval-augmented generation (RAG)
    - Multi-agent systems
    - Performance optimization
  - `style.css`: Shared CSS stylesheet for all pages
  - `img/`: Directory containing images used throughout the documentation
  - `js/`: JavaScript files for interactive elements
  - `tutorials/`: Additional tutorial content
  - `examples/`: Code examples and sample projects
  - `resources/`: Additional resources and reference materials
- `.github/`: GitHub-specific files
  - `workflows/`: GitHub Actions workflow configurations
    - `deploy.yml`: Workflow for automating deployment to GitHub Pages
    - `tests.yml`: Workflow for running automated tests
  - `ISSUE_TEMPLATE/`: Templates for creating new issues
  - `PULL_REQUEST_TEMPLATE.md`: Template for pull requests

## Features

- **Comprehensive Learning Path**: From basic concepts to advanced techniques
- **Code Examples**: Practical, ready-to-use code snippets
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Modern UI**: Clean, intuitive interface with syntax highlighting for code
- **Automated Deployment**: CI/CD pipeline for seamless updates

## CSS Structure

The project uses a single consolidated CSS file (`style.css`) with the following key components:

- **Color Variables**: Consistent color scheme throughout the site
- **Layout Components**: Flexible containers, grids, and responsive elements
- **Interactive Elements**: Buttons, tabs, and navigation components
- **Code Display**: Styled code blocks with proper formatting
- **Responsive Design**: Media queries for different screen sizes

### CSS Variables

```css
:root {
    --primary: #4F46E5;      /* Primary brand color (indigo) */
    --primary-dark: #4338CA; /* Darker shade of primary */
    --secondary: #10B981;    /* Secondary accent color (emerald) */
    --dark: #1F2937;         /* Dark text color */
    --light: #F9FAFB;        /* Light background color */
    --gray: #6B7280;         /* Gray text color */
    --light-gray: #E5E7EB;   /* Light gray for borders */
    --code-bg: #2D3748;      /* Background for code blocks */
    --code-text: #E2E8F0;    /* Text color for code */
}
```

## Contributing

Contributions to improve the documentation or add new examples are welcome. Please feel free to submit pull requests or open issues to suggest improvements.

## License

This project is licensed under the Apache 2.0 License - a permissive license that allows you to freely use, modify, distribute, and sell your software based on this project, provided you include the required notices.  
This license also provides an express grant of patent rights from contributors.