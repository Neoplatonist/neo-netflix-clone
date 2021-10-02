  <h3 align="center">Movie Database App project</h3>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#noteable-features">Noteable Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project was a quick one-day build using The Movie Database (TMDB) API. It was an expeditious attempt at recreating Netflix's main desktop UI. While the site is fully responsive, there are many features I would love to add or fix. One of them is the scrolling feature. Currently, you can scroll holding shift and using a mouse wheel. I would prefer to add scroll buttons, but I ran out of time. Also, in the future, I want to add more pages and an authentication system.

## Noteable Features

- Built in one-day
- Scroll movie lists, hold shift and use scroll wheel
- The movies are cached locally in the browser (reloads are quicker)
- React Hooks for state management
- Hand coded CSS (No Frameworks)
- Responsive UI (mobile, tablet, desktop)
- Mobile sliding menu

### Built With

- [React](https://reactjs.org/)
- [Axios](https://www.npmjs.com/package/axios)
- [The Movie Database](https://www.themoviedb.org/)
- [Font Awesome Icons](https://fontawesome.com)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Get a free API Key at [TMDB Key](https://www.themoviedb.org/)
2. Clone the repo
   ```sh
   git clone https://github.com/Neoplatonist/neo-netflix-clone.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a `.env` file and put your [TMDB Key](https://www.themoviedb.org/) there
   ```JS
   REACT_APP_TMDB_API=ENTER_YOUR_API
   ```
