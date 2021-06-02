### XT Shopping Cart Assignment

This is the base folder for the shopping cart exercise. You will have all the static assets and mock server responses available in this repo.


### 🗃 &nbsp; Built with

[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm)
[![react](https://img.shields.io/badge/frontend-react-61dafb?style=flat&logo=React)](https://reactjs.org/)
[![sass](https://img.shields.io/badge/styling-Sass-%23DB7093?style=flat&logo=sass)](https://sass-lang.com/)
[![icons](https://img.shields.io/badge/icons-react--icons-5BFFCB?style=flat&logo=React)](https://react-icons.github.io/react-icons/)


### 🛠 &nbsp; Prerequisites

- [node](https://nodejs.org/en/) >= v12.16.1

- [npm](https://www.npmjs.com/get-npm) >= 7.0.15


### 🗂 &nbsp; Folder Structure

<img src="/static/images/folder-tree.png" alt="Folder Structure" height='70' width="70"/>

> Structuring our application is crucial for the readability, scalability and flexibility of our application code. 

[Atomic Design Pattern](https://atomicdesign.bradfrost.com/chapter-2/) developed by Brad Frost and Dave Olsen, is a methodology for crafting design systems with five fundamental building blocks, which, when combined, promote consistency, modularity, and scalability. It maps well with React's Component based architecture.

![Atomic Design Pattern](/static/images/Atomic%20Design%20Pattern.jpeg)

- **Atoms:** Basic building blocks of matter, such as a button, input or a form label. They’re not useful on their own.

- **Molecules:** Grouping atoms together, such as combining a button, input and form label to build functionality.

- **Organisms:** Combining molecules together to form organisms that make up a distinct section of an interface (i.e. navigation bar)

- **Templates:** Consisting mostly of groups of organisms to form a page — where clients can see a final design in place.

- **Pages:** An ecosystem that views different template renders. We can create multiple ecosystems into a single environment.


### ⚙️ &nbsp; Installing and Getting Started

Clone this repo and run following command for starting the mock server:

```
npm install
```

- To start the Server

```
npm run server
```

- To start the Client

```
npm run dev
```

- To format

```
npm run format
```
