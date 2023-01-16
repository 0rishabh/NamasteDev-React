Que:- What is Emmet?
Ans:- Emmet is a code editor plugin that allows us to write HTML & CSS faster. By default, it is available in th Visual Studio Code.

Que:- Difference between a Library and Framework?
Ans:- A library is a collection of packages that perform specific operations whereas a framework contains basic flow and architecture of an application. The major difference between them is the complexity. Libraries contains a number of methods that a developer can just call whenever they write code. React.js is library and Angular.js is framework. The framework provides the flow of a software application and tells the developer what it needs and calls the code provided by the developer as required. If a library is used, the application calls the code from the library.

Que:- What is CDN? Why do we use it?
Ans:- A Content Delivery Network (CDN) is a system of distributed servers that deliver web content, such as images, JavaScriptfiles, and CSS stylesheets, as well as dynamic content, such as HTML pages and APIs from a server that is close to the user, CDNs can reduce the latency and improve the performance of website and web application.

Que:- Why is React known as React?
Ans:- React is JavaScript library for building interactive user interfaces. It is an open-source frontend library developed and maintained by Facebook. In the MVC architecture, it is responsible for the view layer of our application i.e rendering our user interface and updating the UI whenever the user reacts or changes the view.

Que:- What is crossorigin in script tag?
Ans:- The purpose of crossorigin attribute is used to share the resoucres from one domain to another domain. Basically, it is used to handle CORS request. It is used to handle the CORS request that check wethere it is safe to allow for sharing the resources from other domains. The resources may include audios, videos, images, links, or external scripts that specifies wethere to support a cross-origin request or not.
Example:-

<script crossorigin="anonymous|use-credentials">
    
Que:- What is difference between React and ReactDOM?
Ans:- As React creates a visual representation of our UI. With the help of ReactDOM library we can perform DOM manipulation based on the Virtual DOM. ReactDOM we can write React for native application.

Que:- What is difference between react.development.js and react.production.js files via CDN?
Ans:- The Development build is used - as the name suggest - for development reason. You have Source Maps, debugging and often times hot reloading ability in those builds.
The Production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

Que:- What is async and defer attributes?
Ans:- async and defer are boolean attributes which are use along with script tag to load the external scripts effeciently in our webpage.
defer - A script that will be downloaded in parallel to parsing the page, and executed after the page has finished parsing.
Syntax - <script src="demo.js" defer></script>

async - A script that will be downloaded in parallel to parsing the page, and executed as soon as it is possible.

<script src="demo.js" async></script>

Que:- Can we create multiple roots in our app?
Ans:- According to React documentation, it's perfectly fine to use multiple roots to render compenent trees, and in fact, it's the way Facebook works with it. For more deetails read article given below -
https://medium.com/geekculture/managing-multiple-react-roots-using-mutationobserver-93d35f070d54#:~:text=According%20to%20React%20documentation%2C%20it's,way%20Facebook%20works%20with%20it.

Que:- What is React element?
Ans:- React Element - It is the basic building block in Ract application, It is an Object representation of virtual DOM node. React Element contains both type and property. It may contain other elements in its props.

Que:- What is render function?
Ans:- THe ReactDOM.render() function takes two arguments, HTMl code and HTML element.
The purpose of the function is to display the specified HTML code inside the HTML element.
