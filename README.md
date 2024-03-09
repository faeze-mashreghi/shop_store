# Shop App

## Description

Task:

● Create a web application that displays three columns: products, users, and
selected products.

● All columns should be searchable.

● Clicking on a product should add it to the third column.

● Clicking on a selected product in the third column should remove it from the
column.

● The products column should initially display 10 products, and the remaining
products should be displayed when the user scrolls to the bottom of the page.

● Clicking on a user in the users column should redirect to the user's details page.

● The application should be built using Next.js, TypeScript, Tailwind CSS, and
Zustand (or Redux Toolkit) for state management.


## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/faeze-mashreghi/shop_store.git
```

## Navigate to the project directory:

```cd shop_store```

## Install dependencies:

```npm install```

## Development
To start the development server:

```npm run dev```

## Technologies Used

Next.js: A React framework for building server-side rendered and statically generated applications.

React: A JavaScript library for building user interfaces.

Redux Toolkit: A toolset for efficient Redux development, providing utilities to simplify common Redux patterns.

Tailwind CSS: A utility-first CSS framework for building custom designs quickly.

TypeScript: A statically typed superset of JavaScript that adds optional static typing.


## Folder Structure
```app/: Contains Next.js pages for routing and also it hande error and loading.```

```components/: Contains simple and basic react components.```

```containers/: Each component in the container is parallel to each page we have. Within the containers, there are folders named '_component' which contain logical components to handle logic.```

```features/: Contains Redux logic including actions, reducers, and store configuration.```

```shared/: Contains types and routs which are global in project .```

```public/: Contains static assets.```

```service/: Contains API methods```

