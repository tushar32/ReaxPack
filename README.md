<p>Rexpack is a minimal Express, Webpack, & React boilerplate app that serves an image, adds some styling and some basic functionality, just to show everything working at the most basic level. This project can then be used as a template for other more complex apps.
</p>

These are the main technologies we want to employ:
    <ul>
    <li> Express — server </li>
    <li>Webpack 4 — bundling</li>
    <li>Jest — testing</li>
    <li>Babel — ES6+ transpilation</li>
    <li>ESlint — Linting</li>
    <li>Webpack Dev Middleware — Bundle code in memory instead of in a file</li>
    <li>Webpack Hot Middleware — Enables Hot Module Reloading (HMR)</li>
    <li>UglifyJS — uglifies code</li>
    <li>mini-css-extract-plugin — minifies CSS</li>

 <p><b>
 Webpack Dev Middleware (WDM) watches your source files and runs a Webpack build anytime you hit save on a file. All changes are handled in memory, so no files are writted to the disk. Hot Module Reloading is build on top of Webpack Dev Middleware.
    </b></p> 
 <p><b>
    Basically, whenever you save a change to a file, Webpack Dev Middleware creates a new build, and HMR executes the change in the browser without you having to refresh the page manually
    </b></p>
 <p><b>html-loader and html-webpack-plugin to copy our index.html file to the dist directory. This plugin will also insert a script tag in the HTML file that imports the main Javascript file.</b></p>   

<h2>
Installation </h2>

<p>
 npm install
 </p>
 
 <h2>
Create a Development build
 </h2>

<p>
npm run dev

 </p>


 <h2>
 Create a Production build </h2>

<p>
 npm run prod
 </p>
 
 <h2>
 Run a code on local server</h2>

<p>
 npm start
 </p>
 
 
