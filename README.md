<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="./src/images/sift-demos.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Sift Demos
</h1>

## 🚀 Quick start

1.  **Clone the site.**

    ```sh
    git clone https://github.com/joshsmith/sift-demos.git
    ```

2.  **Start developing.**

    Navigate into the site’s directory and start it up.

    ```sh
    cd sift-demos/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    The site is now running at `http://localhost:8000`!

    *Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

    Open the `sift-demos` directory in your code editor of choice and edit anything in `src/pages/index.js` (e.g. the `<h1>` tag). Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see (or will need to create) in this project.

    .
    ├── node_modules
    ├── src
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── .npmrc
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

  1.  **`/node_modules`**: This directory contains all of the modules of code that the project depends on (npm packages) are automatically installed.

  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of the site (what you see in the browser) such as the site header or a page template. `src` is a convention for “source code”.

  3.  **`.env`**: This file exports environment variables needed at build time. You won't have this file yet. We'll get to that next.

  4.  **`.env.example`**: This file contains the environment variable names you will need in `.env`. Copy this to `.env` and add your actual data there.

  5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  6.  **`.npmrc`**: This file is needed because this site relies on a FontAwesome Pro subscription, and access to the @fortawesome packages on NPM requires the registry URL and an auth token. This auth token is made available with `.env` locally or on Netlify when deploying.

  7.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

  8.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (none yet). These allow customization/extension of default Gatsby settings affecting the browser.

  9.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about the site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

  10.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (like interacting with Airtable's GraphQL API). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  11.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (none yet). These allow customization of default Gatsby settings affecting server-side rendering.

  12.  **`LICENSE`**: Gatsby is licensed under the MIT license, as is this specific demos site.

  13.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

  14.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

  15.  **`README.md`**: A text file containing useful reference information about your project.

  16.  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm.  This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, start with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to the documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/joshsmith/sift-demos)
