import image from './image-mejdi.jpg'
import certification from './Fullstack_JS_Certification.png'
import diploma from './DIPLOME.JPG'
import certificationOpenClassroom from './Certificat - OpenClassrooms.png'
import jQueryCertificate from './jQuery_Certificate.png'

/* 

For CSS (Colours) editing, head to 'css/root.css'

Here you can edit the main values for your page, such as the name, job title, etc.
Ofcourse you may take full advantage of editing it yourself through the code if you wish.

*/

// Page Styling ------------------------------------------------------------------

export let pageStyling = {
    backgroundColor: "#201f25", // Main Page Background Color
    foregroundColor: "#33313a", // Foreground Color
    primaryColor: "#38cdee", // Neon Color
    secondaryColor: "#4edcff", // Underglow Color
    textColor: "#bebebe",
    subTextColor: "#616161",
    font: "Consolas, Lucida Sans Typewriter, Lucida Console, Monaco, Bitstream Vera Sans Mono, monospace",
    particleEffect: true,
};

// Navigation --------------------------------------------------------------------

export let navigation = {
    navLogo: { // Navigation Logo
        enabled: true, // Do you want to use a Branding?
        isImage: false, // Do you want to use an Image? If not, alt text will be used
        imageURL: "https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png",
        logoWidth: "75px", // Size of your logo, adjustable without the CSS
        altText: "My_Portfolio", // This will be used if it is not an Image (Will also be the alt text if it is an image)
        linkTo: "#",
    },

    leftNavigation: [ // Add items to the left side of the navigation Bar
        {
            text: "_External",
            url: "#",
        },
    ],

    rightNavigation: [ // Add items to the right side of the navigation Bar
        {
            text: "About", // Text Value
            url: "#aboutme", // Anchor points or External URLS, you may have to edit the App.js to add Anchors
        },
        {
            text: "Projects",
            url: "#projects",
        },
        {
            text: "Applications",
            url: "#applications",
        },
        {
            text: "Certifications",
            url: "#certifications",
        },
        {
            text: "Skills",
            url: "#skills",
        },
        /*{
            text: "Contact",
            url: "#",
        },*/
    ],

    // Enable / Disable a Resume Button to allow a user to download your RESUME
/*
    resumeBtn: {
        enabled: true, // Enable / Disable
        downloadIcon: true, // Show Icon
        text: "Resume", // Text on Button
        url: "https://google.com", // Make sure to include https:// or http://. This is the download link to your stored Resume
    }*/
};

// Information ------------------------------------------------------------------------

export let information = {
    fullName: "Mejdi Ben Ammou", // Name in Profile Banner
    welcomeMsg: "Welcome! I am,", // Welcome subheading above Name
    aboutMe: "Fullstack JS Developer", // Short Description
    companyName: "Position @ Company", // Your position @ a Company
    // Replace with the URL to your image (URL or Local Image)
    profilePhoto: image,
};

// Socials ----------------------------------------------------------------------------

export let socials = {
    githubURL: "https://github.com/mejdi5", // Github
    linkedinURL: "https://www.linkedin.com/in/mejdi-ben-ammou-70897175/", // LinkedIn
};

// About Me ----------------------------------------------------------------------------

export let aboutMe = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
    quote: "\"The Best Preparation For Tommorow Is Doing Your Best Today.\"",
};

// Portfolio ---------------------------------------------------------------------------

