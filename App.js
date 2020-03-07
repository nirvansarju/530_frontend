import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Carousel,Card,Row,Col,Image,Container,Navbar,Nav } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


document.body.style = 'background: #2c2e2e;';

const ColoredLine = ({ children }) => (
  <hr
      style={{
          color: 'grey',
          backgroundColor: 'grey'
      }}
  />
);

const ExCard = ({children}) => {
  return (
    <Card style={{ backgroundColor:"#232626",width: '18rem' }}>
  <Card.Img variant="top" src="/react.png" />
  <Card.Body>
    <Card.Title style={{color:'#ebebeb'}}>Card Title</Card.Title>
    <Card.Text>
      Sample body
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

  );

}

const DemoCards = ({children}) => {
  return (
  <React.Fragment style={{textAlign:'center'}}>
  <Row> 
    <Col>
    <Card style={{ backgroundColor:"#232626",width: '18rem',textAlign:'center'}}>
    <Card.Img style={{height:250}} variant="top" src="/cabotSquare.jpg" />
    <Card.Body>
      <Card.Title style={{color:'#ebebeb'}}>The Cabot Trail</Card.Title>
      <Card.Text>
        Nova Scotia
      </Card.Text>
      <Button target="_blank" href="https://en.wikipedia.org/wiki/Cabot_Trail" variant="primary">Wikipedia</Button>
    </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ backgroundColor:"#232626",width: '18rem',textAlign:'center' }}>
    <Card.Img style={{height:250}} variant="top" src="/thorSquare.jpg" />
    <Card.Body>
      <Card.Title style={{color:'#ebebeb'}}>Mount Thor</Card.Title>
      <Card.Text>
        Nunavut
      </Card.Text >
      <Button target="_blank" href="https://en.wikipedia.org/wiki/Mount_Thor" variant="primary">Wikipedia</Button>
    </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ backgroundColor:"#232626",width: '18rem',textAlign:'center' }}>
    <Card.Img style={{height:250}} variant="top" src="/banffSquare.jpg" />
    <Card.Body>
      <Card.Title style={{color:'#ebebeb'}}>Banff National Park</Card.Title>
      <Card.Text>
        Alberta
      </Card.Text>
      <Button target="_blank" href="https://en.wikipedia.org/wiki/Banff_National_Park" variant="primary">Wikipedia</Button>
    </Card.Body>
    </Card>
    </Col>
  </Row>
  <br/><br/>
  <Row>
  
  </Row>
  </React.Fragment>
  );

}



