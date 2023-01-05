<a name="readme-top"></a>

<!-- HEADER -->
<h1 align="center">FE Take Home Challenge: NY Times News Reader</h1>

<h3 align="center">A news reader app that pulls articles from the NY Time's <a href="https://developer.nytimes.com/docs/top-stories-product/1/overview">Top Stories API</a>.</h3>

<h4 align="center"><a href="/"><strong>Deploy Link</strong></a> | <a href="https://github.com/vfields/fe-take-home"><strong>Explore The Docs »</strong></a></h4>

<p></p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#setup">Setup</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li>
        <a href="#features">Features</a>
        <ul>
            <li><a href="#reflections">Reflections</a>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project
This project recreates a take home challenge experience for front end developers and was completed in less than 6 hours.
<br>

<h3 align="center">Wireframe:</h3>
<p align="center"><img width="500" src="https://user-images.githubusercontent.com/103962335/210887121-22e9c102-e6a0-4a5f-abe4-1d92586ce1e6.png" alt="A wireframe of the NY Times Reader"></p>

<h3 align="center">React Component Architecture:</h3>
<p align="center"><img width="500" src="https://user-images.githubusercontent.com/103962335/210887327-bea4cfdc-7a49-4d28-a48c-27f044c28e84.png" alt="A tree representing the NY Times Reader React component relationships"></p>

<h3 align="center">Detailed Article Display:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/WW9dG2e7eMMc59lyjD/giphy.gif" alt="A preview of a user clicking on more details for an article"></p>

<h3 align="center">User Search:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/wwBepOvRueIaADnC7i/giphy.gif" alt="A preview of a user searching through articles by keyword and author"></p>

<h3 align="center">Responsive Design:</h3>
<p align="center"><img width="500" src="https://media.giphy.com/media/yeT97cMW1nv7VRGo4y/giphy.gif" alt="A preview of the applicaiton's responsive design"></p>

### Built With

![React][React-shield]
![JavaScript][JavaScript-shield]
![CSS][CSS-shield]
![HTML5][HTML-shield]
![NPM][NPM-shield]
![Vercel][Vercel-shield]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
- Clone the repository to your local machine
- `cd` into the repository
- Make sure the necessary dependencies are installed on your local machine (`react-router-dom`)
- Once the necessary dependencies are installed, `cd` back into the root of the repository, and run `npm start`
- Explore and enjoy!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Utilizes React Router to create a multi-page user experience from a single-page application and handle bad URLs
- Features responsive and accessible UX/UI design, displaying to mobile and passing both WAVE and Lighthouse accessibility audits
- Implements user filtering and error handling.

### Reflections
<b>Wins:</b><br>
This was a wonderful opportunity to integrate the many skills learned during Turing under the pressure of a time constraint! 
<p>
<b>Challenges:</b><br>
Error handling was a fun challenge working with this particular API, since any details displayed related to each NY Times article could potentially be unavailable.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<table align="center">
    <tr>
        <td align="center"> Tori Fields: <a href="https://github.com/vfields">GitHub</a> | <a href="https://www.linkedin.com/in/victoria-ashley-fields/">LinkedIn</a></td>
    </tr>
 <td align="center"><img src="https://avatars.githubusercontent.com/u/103962335?v=4" alt="Tori Fields GitHub"
 width="150" height="auto" /></td>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
[TypeScript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[JavaScript-shield]: https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[CSS-shield]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[HTML-shield]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e
[NPM-shield]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
[Vercel-shield]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