export let portfolioCards = [
    {
        projectTitle: "Messenging",
        projectDesc: {
        line1: "A realtime chat application using React, Firebase and Context API." ,
        line2: "Usage of Firebase Authentication to login and register users." ,
        line3: "Usage of Firebase Storage for image uploading.",
        line4: "Usage of Firebase Firestore for storing documents and collections in database.",
        line5: "Usage of Context API for managing state.",
        line6: "Usage of SCSS for style and media query for responsive design."
        }
        ,
        projectsURL: ["https://github.com/mejdi5/Chat-App"],
        Link: "https://messenging.netlify.app"
    },
    {
        projectTitle: "Foot Prediction",
        projectDesc: {
        line1: "Technology: MERN stack and Redux-toolkit." ,
        line2: "A website where users can enjoy football by predicting matches results." ,
        line3: "At the end of each fixture, the admin calculates all users scores.",
        line4: "Every user can see his score and rank in the standing table.",
        }
        ,
        projectsURL: ["https://github.com/mejdi5/Football_Prediction"],
        Link: "https://foot-prediction.netlify.app/"
    },
    {
        projectTitle: "Headbook",
        projectDesc: {
        line1: "A social media website for users who wants to interact with friends, send invitations, add, like and comment posts and chat with each other." , 
        line2: "Technology: MERN stack with TypeScript, Redux-toolkit and Firebase." ,
        line3: "Authentication: Usage of Firebase Auth.",
        line4: "Image upload with Firebase Storage.",
        line5: "Realtime chat using socket.io library.",
        line6: "Designing the application with styled-components package."
        }
        ,
        projectsURL: ["https://github.com/mejdi5/headbook_social-media"],
        Link: "https://head-book.herokuapp.com/"
    },
    {
        projectTitle: "Beauty Commerce",
        projectDesc: {
        line1: "An e-commerce website useful for users to buy products by adding them to cart and submitting orders" , 
        line2: "Technology: MERN stack with TypeScript" ,
        line3: "Authentication: JWT for generating tokens and CryptoJs for hashing passwords, nodemailer for sending emails to user to reset password and verify account.",
        line4: "Payment with card using Stripe.",
        line5: "Admin can manage users, products, carts and users. Customer can manage his account, buy products and pay orders."
        }
        ,
        projectsURL: ["https://github.com/mejdi5/beauty-commerce-MERN"],
        Link: "https://beauty-commerce.herokuapp.com/"
    },
    {
        projectTitle: "Win The Million",
        projectDesc: {
        line1: "A website which is useful for users to enjoy the quiz game `Who wants to be a millionnaire`" , 
        line2:"Technology: React.js with TypeScript" ,
        line3:"Packages: axios, bootstrap, redux, react-router-dom, use-sound,... ",
        }
        ,
        projectsURL: ["https://github.com/mejdi5/the-million-REACT"],
        Link: "https://themillion.netlify.app/"
    },
    {
        projectTitle: "My Chess",
        projectDesc: {
        line1: "A website which is useful for users to enjoy the chess game with friends in real-time." , 
        line2:"Technology: MERN Stack." ,
        line3:"Front-End: React.js / Redux.",
        line4:"Back-End: Node.js / MongoDB.",
        line5:"Packages: express, mongoose, jwt, bcrypt, multer, socket.io, chess.js, chessboardjsx, axios, bootstrap, redux, react-router-dom, react-google-login,... ",
        }
        ,
        projectsURL: ["https://github.com/mejdi5/myChess"],
        Link: "https://mychess1.herokuapp.com/"
    },
    {
        projectTitle: "Easy Chat",
        projectDesc: {
            line1: "A chat website allowing users to create private or public conversations and send real-time crypted messages to each other.", 
            line2:"Technology: MERN Stack." ,
            line3:"Front-End: React.js / Redux.",
            line4:"Back-End: Node.js / MongoDB.",
            line5:"Packages: express, mongoose, jwt, multer, socket.io, axios, bootstrap, meterial-ui, reactstrap, redux, react-router-dom,..."
            },
        projectsURL: ["https://github.com/mejdi5/easychat"],
        Link: "https://easychat2.herokuapp.com/"
    },
    {
        projectTitle: "Orenda",
        projectDesc: {
            line1: "Service website allowing professional users to publish their cards permitting to students to find them and subscribe.", 
            line2:"Technology: MERN Stack." ,
            line3:"Front-End: React.js / Redux.",
            line4:"Back-End: Node.js / MongoDB",
            line5:"Packages: express, mongoose, jwt, multer, axios, bootstrap, reactstrap, redux, react-router-dom,...",
            line6:"Special user system coding: visitor, student, professional and admin."
        },
        projectsURL: ["https://github.com/mejdi5/Orenda"],
        Link: "https://orenda1.herokuapp.com/"
    },
    
    
];

//Applications
export let applications = [
    {
        projectTitle: "Image Gallery",
        projectDesc: {
            line1: "A fullstack application to store user images.", 
            line2:"Technology: MERN Stack with TypeScript and Redux." ,
            },
        projectsURL: ["https://github.com/mejdi5/image-gallery_MERN_typescript"],
        Link: ""
    },
    {
        projectTitle: "Quiz App",
        projectDesc: {
            line1: "A front-end application allowing the user to choose questions difficulty, take a quiz and see his score.", 
            line2:"Technology: React.js and TypeScript.",
            },
        projectsURL: ["https://github.com/mejdi5/quiz-app_TypeScript-React"],
        Link: ""
    },
    {
        projectTitle: "Movie App",
        projectDesc: {
            line1: "Three front-end applications consist of fetching a movie API and allowing users to filter, delete movies and add their own movies.", 
            },
        projectsURL: ["https://github.com/mejdi5/Movie-App-Redux",
                    "https://github.com/mejdi5/Movie-App_TypeScript-React-useReducer", 
                    'https://github.com/mejdi5/Movie_App_Vue_JS'
                    ],
        Link: ""
    },
    {
        projectTitle: "News",
        projectDesc: {
            line1: "A front-end application consists of fetching a news API and allowing users to filter the actuality.", 
            line2:"Framework used: Vue.js.",
            line3:"Packages: vue, vuex, bootstrap-vue, axios.",
            },
        projectsURL: ["https://github.com/mejdi5/News_Vue_JS"],
        Link: ""
    },
    {
        projectTitle: "Contact List",
        projectDesc: {
            line1: "A fullstack application to get, post, edit and delete people's contact and store them in the database.", 
            line2:"Technology: MERN Stack." ,
            },
        projectsURL: ["https://github.com/mejdi5/MERN-stack---Contact-List"],
        Link: ""
    },
    {
        projectTitle: "Todo List",
        projectDesc: {
            line1: "Two frontend applications allowing users to add, filter, edit and delete tasks.", 
            line2:"* First application: React.js / Redux.",
            line3:"* Second application: React.js with TypeScript",
            },
        projectsURL: ["https://github.com/mejdi5/ToDoApp-Redux", "https://github.com/mejdi5/Todo-App_React-TypeScript"],
        Link: ""
    },
    {
        projectTitle: "Shopping Cart",
        projectDesc: {
            line1: "Two frontend applications consist of creating a shopping cart for clients who wants to buy products. this application allows users to adjust the quantity, see the total price and like the products.", 
            },
        projectsURL: ["https://github.com/mejdi5/Shopping-Cart", "https://github.com/mejdi5/Shopping-Cart_React_TypeScript_react-query"],
        Link: ""
    },
]