const ControlledCarousel = () => {

return (
<Carousel>
  <Carousel.Item>
    {/* Here's the code to add an image to the background:*/}
    <img
      className="d-block w-100"
      src="/hexDark.png"
      alt="First slide"
    />
    {/* Here's the code to add text to the carousel:*/}
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Sample Body</p>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/hexDark.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Sample Body</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}

const DemoCarousel = () => {

  return (
  <Carousel fade='true'>
    <Carousel.Item >
      {/* Here's the code to add an image to the background:*/}
      <img
        
        style={{width:900,height:300}}
        src="/CabotTrail.png"
        alt="First slide"
      />
      {/* Here's the code to add text to the carousel:*/}
      <Carousel.Caption>
        <h3>The Cabot Trail.</h3>
        <p style={{color:'white'}}>Nova Scotia</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        style={{width:900,height:300}}
        src="/Thor.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Mount Thor.</h3>
        <p style={{color:'white'}}>Nunavut</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img
        style={{width:900,height:300}}
        src="/banff.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Banff National Park.</h3>
        <p style={{color:'white'}}>Alberta</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}



const NavBar = ({children}) => {
	return (
	<Navbar bg="dark" variant="dark" expand="lg" fixed="top">
	  <Navbar.Brand style={{color:'#5bd8f9'}} href="/">Django-React</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
	    <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Installation">Installation</Nav.Link>
		    <Nav.Link href="/Tutorial">Tutorial</Nav.Link>
	      <Nav.Link href="/Demo">Demo Page</Nav.Link>
	      <Nav.Link href="/Conclusion">Conclusions</Nav.Link>
	      <Nav.Link href="/Credits">Credits</Nav.Link>

	    </Nav>
	  </Navbar.Collapse>
	</Navbar>
);
};

const NavFoot = ({children}) => {
  return (
  <div style={{backgroundColor:'#232626'}} class='text-center'>
  <br/>
  <Container style={{marginLeft:'30',marginRight:'30'}}>
  <Row> 
    <Col style={{color:'white'}}> 
      <strong>Documentation</strong>
      <br/><br/>
      <a href="https://reactjs.org" 
      target="_blank">ReactJS</a>
      <br/><br/>
      <a href="https://reacttraining.com/react-router/web/guides/quick-start" 
      target="_blank">ReactRouter</a>
      <br/><br/>
      <a href="https://react-bootstrap.github.io/" 
      target="_blank">React-Bootstrap</a>
      <br/><br/>
      <a href="https://www.npmjs.com/package/react-syntax-highlighter"
      target="_blank">React Syntax Highlighter</a>
      <br/><br/>
      <a href="https://docs.djangoproject.com/en/2.2/" 
      target="_blank">Django</a>
    </Col>

    <Col style={{color:'white'}}> 
      <strong>LinkedIn</strong>
      <br/><br/>
      <a href="https://linkedin.com/" 
      target="_blank">Anh Phung</a>
      <br/><br/>
      <a href="https://linkedin.com/in/ke-zhang-758474198" 
      target="_blank">Ke Zhang</a>
      <br/><br/>
      <a href="http://linkedin.com/in/linh-le-a019b5192" 
      target="_blank">Linh Le</a>
      <br/><br/>
      <a href="https://linkedin.com/in/nirvansarju" 
      target="_blank">Nirvan Sarju</a>
    </Col>

    <Col style={{color:'white'}}> 
      <strong>Github</strong>
      <br/><br/>
      <a href="https://github.com/" 
      target="_blank">Anh Phung</a>
      <br/><br/>
      <a href="https://github.com/keke980418" 
      target="_blank">Ke Zhang</a>
      <br/><br/>
      <a href="https://github.com/" 
      target="_blank">Linh Le</a>
      <br/><br/>
      <a href="https://github.com/nirvansarju" 
      target="_blank">Nirvan Sarju</a>
    </Col>
    
  </Row>
  </Container>
  <br/>
  <br/>
  </div>
  );
};




export default function home()
{
  return (
    <React.Fragment>
      <NavBar>
    </NavBar>
    <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/Installation">
          <Installation />
        </Route>
        <Route path="/Tutorial">
          <Tutorial />
        </Route>
        <Route path="/Demo">
          <Demo />
        </Route>
        <Route path="/Conclusion">
          <Conclusion />
        </Route>
        <Route path="/Credits">
          <Credits />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>

  <NavFoot>
      </NavFoot>

  	</React.Fragment>

  );
}

function Home() {
  return (
    <React.Fragment>
    <div style={{backgroundColor:'#232626'}} class='text-center'>
    <Image style={{width:400}} src='django.png' fluid />
    <Image style={{width:75}} src='/plus.png' />
    <Image style={{width:400}} src='/react.png' fluid />		
  </div>
  <div>

  </div>
  <br/>
  <br/>
  <Container>
    <Row> 
    <Col style={{color:'white'}}> 
      <h1 style={{fontSize:'32px'}}>What is Django?</h1>
      <p>Django is a backend web development framework. It is designed to build complex web applications quickly and 
        efficiently. Django seeks to eliminate the repetitive work associated with backend development so that the developer
        can focus on the unique portions of their sites.
        Firefox, Instagram, Pinterest, and Nasa's website all use Django for their backends.
      </p>
      <p>According to <a href="https://insights.stackoverflow.com/survey/2018/#most-loved-dreaded-and-wanted" 
         target="_blank">
         StackOverflow’s 2018 survey</a>, Django is the 6th most popular web development framework.
      </p>
      <p>Django's popularity can be largely attributed to the simple syntax that Python provides. 
         Django continues to be the leading Python-based framework in 
         web development today.
      </p>

      <ColoredLine />

      <h1 style={{fontSize:'32px'}}>Strengths of Django</h1>

      <h3 style={{fontSize:'24px'}}>Simple Syntax</h3>
      <p>Django is written in Python, a high level language, which makes it straightforward to learn and understand
      </p>

      <h3 style={{fontSize:'24px'}}>Fast</h3>
      <p> Django removes unnecessary work for web developers by creating reusable apps. 
      </p>

      <h3 style={{fontSize:'24px'}}>Secure</h3>
      <p>Django has protection against Clickjacking, SQL Injection, Cross-Site Request Forgery
        and Cross-Site Scripting attacks, etc.
      </p>

      <h3 style={{fontSize:'24px'}}>"Batteries Included"</h3>
      <p>Django provides a great number of functionalities and features such as powerful ORM, multi-site support, 
        model/view/control layout, HTTP libraries, default admin section, AJAX support, free API, etc.
      </p>

      <ColoredLine />

      <h1 style={{fontSize:'32px'}}>Weaknesses of Django</h1>
      <h3 style={{fontSize:'24px'}}>Monolithic</h3>
      <p>Django does not leave much room for the developer to be creative with their choice of architecture, structure,
        and design patterns. It tends to be very "heavy-handed" on the user.
      </p>

      <h3 style={{fontSize:'24px'}}>Over-Emphasis on Backwards Compatibility</h3>
      <p>Django's developers have always been committed to maintaining backwards compatiblity in their framework.
        Unfortunately this is making Django bigger and heavier over time, slowing speeds.
      </p>

      <h3 style={{fontSize:'24px'}}>Regex in URL Specification</h3>
      <p>Django's use of Regex for URL specification makes written code larger and sytax complicated. This may turn
        off newer users who are not well-versed in regex.
      </p>
    </Col>

    <Col style={{color:'white',borderLeft:`solid grey 1.5px`}}> 
      <h2 style={{fontSize:'32px'}}>What is React?</h2>
      <p>ReactJS (or React) is a frontend web development framework created by Facebook. It is a JavaScript library for building
        user interfaces. React allows the user to build code "components" which come together to create a UI.
        Facebook, Instagram, Netflix, and the New York Times all use React for their frontends.
      </p>
      <p>According to <a href="https://insights.stackoverflow.com/survey/2018/#most-loved-dreaded-and-wanted" 
      target="_blank">
         StackOverflow’s 2018 survey</a>, React is the 3rd most popular web development framework. 
      </p>
      <p>React has grown fast since it's release in 2013 due to its virtual DOM and plethora of community-made components.
      </p>

      <ColoredLine />

      <h2 style={{fontSize:'32px'}}>Strengths of React</h2>
      <h3 style={{fontSize:'24px'}}>Based on JS</h3>
      <p>React apps are largely written in JavaScript, which is a widely used language among web developers. This makes
        React's syntax easy to read and write.
      </p>

      <h3 style={{fontSize:'24px'}}>Virtual DOM</h3>
      <p>React utilizes a virtual DOM to update changes applied by the developer without affecting the rest of the page.
        This method of "hot reloading" allows for better performance.
      </p>

      <h3 style={{fontSize:'24px'}}>Open Source</h3>
      <p>React is open-source, meaning that anyone can create plugins or components to distribute to other users,
        making implementation of intricate UI components as simple as importing a library.
      </p>

      <ColoredLine /> 

      <h2 style={{fontSize:'32px'}}>Weaknesses of React</h2>
      <h3 style={{fontSize:'24px'}}>High Pace of Development</h3>
      <p>React is changing by the day, and at times it can be overwhelming for developers who use React to keep up with 
        the speed of development.
      </p>

      <h3 style={{fontSize:'24px'}}>JSX - "HTML in my JavaScript!"</h3>
      <p>React employs JSX in order to mix HTML and JavaScript, however the mix can be confusing at times because JSX
        seems to be neither HTML or JavaScript. In many cases JSX syntax is not EITHER JS or HTML,
        it is a mix of both.
      </p>

      <h3 style={{fontSize:'24px'}}>Poor Documentation</h3>
      <p>React's Documentation is sparse and poor. It can be very frustrating at times to solve issues with React due to 
        the lack of official documentation regarding components and JSX.
      </p>
    </Col>
  </Row>
  </Container>
  <br />
  <br />
  </React.Fragment>

  );
}

function Installation() {
  return (
    <React.Fragment>
    <div style={{backgroundColor:'#232626'}} class='text-center'></div>
      <Container>
        <br />
      <strong style={{fontSize:'32px',textAlign:'center',color:'white'}}>We'll start by installing Django.</strong>
      <ColoredLine></ColoredLine>

      <p>First, check if <strong>pip</strong> is installed. It is a package manager necessary to install Django:</p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ pip -v"}
      </SyntaxHighlighter> 

      <p> In your Bash console 
          create a <strong>virtualenv</strong> and choose a version of Python for your environment:
      </p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {'$ mkvirtualenv --python=/usr/bin/python3.4 mysite-virtualenv'}
      </SyntaxHighlighter>  

      <p>Note: If you see a ‘command not found’ error when trying to run mkvirtualenv (when you have an older 
        pythonanywhere account), here is how to fix it:
      </p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ echo '' >> ~/.bashrc && echo 'source virtualenvwrapper.sh' >> ~/.bashrc source virtualenvwrapper.sh"}
      </SyntaxHighlighter>  

      <p>Next, using pip to install Django:</p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ (mysite-virtualenv)$ pip install django"}
      </SyntaxHighlighter> 

      <br />

      <strong style={{fontSize:'32px',textAlign:'center',color:'white'}}>Now for React.</strong>
      <ColoredLine></ColoredLine>

      <p>First, check if <strong>npm</strong> is installed. It is a package manager necessary to install and use React:</p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ npm -v"}
      </SyntaxHighlighter> 

      <p>npm allows us to install <strong>create-react-app</strong>, a command that automatically creates a React app and
       environment:<br/> (Note: you may have to <strong>sudo</strong> this command)
      </p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ npm install -g create-react-app"}
      </SyntaxHighlighter> 

      <p>Navigate to the project directory, we'll call it <strong>django-react-project</strong>:</p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ cd ~/django-react-project"}
      </SyntaxHighlighter> 

      <p>Enter the command <strong>create-react-app</strong> in order to initialize the new React app.</p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ create-react-app project"}
      </SyntaxHighlighter>       

      <p>Navigate into the React app and use <strong>npm start</strong> in order to launch the virtual DOM</p>
      <SyntaxHighlighter language="bash" style={atomDark}>
        {"$ cd project \n$ npm start"}
      </SyntaxHighlighter>  

      <p>If these steps are successful, Django and React are now installed. Good luck on your project!</p>
      <br/>

      </Container>
    </React.Fragment>
  );
}

function Tutorial() {
  const cardCode =
    `<Card style={{ backgroundColor:'#your-color',width: '18rem' }}>
    {/* show an image on the top of the card */}
    <Card.Img variant='top' src='/your-image.png' /> 
      <Card.Body>
        {/* create title text for the card */}
        <Card.Title style={{color:'your-title-color'}}>Card Title</Card.Title>
        {/* create body text for the card */}
        <Card.Text>
          Sample body
        </Card.Text>
      </Card.Body>
    </Card>`

  const gridCode= `<Row>
  <Col style={{textAlign:'center', borderRight:'solid
               grey 1.5px'}} sm={2}>
    <p>This is sample text for the first column,
     the first column is the leftmost column in the grid.</p>
    <hr style={{backgroundColor:'grey'}}/>
  </Col>
  <Col style={{textAlign:'center'}} sm={2}>
    <p>Image Below</p>
    <hr style={{backgroundColor:'grey'}}/>
    <Image style={{width:400}} src='/your-image.png' fluid /> 
    <hr style={{backgroundColor:'grey'}}/>
    <p>Image Above AND Below</p>
    <Image style={{width:400}} src='/your-image2.png' fluid /> 
    <hr style={{backgroundColor:'grey'}}/>
    <p>Image Above</p>
  </Col>
  <Col style={{textAlign:'center', borderRight:'solid
               grey 1.5px'}} sm={2}>
    <p>Lorem ipsum...</p>
  </Col>
</Row>`
const carouselCode= `<Carousel>
{/* Adding more 'Carousel.Item's increases the slides*/}
<Carousel.Item style={{backgroundColor:'#232626'}}>
  {/* Here's the code to add an image to the background:*/}
  <img
    className="d-block w-100" src="/dark.png" 
    alt="First slide"
  />
  {/* Here's the code to add text to the carousel:*/}
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero.</p>
  </Carousel.Caption>
</Carousel.Item>`


  return (
    <React.Fragment>
    <br/>
    <div style={{backgroundColor:'#232626'}} class='text-center'></div>
      <Container>
        <strong style={{fontSize:'32px',textAlign:'center',color:'white'}}>Here are some components for creating a 
        great-looking page in React.</strong>
        <ColoredLine></ColoredLine>
        <br/>
        <Row>
        <Col sm={8}>
          <h3>Cards</h3>
            <p> Cards are a simple and organized way to display content and/or actions regarding a single topic.</p>
            <p>to implement a card use the following code:</p>
            <SyntaxHighlighter language="jsx" style={atomDark}>
              {cardCode}
            </SyntaxHighlighter> 
          </Col>

          <Col style={{textAlign:'center'}} sm={4}>
            <ExCard></ExCard>
          </Col>
        </Row>

        <br/><br/>
        <Row>
          <Col sm={6}>
          <h3>Grids</h3>
            <p> In React, Grids are responsive. This allows for grids to easily control the layout of a site. Below is the 
              code for implementing a Grid in React:
            </p>
            <SyntaxHighlighter language="jsx" style={atomDark}>
              {gridCode}
            </SyntaxHighlighter> 
          </Col>
          
          <Col style={{textAlign:'center',borderRight:`solid grey 1.5px`, backgroundColor:"#232626"}} sm={2}>
            <br/>
            <p>This is sample text for the first column, the first column is the leftmost column in the grid.</p>
            <hr style={{backgroundColor:'grey'}}/>
            <p>In other news, this is also a sample.</p>
            <hr style={{backgroundColor:'grey'}}/>
            <p>And so is this!</p>
            <hr style={{backgroundColor:'grey'}}/>

          </Col>
          <Col style={{textAlign:'center', backgroundColor:"#232626"}} sm={2}>
          <br/>
            <p>Image Below</p>
            <hr style={{backgroundColor:'grey'}}/>
            <Image style={{width:400}} src='/react.png' fluid /> 
            <hr style={{backgroundColor:'grey'}}/>
            <p>Image Above AND Below</p>
            <Image style={{width:400}} src='/django.png' fluid /> 
            <hr style={{backgroundColor:'grey'}}/>
            <p>Image Above</p>
          </Col>
          <Col style={{textAlign:'center',borderLeft:`solid grey 1.5px`, backgroundColor:"#232626"}} sm={2}>
          <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra lacus mauris, 
              in fermentum lacus convallis id. Quisque consectetur nisl nibh, non porta mi sagittis vel. 
              Vestibulum tincidunt, velit non cursus tincidunt, est turpis pulvinar enim, nec congue justo enim in elit.
              Morbi quis mattis sapien. Quisque sit amet fermentum dolor, id laoreet leo. In eget faucibus purus, eu 
              venenatis libero. 
            </p>
          </Col>
        </Row>

        <br/><br/>

        <Row>
        <Col sm={6}>
          <h3>Carousels</h3>
            <p> Carousels are a great way to showcase content at the top of your site in an attactive manner.
              The code for implementing a simple carousel is below:
            </p>
            <SyntaxHighlighter language="jsx" style={atomDark}>
              {carouselCode}
            </SyntaxHighlighter> 
          </Col>
          <Col style={{textAlign:'center'}} sm={6}>
            <br/><br/>
            <ControlledCarousel></ControlledCarousel>
          </Col>
        </Row>
        <br/>

      <Row>
          <Col sm={6}>
          <h3>Thematic Line Breaks</h3>
          <p>Thematic line breaks, while not React-specific, are a great way to break up content without segmenting it off
        in a table. They contribute to an open feeling on a website. An example is directly below:
          </p>
          </Col>
          <Col>            
            <SyntaxHighlighter language="jsx" style={atomDark}>
              {`<hr />\n<hr style={{color:'grey',backgroundColor:'grey'}}/>`}
            </SyntaxHighlighter> 
            </Col>
        </Row>
        <ColoredLine></ColoredLine>
      </Container>
      <br/><br/><br/>
      </React.Fragment>
  );
}



function Demo() {
  return (
    <React.Fragment>
      <br/>
      <Container style={{textAlign:'center'}}>
        <strong style={{fontSize:'32px'}}>Landscapes of Canada.</strong>
        <ColoredLine></ColoredLine>
        <br/>
      </Container>
        <Row style={{textAlign:'center'}}>
          <Col sm={2}></Col>
          <Col sm={8}>
              <DemoCarousel>
              </DemoCarousel>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <br/>

      <Container>
      <ColoredLine></ColoredLine>
      <br/>
      <div style={{textAlign:'center'}}>
      <p>This page is dedicated to showcasing a few breathtaking landscapes that can be found around Canada.</p>
      <p>If you wish to learn more about the locations showcased here and vote on which location is your favourite, see below.</p>
      <br/>
      <strong style={{fontSize:'32px'}}>Learn More/Vote.</strong>
      <ColoredLine></ColoredLine>
      <br/>
      </div>
      <br/>
      <DemoCards></DemoCards>

      <form id='form1'action="https://linhlevn2.pythonanywhere.com/vote/" style={{textAlign:'center'}}>
      <p>Pick your favourite location, enter your name, and see the results.</p>
      <Row style={{textAlign:'center'}}>
          <Col>
          <p>Cabot Trail:</p>
          <input type="radio" name="vote" value="a" checked/>
          </Col>
          <Col>
          <p>Mount Thor:</p>
          <input type="radio" name="vote" value="b" checked/>
          </Col>
          <Col>
          <p>Banff National Park:</p>
          <input type="radio" name="vote" value="c" checked/>
          </Col>
        </Row>
      <br/>
      <label>
        <p>Name:</p>
        <input styletype="text" name="name" />
      </label>
      <br/>
      <p>note: submission will redirect to a results page made by our backend team.</p>
      <Button type="submit" value="Submit" target='_blank'>Submit</Button>
      </form>
      <br/>
      <br/>
      </Container>
    </React.Fragment>
  );
}



function Conclusion() {
  return (
    <React.Fragment>
      <br/>
      <Container>
        <strong style={{fontSize:'32px',textAlign:'center',color:'white'}}>Conclusions.</strong>
        <ColoredLine></ColoredLine>
        <strong style={{fontSize:'24px',color:'#26994D'}}>Django's Rating: 7.5/10. </strong>
        <p>Django performed exactly what we expect on handling data to work with the database. 
          A big plus for Django is that it uses the easy and simple Python language. 
          Although it takes a lot of time and effort to learn it at first, we are finally familiar with Django and now we love it.
          </p>
          <p>It was quite easy and straightforward to install Django on Pythonanywhere. However, as beginners, it was difficult for us to configure at first use. 
            We need to go through the tutorial and have a deep understanding of Django in order to set up the database, create the first model, and to be familiar with the admin site. 
            </p>
          <p>The structure, syntax, and bash commands are also quite different compared to what we knew in other frameworks. Hence, creating the first Django app was not that easy. 
          </p>
          <p>The learning curve of Django was pretty steep as it was such a challenge at the beginning. There were a lot of files to create, packages to install for the first time use. 
            We need to understand what each file should contain and where should it be. 
            The admin site and the database also take time to set up. However, we believe that the next time we use will be much easier as we already set up almost everything.
          </p>
          <p>In retrospect, we definitely did not regret and would still choose Django as a back-end framework. 
            We were so happy to see how everything connected and effectively worked together. 
            Although it took time and effort at first, the final performance of Django was amazing. 
            </p>


        <ColoredLine></ColoredLine>


        <strong style={{fontSize:'24px',color:'#06A6CE'}}>React's Rating: 8/10. </strong>
        <p>React absolutely performed at our expectations for a frontend framework. The amount of packages and libraries
          available to download was more than enough to leave us with no questions regarding the feasability of our design. 
        </p>
        <p>Installing react was fairly easy through npm, and configuration was very easy due to the use of the 
          create-react-app command. 
        </p>
        <p>Creating pages in react was very simple, as components are reusable. The syntax, once grasped, is also 
          relatively simple to write and we encountered few syntax errors while building our frontend.
        </p>
        <p>The learning curve of React would be its largest downfall. JSX was frustrating in the early stages of development
          as its mix of JavaScript and HTML lead to some confusion. The fact that React requires installation of a package 
          called react-router in order to display multiple pages was another issue that was not foreseen when choosing React,
          however installation of the package was simple. The lack of documentation for React also slowed down development at
          times. 
        </p>
        <p>In retrospect, we would not have used a different frontend framework, or done anything differently. over the
          development time for this site, it has become abundantly clear that React is a very powerful framework in the right 
          hands, and having experience with React is an important asset.
        </p>
      </Container>
    </React.Fragment>
  );
}
function Credits() {
  return (
    <React.Fragment>
      <br/>
      <Container style={{textAlign:'center'}}>
        <strong style={{fontSize:'32px',textAlign:'center',color:'white'}}>Credits.</strong>
        <ColoredLine></ColoredLine>
      <br/>
      <Row style={{textAlign:'center'}}> 
      <Col>
          <Image src="/hexDark.png" roundedCircle style={{width:200 ,height:200, fixOrientation:'true'}} /><br/>
          <strong style={{fontSize:'32px', color:'#26994d'}}>Anh Phung</strong>
          <p>500895992</p>
        </Col>

        <Col>
          <Image src="/LL.jpg" roundedCircle style={{width:200 ,height:200, fixOrientation:'true'}} /><br/>
          <strong style={{fontSize:'32px', color:'#26994d'}}>Linh Le</strong>
          <p>500895991</p>
        </Col>

        <Col style={{borderLeft:'1.5px solid grey'}}>
          <Image src="/hexDark.png" roundedCircle style={{width:200 ,height:200, fixOrientation:'true'}} /><br/>
          <strong style={{fontSize:'32px', color:'#06a6ce'}}>Ke Zhang</strong>
          <p>500832394</p>
          <p>Created the Cards, Footer, and contributed to the design of all frontend pages.</p>
        </Col>

        <Col> 
          <Image src="/nirvan.jpg" roundedCircle style={{width:200 ,height:200, fixOrientation:'true'}} /><br/>
          <strong style={{fontSize:'32px', color:'#06a6ce'}}>Nirvan Sarju</strong>
          <p>500889908</p>
          <p>Created the Carousels, Grids, and NavBar. Contributed to the design and structure of all frontend pages.</p>
        </Col>
      </Row>
      <br/>

      <strong style={{fontSize:'32px',textAlign:'center',color:'white'}}>References.</strong>
      <ColoredLine></ColoredLine>

      <p style={{fontSize:'24px'}}>Page Content (Pros/Cons etc.)</p>
      <a href="https://insights.stackoverflow.com/survey/2018/#most-loved-dreaded-and-wanted" 
      target="_blank">Stack Overflow Popularity Surveys</a><br/><br/>
      <a href="https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-reactjs-and-react-native/" 
      target="_blank">React Overview Article 1</a><br/><br/>
      <a href="https://blog.reactiveconf.com/7-strengths-of-reactjs-every-programmer-should-know-about-6a5f3a69a861" 
      target="_blank">React Overview Article 2</a><br/><br/>
      <a href="https://datafloq.com/read/advantages-and-disadvantages-of-using-django/3050" 
      target="_blank">Django Overview Article</a>

      <br/><br/>

      <p style={{fontSize:'24px'}}>Documentation/Help</p>
      <a href="https://reactjs.org" 
      target="_blank">ReactJS Documentation</a>
      <br/><br/>
      <a href="https://reacttraining.com/react-router/web/guides/quick-start" 
      target="_blank">React-Router Help</a>
      <br/><br/>
      <a href="https://react-bootstrap.github.io/" 
      target="_blank">React-Bootstrap Documentation</a>
      <br/><br/>
      <a href="https://www.npmjs.com/package/react-syntax-highlighter"
      target="_blank">React Syntax Highlighter</a>
      <br/><br/>
      <a href="https://docs.djangoproject.com/en/2.2/" 
      target="_blank">Django Documentation</a>

      </Container>

  <br/><br/>
      
    </React.Fragment>
  );
}