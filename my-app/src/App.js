import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Layout from './components/Layout.js'
import Main from './components/Main.js'

const data = {
  "about": {
    info: ["My name is Annabel Consilvio, and I'm a designer and developer from Massachusetts. I'm currently a senior at Olin College of Engineering focusing on Software Product Design (computer science + human-centered design) with an emphasis on web development. I'm passionate about making tech more accessible for everyone, creating positive experiences for people, and working at the intersection of tech and design.","Over the last few years, I've worked on front end engineering at Spotify, user experience design and web development at IBM Design, and visual design as part of the Return Design Studio."," I love thinking about and solving big problems and am particularly interested in accessibility, interdependence in society, education, and community. I am always looking to use my technical and design skills to have a positive impact in these areas.  I’m graduating in May 2018, and will be moving to Dublin to work at Hubspot as a software engineer."],
    title: "about me",
    date: "",
    skills: "",
    root: './images/about/',
    links: [{name: "email", link: "mailto:annabel.consilvio@gmail.com"},{name: "github", link: "https://github.com/aconsilvio"},{name: "linkedin", link: "https://www.linkedin.com/in/annabelconsilvio"},],
    images: [{title: 'me.jpeg', 
              description: "An image of a me (Annabel Consilvio)."
            }
            ],
    id:"about",
  },
  "shifting": {
    info: ["During my senior year at Olin College, I got the opportunity to work with a team of 8 students and 2 faculty advisors to work on community development in Coahoma County, Mississippi.  The venture of the multi-year project is a program called Shifting Rhythms, which brings technology, arts, and entrepreneurship curriculum to after school programs throughout the county in a mobile education space.  One of our key values is to work closely with the community so that it is a truly community-driven and wanted project, so we have many partners in the county that we work with as well as three key community partners that advise us on the project.","During my time working on the project, I have been involved in everything from curriculum development and play testing with students, developing and building the mobile education space inside a 7x12 foot trailer, and building relationships with community members and after school organizations throughout the county.  During the Spring of 2018, we are running a pilot version of our curriculum and mobile space that has been developed alongside the community through 450+ interactions with students and many, many interviews and co-designs with community members.",],
    title: "shifting rhythms",
    date: "2017/2018",
    skills: "user centered design, co-designs, curriculum development, space design",
    root: './images/shifting/',
    links: [{link: "https://www.facebook.com/shiftingrhythms/", name:"link to facebook page"}],
    images: [{title: 'records.jpg', 
              description: "An image of students working on building record players."
            },
            {title: 'IMG_1491.JPG', 
              description: "An image of Clarksdale's main road - a few brightly colored, old buildings with cars parked outside of them. "
            },
            {title: 'IMG_3804.jpg', 
              description: "An image of a student holding up a diddley bow that he built with the Shifting Rhythms trailer in the background."
            },
            {title: 'group.png', 
              description: "An image of a group of students working together to build an electric guitar."
            },
             {title: 'anishapic.jpeg', 
              description: "An image of a group of students working with a student from the class on a design workshop activity with paper and post it notes."
            },
            ],
    id:"shifting"
  },
  "spotify": {
    info: ["During the summer of 2017, I got the opportunity to work on the Spotify for Artists platform with a team of two other interns.  My role was in frontend engineering, and I used React, Redux, D3.js, and Jest to work on data vizualization on the artist timeline page.","This page will be updated with more images of my work once it is released to the public. ",],
    title: "spotify internship",
    date: "summer 2017",
    skills: "frontend engineering",
    root: './images/spotify/',
    links: [],
    images: [{title: 'spotify.jpg', 
              description: "An image of a woman listening to music through headphones with the Spotify logo over the top of it."
            }
            ],
    id:"spotify"
  },
  "ibm": {
    info: ["During the summer of 2016, I got the opportunity to work in a group of five interns at IBM Design to research, design, and create an internal, online collaboration tool for the global IBM Design network.  Over the course of seven weeks, I worked with another developer to create a fully functional webapp using Angular 2, Node.js, Sass, Express, MongoDB, and new es6 and es7 components to create IBM Colab, a platform to promote transparency and reflection across all 33 IBM Design studios.  ", "My main role throughout the summer was as a front-end developer, but I also gained experience in design research and UX design during my time there.  During the fifth week of the internship, my team released our beta to the whole of IBM Design, at which point we began to research how our users interacted with the platform.  From here, we created a vision for the next iteration of CoLab, and this vision has been passed onto the community to create.  ", "The images you see on this page are a both snapshots of our process and mock-ups of what we hope CoLab will eventually become.",],
    title: "ibm design internship",
    date: "summer 2016",
    skills: "web development, ux design, user research",
    root: './images/ibm/',
    links: [],
    images: [{title: 'upload.gif', 
              description: "An gif of someone uploading their work to the IBM Colab platform and then navigating to the newsfeed of the platform where many other images of other people's work can be seen."
            },
            {title: 'makefirst.png', 
              description: "An image of many paper prototypes made from paper and sharpie hanging on a wall."
            },
            {title: 'timeline.jpg', 
              description: "An exploration of what a visual timeline of design work could look like.  There are iterations of the piece along the top with their corresponding dates, and the main image has a comment box and description to the right of it. "
            },
            {title: 'empathy.jpg', 
              description: "An image of 'says, does, thinks, feels' frameworks from user interviews."
            },
            {title: 'main.jpg', 
              description: "An image of what Colab would look like when you first long into it as a user.  It contains 3 projects that each display information about who has collaborated on it, how the morale of the project has progressed over time, and its title and description."
            },
            ],
    id:"ibm"
  },
    "bonus": {
    info: ["hello the info will be here",],
    title: "bonus projects",
    date: "aummer 2016",
    skills: "web development, ux design, user research",
    root: './images/bonus/',
    links: [],
    images: [{title: 'IMG_1180.jpg', 
              description: "An image of a felt planter with a wooden plaque describing its contents and the farm it is from."
            },
            {title: 'IMG_1121.jpg', 
              description: "An image of a model of a street sign with the label Pointy Signs: local food is right around the corner. "
            },
            {title: 'IMG_1146.jpg', 
              description: "An image of a model of a tree on the side of the road with the label Veggie Bombing: food grows everywhere."
            },
            ],
    id:"bonus"
  },
    "wedo": {
    info: ["During the fall of 2016, I worked on a team of 5 designing a mobile and web experience for couples planning their own weddings.  We used Figma and Invision to make high fidelity prototypes and mockups, and you can see some screenshots of our work below.", "We documented the project including our usability tests, competitive analysis, and design refinements in a website linked below. The premise of our final product was an application that stored all of your planning data and gave you customized, small to-dos to help keep you on track during your wedding planning process."],
    title: "we do",
    date: "fall 2016",
    skills: "ux design, user research, ui design",
    root: './images/wedo/',
    links: [{name:"link to full documentation", link:"http://hfid.olin.edu/sa2017/ranier/rainierdesign/index.html"}, {name: "link to invision mobile prototype", link:"https://invis.io/M49PB546H"}, {name: "link to invision web prototype", link:"https://invis.io/ZQ9PIQ3T6"}],
    images: [{title: 'christina4.png', 
              description: "An image of someone using the We Do app on a mobile phone."
            }
            ],
    id:"wedo"
  },
    "practice": {
    info: ["In January 2017, I worked on developing a working proof-of-concept prototype for an early stage start up called Practice Portal.  The goal of the company was to show how music masters practice so that people learning new instruments had a guide on what to do, and how masters became masters.  Since a community of people existed already on Facebook that live streamed their practice sessions, my job was to siphon that community into a working prototype to see if it would be something people would want to use off Facebook.  ", "I used Angular, Node, MongoDB, Heroku, and the Facebook API to create the website.  Users can browse all recent videos, select a certain instrument they would like to see practice videos of, search by author or title of the videos, and see all existing comments from the live streams.  Since this prototype was more proof-of-concept than a full working app, commenting and uploading the videos still happens on Facebook, and the comments and videos are pulled in via the API after the user authenticates their account.  The prototype is no longer live, but you can find screenshots below along with a link to the github repository.",],
    title: "practice portal",
    date: "january 2017",
    skills: "web development, frontend engineering",
    root: './images/practice/',
    links: [{name:"link to github repo", link:"https://github.com/aconsilvio/practiceportal"}],
    images: [{title: 'frontpage.png', 
              description: "An image of a webpage with many different video links and images of people playing instruments."
            },
            {title: 'login.png', 
              description: "An image of a login screen for the Practice Portal webpage. The frontpage of the site is blurred out in the background."
            },
            {title: 'fullstate.png', 
              description: "An screen capture from a video two people speaking to a camera about music with comments on the right about the content of the video."
            },
            ],
    id:"practice",
  },
    "front": {
    info: ["Hi there!", "My name is Annabel, and I'm a designer and software developer currently based in Boston, MA (and soon to be in Dublin, Ireland).", "I care about accessibility, community, and equality, and I'm excited to share some of my work with you here.  Please don't hesitate to reach out with any questions of comments you may have!"],
    title: "homepage",
    date: "",
    skills: "",
    root: './images/front/',
    links: [],
    images: [{title:'uocd.jpg', description: 'An image of me and a teammate working together on a design project.'}, {title:'return.png', description: "An image of me presenting design work to another woman."}],
    id: "front"
  },
    "spoon": {
    info: ["During the spring of 2016, I participated in a one day hackathon at MIT around accessibility.  My team of five was paired with Meghan, a 26 year old woman with daily refractory epilepsy.  Meghan was one of the sweetest people I have ever gotten to work with, and my team decided to design and create a positive experience for her that would allow for more people to be introduced to her and understand her story.", "Meghan really loved two things:  music and a black spoon.  She used this spoon to communicate her emotions to her parents, and she would occasionally give her spoon to other people to hold if she trusted them or felt comfortable with them.", "For our project, we created two things: a game that Meghan and a friend could play together to interact with each other in a way Meghan did not normally get the opportunity to do, and a storybook (another of Meghan’s favorites things) to introduce people to Meghan, her story, and how she experiences the world.  The game was based around this act of sharing the Megan’s favorite spoon.", "We created a platform for Meghan and a friend to stand on that had bass-shakers underneath, and when Meghan handed her new friend her spoon, the music would turn on below them.  When music was turned on, Meghan could not only hear it but actually feel the beat, which made her very happy.  The interaction created trust and happiness between Meghan and her new friend, which was exactly our goal for the day.", "Since this project was so short, we ended up using Makey-Makeys instead of Arduinos to create the main experience and Adobe InDesign to create the storybook.  Overall, we won 3rd place in the hackathon, but really it was Meghan who won all of our hearts.",],
    title: "share the spoon",
    date: "spring 2016",
    skills: "accessibility, prototyping, assistive technology",
    root: './images/spoon/',
    links: [],
    images: [{title: 'platform.jpg', 
              description: "An image of a wooden platform with 'share the spoon with Meghan' written on it in vinyl."
            },
            {title: 'Meghan1.jpg', 
              description: "An drawing of Meghan, a young woman with short, dark hair with text accompanying it that says 'Hi, I'm Meghan'."
            },
            {title: 'Meghan5.jpg', 
              description: "An drawing of a black plastic spoon with text accompanying it that says 'This is my spoon.  It is very important to me'. It is the second page in a book about Meghan."
            },
             {title: 'Meghan6.jpg', 
              description: "An drawing of a lava lamp with text accompanying it that says 'I like movement.  I like light and I like sounds'. It is a page in a book about Meghan."
            },
            {title: 'Meghan8.jpg', 
              description: "An drawing of a smiley face with text accompanying it that says 'Most of all, I like people.  And I would like to get to know you'. It is the final page in a book about Meghan."
            },
            ],
    id: "spoon"
  },
    "portfolio": {
    info: ["During the fall of 2017, I completed an independent study in accessibility in tech which culminated in the building of this, redesigned, accessible portfolio website.  Along the way, I got the opportunity to interview a variety of people about accessibility and the role it plays in technology.  Some of these people had disabilities, some worked in the space and knew it extensively, and their thoughts and commentary have made it into some of my reflections throughout the semester (linked below) as well as the overall design of this website.  I also read a lot during this semester.  Some of the books that stuck with me include Accessibility for Everyone by Laura Kalbag and Design meets Disability by Graham Pullin.", "In terms of the work I did to redesign this website, it started out looking like the image you see above - a bunch of images on a page with no indication that they are links or what content they were going to lead you to.  The colors weren’t accessible and none of the images had alt text.  The site was hard to navigate with a screen reader and was failing most accessibility standards.  This makes sense because I designed it over 2 days with little thought other than 'I need to get all my work up on the internet as soon as possible.'", "Instead, for this website, I thought about the overall structure of the site before I built anything.   I put all relevant information to the user in the sidebar on the left, so they knew exactly what they would get if they clicked on each link in the navigation and gave them an option to move to the next or previous pages at the end of the main content of each page.  I tried to describe pictures as best I could using alt-text, and did my best to use all of the right HTML tags for screen readers.  In some ways, it wasn’t as hard as I thought it would be because I thought about this whole structure from the very beginning - I wasn’t sitting there trying to make an inherently inaccessible website accessible again.  That being said, I gave myself an easy challenge since this website doesn’t require users to input forms or do much beyond view content and click on links. I do however now feel confident that I could build websites that do require these actions in an accessible way.", "I took a lot of inspiration from a plus a - Sara Hendren’s site about her assistive tech lab, and gov.uk, which are both linked below, while designing this website, but I am aware that there are many many things that can be improved about it.  As any good developer should, I believe in continuous improvement, so here are a few things I know I need to improve about this site.  Please don’t hesitate to reach out if you think there is something to add to the backlog.", "- There’s an image on the food source page that contains lots of text - this should be split up into many images with accompanying text to make it better for screen readers.", "- I would like to develop a more interesting way for alt-text to be used or displayed within the site.  Should it show up on hover of the images?  Should it go below the images?  I’m not sure yet.", "- The top of the page loads in a different place depending on which link you click.  Why does this happen?  Not sure yet, but I’m going to figure it out.", "- Are the links at the bottom of each content page as accessible as they could be?",],
    title: "this portfolio",
    date: "fall 2017",
    skills: "accessible web development",
    root: './images/portfolio/',
    links: [{name:'a + a', link:'http://aplusa.org/'}, 
            {name:'gov.uk', link:'https://www.gov.uk/'}, ],
    images: [{title: 'header.png', 
              description: "An image of a portfolio webpage with many images and some small links to navigation at the top.  One of the images is hovered over which reveals a title and some information about the type of work done in that project."
            }
            ],
    id:"portfolio"
  },
    "spring": {
    info: ["During the spring of 2016, I worked with a group of five Olin students to partner with a afterschool program in Mississippi called Spring Initiative, which helps at-risk students improve both academically and socially outside of the classroom. ","We worked with the two founders of the program to create a system that allows all program administrators to track the progress of each student on a daily, weekly, monthly, or yearly basis to help them understand which aspects of the program are successful and help them obtain quantitative data as they apply for more grants.  ", "My team built this app using Angular, Node.js, Sass, MongoDB, nvD3.js, and Express.  The app includes two-pronged email authentication, data visualization, and both admin and main user accounts.  The project was done as part of Olin.js, a student-taught class on full-stack web-development at Olin.  Another student took the project over at the end of the semester to add more functionality, and it is still being used today by the organizers of Spring Initiative",],
    title: "spring initiative",
    date: "spring 2016",
    skills: "web development, front-end development",
    root: './images/spring/',
    links: [{link: "https://github.com/davidabrahams/Spring-Initiative", name:"link to github repo"}],
    images: [{title: 'quiz2.png', 
              description: "An image of a long term entry form for a student management system.  Some of the fields include the date, current grades of the student, and the student's reading level."
            },
            {title: 'graph2.png', 
              description: "An image of a pie chart showing the warning rates of the Big Spring cohort within Spring Initiative. 81% of the time the group gets no warnings, 7% of the time the group gets 1 warning, 7% of the time the group gets 2 warnings, and 5% of the time a student is sent home."
            },
            {title: 'quiz3.png', 
              description: "An image of a short-term entry form for a student which includes fields such as behavior on this day at Spring, teach feedback from the day, and a number field from 1 to 5 indicating the students engagement with content, peers, and adults."
            },
            ],
    id:"spring"
  },
    "food": {
    info: ["During the spring of 2016, I worked with a team of five Olin students on a collaborative design project for local, organic Massachusetts farmers.  Over nine weeks, we interviewed and designed with over a dozen farmers in order to better understand their pain points and to develop something that would be useful.", "We found that since farmers spend so much of their time working on their farms, they had little time to advocate on behalf of the larger local farming movement.  In order to help them do this without creating extra work for them, my team developed a grass-roots advocacy campaign, called Food Source.", "The campaign consisted of two main installations.  First, vegetable bombing (a twist on yarn bombing), was a way to take unused green space in cities and other urban areas and turn it into a micro-farm that is taken care of my volunteers to promote healthy, organic eating in areas where farms may not be abundant. Secondly, we developed a set of classic street signs to be used in areas to enlighten people on how close local farms and farmers markets are and encourage people to see and volunteer at these farms."],
    title: "food source",
    date: "spring 2016",
    skills: "ux design, user research",
    root: './images/food/',
    links: [],
    images: [{title: 'IMG_1180.jpg', 
              description: "An image of a felt planter with a wooden plaque describing its contents and the farm it is from."
            },
            {title: 'IMG_1121.jpg', 
              description: "An image of a model of a street sign with the label Pointy Signs: local food is right around the corner. "
            },
            {title: 'IMG_1146.jpg', 
              description: "An image of a model of a tree on the side of the road with the label Veggie Bombing: food grows everywhere."
            },
            {title: 'IMG_1185.jpg', 
              description: "An image of a sign pointing in two different direction, indicating where the nearest farms and farmers markets are."
            },
            {title: 'Personas.jpg', 
              description: "An image of the four personas we used throughout our design process. Mid-Life Macklemore is a Corporate Refugee, Second Family Shakira is a People-Seeker, Born and Raised Rhianna is a vetran farmer, and Idealistic Iggy is a quiet environmentalist."
            },
            ],
    id:"food"
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
       
          <Layout data={data}/>
        
      </div>
    );
  }
}

export default App;
