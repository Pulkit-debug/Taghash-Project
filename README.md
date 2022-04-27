# Taghash-Project

<h2 align="center">Taghash Project</h2>

<h4>
What this Project Contains.
</h4>

<ol>
<h5>
Tech Stack
</h5>
<ul>
	<h6>FrontEnd.</h6>
	<p>For the FrontEnd Part this project uses Html, CSS, Javascript and ejs template engine</p>
	<h6>BackEnd.</h6>
	<p>In the Backend this project uses Node.js and For DataBase MongoDb is used.</p>
</ul>
  
  <h4>Brief Explanation of Project.</h4>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;Folder are split into MVC(Models, Views and Controllers) Structure which contains the Schema, web Page files that we see and the core logic part.</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong><a href="https://expressjs.com/">Express.js</a></strong> is used to start up the server</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong><a href="https://expressjs.com/en/guide/routing.html">Express Router</a></strong> is used to route between all different pages.</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;All Data collected from FORM is stored in <strong><a href="https://www.mongodb.com/docs/">MongoDB</a></strong> Database with the help of <strong><a href="https://mongoosejs.com/docs/guide.html">Mongoose Schema</a></strong></p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;This data is later fetched and displyed.</p>
  
  <h4>
    A basic polling system
  </h4>  
  
  <ul>
    <li>HomePage: Poll Submission</li>
    <ul>
      <li>Home page accepts a name, a choice(whether the user wants to poll or not) and a time of casting(like when it wants to do it.</li>
    </ul>
  </ul>
  
  
  <ul>
    <li>All Data: Show all records./li>
    <ul>
      <li>This page shows all the records that have been submitted till now.</li>
    </ul>
  </ul>
  
  <ul>
    <li>Popup Window/li>
    <ul>
      <li>This is a Popwindow which appears after submitting a resopnse on the Home page.</li>
    </ul>
  </ul>
  
  
  <h4>Running this project</h4>
  <ol type="I">
    <li><h5>First</h5> Make sure Node, MongoDb is installed on the System.</li>
    <p style="text-decoration: underline;"><Strong>NOTE:</strong></p> <p>Node version used is: <strong>v14.17.4</strong> and npm version used is: <strong>v6.14.14</strong></p>
    <li>Do git clone this repository or Download as a zip or fork the repository.</li>
    <li>Open the project folder in a code editor like VScode</li>
    <li>Open up a new terminal and type in ``` npm i ``` it will download all the dependencies required for this project.
      All the dependencies used are present in <strong>Package.json</strong>
    </li>    
    <li>After installation just run  ``` npm start ``` on the terminal.</li>
    <li>It should display <h6>Server is up and running on 5000</h6>
      <h6>Connected to Database :: MongoDB</h6>
    </li>
    <li>Now we are good to go! just open up the browser and hit ``` localhost:5000 ```</li>
    <li>That's it!!</li>
  </ol>
  