// Experience -------------------------------------------------------------------------

export let experience = {
    experiences: [ // Preferably, sort by newest first
        {
        companyLogo: jQueryCertificate, // Leave Blank for Template Logo
        companyName: "JQuery certification", // Company Name
        companyLocation: "LinkedIn Learning", // Location of Company
        roles: [ // Each company can have multiple Roles
            {
                role: "LinkedIn Learning",
                type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                startPeriod: "May 2022", // Preferable format
                endPeriod: "", // End result will look like "Apr 2020 - Present"
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
            },
        ],
        },
        {
        companyLogo: certificationOpenClassroom, // Leave Blank for Template Logo
        companyName: "VueJs Certification", // Company Name
        companyLocation: "Online", // Location of Company
        roles: [ // Each company can have multiple Roles
            {
                role: "OpenClassrooms",
                type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                startPeriod: "September 2021", // Preferable format
                endPeriod: "", // End result will look like "Apr 2020 - Present"
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
            },
        ],
        },
        {
            companyLogo: certification, // Leave Blank for Template Logo
            companyName: "Full-Stack JS Certification", // Company Name
            companyLocation: "Tunis", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "Go My Code Community",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "October 2020", // Preferable format
                    endPeriod: "Mars 2021", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        },
        {
            companyLogo: diploma, // Leave Blank for Template Logo
            companyName: "National Electrical Engineering Diploma", // Company Name
            companyLocation: "Tunis", // Location of Company
            roles: [ // Each company can have multiple Roles
                {
                    role: "National Engineering School (ENIT)",
                    type: "Part-Time", // Full-Time, Part-Time, Internship, etc...
                    startPeriod: "2009", // Preferable format
                    endPeriod: "2012", // End result will look like "Apr 2020 - Present"
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales lectus ex, nec lacinia libero finibus in. Sed at mattis justo, feugiat cursus sapien. Proin blandit nisi nec mi iaculis, ac viverra felis sollicitudin. Aliquam rhoncus porta magna, non lacinia ipsum aliquam vitae. Vivamus fermentum dapibus mauris, varius consequat velit viverra egestas. Nunc eget lacus in tortor ultricies dignissim eget a eros. Suspendisse volutpat sit amet lorem non consectetur. Fusce sed ultricies felis.",
                },
            ],
        },
    ]
};

// Skills -----------------------------------------------------------------------------

export let skills = {
    //Pie Chart Editing
    radius: 42, // of the circle
    lineWidth: 15, //The line Width of all segments
    paddingAngle: 5, // The distance between each segment
    //Labels
    labelPosition: 72, // Location of Label. Outer = 166
    fontSize: '2px', // Size of the Label
    //Pie Chart Data
    skillsData: [
        // Each Skill will have the title, value for the chart, color, experience (years, months) and a desscription on the task
        // Some examples are shown below
        { title: 'ReactJS', value: 30, color: '#28ACEA', experience: '3 years',
        description: 'Build multiple ReactJS based websites with integration of Redux'},
        { title: 'NodeJS', value: 30, color: '#19CEEB', experience: '2 years',
        description: 'Build back-end applications using ExpressJS'},
        { title: 'MongoDB', value: 25, color: '#09EBEE', experience: '1 year',
        description: 'Database management with mongoose'},
        { title: 'Others', value: 15, color: '#00FEEF', experience: '1 year',
        description: 'Technologies such as TypeScript, JQuery, mySQL, Firebase, VueJS, React Native..'},
    ],
}


/* 

Portfolio-Bootstrap-React by Joshua Daveston Ahimaz     

My Portfolio:
https://JAhimaz.github.io

My Github: 
https://Github.com/JAhimaz


*/