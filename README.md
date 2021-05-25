# SQL Editor

It is a Web app that takes SQL queries as Input and returns the result accordingly.<br>
*Load Time : 0.74sec (when connected to a network connection with speed = 7.9Mbps)

## Here's a link for the editor [link](https://react-sql-editor.netlify.app/)

# Content

<ul>
  <li><a href="#about">About the app</a></li>
  <li><a href="#load">Load Time of the App</a></li>
</ul>

<div id="About">
  <h2>About</h2>
  <h4>Sql Editor</h4>
  <p>As we can see in the picture given below, The app is divided into three main sections: Code Area, Output Area, and Sidebar. Code Area takes input and when Run is pressed the Output area shows the output accordingly. The sidebar shows the available databases and the tables in them. The next section shows the code structure of the app.</p>
  <img src="https://github.com/utkarshkalra/image/blob/main/appscreenshot.png" alt="App">
  <h4>Code Structure</h4>
  <p>following two images shows the code structure for the app. As we can see the app is divided into four components: Title, CodeArea, OutputArea, loading and Sidebar</p>
 
  <img align="center" width="40%" src="https://github.com/utkarshkalra/image/blob/main/codestructure.png" alt="codestructure">
  <img align="center" width="40%" src="https://github.com/utkarshkalra/image/blob/main/codestructure2.png" alt="codestructure">
</div>

<div id="load">
  <h2>Page Load Time</h2>
  I read a lot of articles to learn calculating the Page load time because this was something new to me. In the end, I came up with three possible ways to calculate the page load time.
  <ul>
  <li><a href="#chromedev">Using Chrome Dev Tools (performance)</a></li>
  <li><a href="#reactdev">using React Developer Tool extenion (profiler)</a></li>
  <li><a href="#pageloadextension">Page load time (chrome extension)</a></li>
</ul>
  After studying all three methods I used all them to get an average of page load time of the App.
  
  <div id ="chromedev"> 
    <h4>Chrome Developer Tool</h4>
    <p>In chrome dev Tools there is a performance tab which is used to test the performance of the App.
    The summary Output is shown below.</p>
  <img src="https://github.com/utkarshkalra/image/blob/main/chromdevtool.png" alt="devtools">
  <img src="https://github.com/utkarshkalra/image/blob/main/chromedevtool2.png" alt="devtools">
  </div>
  <div id ="reactdev">
    <h4>React Developer tools</h4>
    <p>It worked quite similarly as the previous one. Although I used it to check which react component is taking long to render and I found out that at first when the App loads the AppProvider is taking the longest to render and while using the App Table component is the one that takes quite long as compared to others.</p>
    <img src="https://github.com/utkarshkalra/image/blob/main/profiler1.png" alt="profiler">
  <img src="https://github.com/utkarshkalra/image/blob/main/profiler.png" alt="profiler">
  </div>
  <div id ="pageloadextension">
    <h4>Page load Extension </h4>
    <p>There is an extension available for calculating page load time of the app.<a href="https://chrome.google.com/webstore/detail/page-load-time/fploionmjgeclbkemipmkogoaohcdbig">link</a> So I used it and refreshed the page multiple times and noted down the load time </p>
  
  </div>
   
  
</div>

    
</div>
