let info = {
  name: "Hrishikesh Paul",
  logo_name: "HISHAM",
  flat_picture: require("./src/assets/profile.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Passionate about my work and driven by a deep love for what I do, I am a dedicated Full Stack Developer and Software Engineer with expertise in web and mobile application development. With a Bachelor's degree in Computer Science and a strong foundation in various programming languages and frameworks, I thrive on tackling complex challenges and transforming ideas into impactful solutions.I take great pride in my ability to collaborate effectively with cross-functional teams, ensuring the successful delivery of projects. Through my previous roles, I have had the opportunity to work on diverse projects, such as workshop platforms, chat systems, payment gateways integration, appointment systems, and order tracking functionalities.",
  links: {
    linkedin: "https://www.linkedin.com/in/hisham-al-hafez/"
  },
  education: [
    {
      name: "Damascus University",
      place: "",
      date: "Sep, 2014 - Sep, 2018",
      degree: "Bachelor of Science: Computer Science",
      gpa: "",
      description: "",
      skills: [
        "Artificial Intelligence",
        "Software Engineering",
        "Algorithms",
        "Computer Vision",
        "Music Data Mining",
        "OS", "CCNA"
      ]
    }
  ],
  experience: [
    {
      name: "SEDIDOC GmbH",
      place: "Germany",
      date: "Jun, 2022 - Present",
      position: "Full Stack Developer",
      description:
        "Working as a Full Stack Developer with experience in implementing various features for SEDIWORK and Asepha app. SEDIWORK is an alternative to Excel for planning rotations in hospital networks, while Asepha app focuses on Digital Technologies for Innovative Therapies.",
      skills: ["Typescript", "Javascript", "vue", "veutify", "Directus", "Flutter"]
    },
    {
      name: "MIDADTEK",
      place: "Istanbul, Turkey",
      date: "Mar, 2019 - May, 2022",
      position: "Software Engineer",
      description:
        "Worked as a Software Engineer, I had the opportunity to work collaboratively with both junior and senior-level software engineers. This collaborative environment allowed me to learn from experienced professionals while also mentoring and guiding junior team members.",
      skills: ["Typescript", "Angular", "Ionic", "FireBase", "php", "Laravel", "MySQL", "Wordpress"]
    }
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "Javascript",
        "TypeScript",
        "PHP",
        "SQL",
        "NoSQL",
      ],
      icon: "fa fa-code"
    },
    {
      title: "Content Management Systems",
      info: [
        "Directus",
        "Voyager",
        "CoreUI",
        "WordPress",
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Web and Mobile Technologies",
      info: ["Vue", "Vuetify", "NuxtJs", "Angular", "Ionic", "Laravel", "Flutter", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["MySQL", "NoSql"],
      icon: "fa fa-database"
    },
    {
      title: "Operating Systems & Tools",
      info: [
        "Windows",
        "Android",
        "Agile",
        "JIRA",
        "Firebase",
      ],
      icon: "fas fa-tools"
    },
    {
      title: "Payment Gateways",
      info: ["Stripe", "Iyzico"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  web: [
    {
      name: "SEDIWORK",
      pictures: [
        {
          img: require("./src/assets/portfolio/sediwork/one.png")
        },
        {
          img: require("./src/assets/portfolio/sediwork/two.png")
        },
        {
          img: require("./src/assets/portfolio/sediwork/three.png")
        },
        {
          img: require("./src/assets/portfolio/sediwork/four.png")
        }
        ,
        {
          img: require("./src/assets/portfolio/sediwork/five.png")
        }
        ,
        {
          img: require("./src/assets/portfolio/sediwork/six.png")
        }
      ],
      technologies: ["Vue", "Vuetify", "Vuex", "NuxtJs", "Directus"],
      category: "Web Application",
      date: "2022 - 2023",
      visit: "",
      description:
        "<p>SEDIWORK is smart rotation planning for clinics Cross-clinic or cross-site rotation plans with a click. Intelligent substitute suggestions for short-term absences due to illness. SEDIWORK is the alternative to Excel for planning rotations in your hospital network.</p>"
        + "<p>I developed the following components in the SEDIWORK Platform:</p> <ol>	<li>" +
        "	<p><strong>Workshop</strong>: I worked on the development of the workshop feature in the SEDIWORK Platform. This involved creating functionality for users to create, manage, and participate in workshops. I implemented features such as workshop creation, scheduling, participant management, and notifications.</p>	</li>	<li>" +
        "	<p><strong>Chat System</strong>: I was responsible for implementing the chat system within the SEDIWORK Platform. This involved integrating messaging functionality to facilitate communication between users. I implemented features such as one-on-one messaging, group chats, support center.</p>	</li>	<li>" +
        "	<p><strong>Stripe Payment Gateway Integration</strong>: I successfully integrated the Stripe payment gateway into the SEDIWORK Platform. This involved setting up the necessary configurations and implementing the required API calls to enable secure and seamless payment processing. Users can now make payments for various services within the platform using Stripe.</p>	</li>	<li>" +
        "	<p><strong>One-Time Password</strong>: I implemented a one-time password (OTP) system as an added security measure in the SEDIWORK Platform. This feature provides users with a unique temporary code that they can use to verify their identity during login or other sensitive operations.</p></li>	<li>" +
        "	<p><strong>Webhooks</strong>: I created a webhook mechanism that allows my application to receive real-time updates or notifications from remote servers or services. This enables seamless integration and communication between different systems.</p></li>	<li>" +
        "	<p><strong>Endpoint Creation</strong>: I developed endpoints within my server-side application to handle incoming webhook requests. These endpoints are responsible for processing the payload received from the webhook and initiating the necessary actions or processes.</p>	</li>	<li>" +
        "	<p><strong>Payload Processing</strong>: Upon receiving a webhook payload, I parsed and processed the data within the payload according to my application&#39;s requirements. This involved extracting relevant information and performing specific actions based on the received data.</p>	</li>	<li>" +
        "	<p><strong>Action Execution</strong>: Based on the webhook payload, I executed the desired actions or triggered processes within my application. This could include updating data, sending notifications, invoking external APIs, or any other custom functionality needed for seamless integration.</p></li></ol>"
    },
    {
      name: "COUERA",
      pictures: [
        {
          img: require("./src/assets/portfolio/couera/one.png")
        },
        {
          img: require("./src/assets/portfolio/couera/two.png")
        },
        {
          img: require("./src/assets/portfolio/couera/three.png")
        },
        {
          img: require("./src/assets/portfolio/couera/four.png")
        },
        {
          img: require("./src/assets/portfolio/couera/five.png")
        }
      ],
      technologies: ["Angular", "Directus", "Laravel"],
      category: "Web Application",
      date: "2022 - 2023",
      github: "",
      visit: "https://www.couera.com",
      description:
        "<p>Couera is a common student platform with global recognition and reputation, provide consultation and advice to students who desire to pursue higher education abroad.</p>" +
        "<p>During the project, I accomplished the following tasks:</p> <ol><li> <p><strong>Collaborated with Junior Frontend Developer</strong>: I worked closely with a junior frontend developer, assisting and guiding them in their tasks. We collaborated effectively to ensure a smooth workflow and successful completion of frontend development tasks.</p> </li> <li> <p><strong>Implemented Pagination</strong>: I integrated pagination functionality between pages to enhance the user experience. This feature allows users to navigate through large datasets or lists of content efficiently by displaying a limited number of items per page.</p></li><li><p><strong>Developed Search and Filter Functionality</strong>: I implemented search and filter functionality to improve data retrieval and user interaction. Users can now search for specific items or apply filters to narrow down the results based on their preferences.</p></li><li><p><strong>Implemented Form Validations</strong>: I added form validations to ensure data integrity and prevent erroneous or incomplete submissions. By validating form inputs on the frontend and backend, we were able to provide a more robust and user-friendly experience.</p></li><li><p><strong>Structured and Connected the Database with Frontend</strong>: I designed and implemented an appropriate database structure for the project. This involved defining tables, relationships, and data schemas. I also established the necessary connections between the frontend and the database, enabling seamless data exchange and retrieval.</p></li><li><p><strong>Integrated Email Service Provider using Laravel API</strong>: I incorporated an email service provider into the project, utilizing Laravel&#39;s API capabilities. This integration allowed us to leverage the email service provider&#39;s features for sending transactional emails, notifications, or other relevant communications to users.</p></li>	<li>"
        + "<p><strong>Stripe Payment Gateway Integration</strong>: I successfully integrated the Stripe payment gateway into the COUERA Platform. This involved setting up the necessary configurations and implementing the required API calls to enable secure and seamless payment processing. Users can now make payments for various services within the platform using Stripe.</p> </li></ol>"
    },
    {
      name: "LEADERS IN HEALTH",
      pictures: [
        {
          img: require("./src/assets/portfolio/lih/one.png")
        },
        {
          img: require("./src/assets/portfolio/lih/two.png")
        },
        {
          img: require("./src/assets/portfolio/lih/three.png")
        },
        {
          img: require("./src/assets/portfolio/lih/four.png")
        },
        {
          img: require("./src/assets/portfolio/lih/five.png")
        }
      ],
      technologies: ["Vue", "Vuetify", "Vuex", "NuxtJs", "Directus"],
      category: "Web Application",
      github: "",
      date: "2022",
      visit: "https://www.leadersinhealth.de/",
      description:
        "<p>Leaders in Health is the leading non-profit network for diversity in health. Germany is colorful and we want to make the healthcare system more colorful. Our vision is that Germany&#39;s diverse society is also represented at all levels of the healthcare system. We are actively driving this change. For this we do digital events, podcasts, leadership circles, workshops and a doctoral program.</p>" +
        " <p>During the project, I accomplished the following tasks:</p> <ol> <li>" +
        "<p><strong>Members Area</strong>: I implemented user registration functionality that enables new users to create accounts with relevant information. User data, including personal details, is securely stored in the application&#39;s database. This members area grants users access to exclusive features and content.</p></li><li>" +
        "<p><strong>User Login</strong>: I created a secure login system that verifies user credentials. Users can log in using their registered email addresses and passwords. This authentication mechanism ensures that only authorized users can access restricted areas and personalized information within the application.</p> </li>  <li>" +
        "<p><strong>Profile Information Update</strong>: Within the members area, users can update their profile information. They have the ability to modify personal details such as their name, email address, contact information, and other relevant information associated with their user profile. This allows users to keep their profiles up to date.</p> </li><li>" +
        "<p><strong>Akademi Page</strong>: I designed and developed the &quot;Akademi&quot; page, which contain specific information related to events, courses, or educational content. These pages are structured to present the data in an organized manner for easy navigation and understanding.</p>  </li>" +
        "<li> <p><strong>Data Structure</strong>: The data structure implemented for the &quot;Akademi&quot; pages follows a logical organization that ensures efficient storage and retrieval of relevant information. It may include entities such as events.&nbsp;all interconnected based on their relationships and dependencies.</p> </li> </ol>"
    },
  ],
  mobile: [
    {
      name: "ASEPHA",
      pictures: [
        {
          img: require("./src/assets/portfolio/asepha/one.png")
        },
        {
          img: require("./src/assets/portfolio/asepha/two.png")
        },
        {
          img: require("./src/assets/portfolio/asepha/three.png")
        },
        {
          img: require("./src/assets/portfolio/asepha/four.png")
        }
        ,
        {
          img: require("./src/assets/portfolio/asepha/five.png")
        }
        ,
        {
          img: require("./src/assets/portfolio/asepha/six.png")
        },
        {
          img: require("./src/assets/portfolio/asepha/seven.png")
        },
        {
          img: require("./src/assets/portfolio/asepha/eight.png")
        },
        {
          img: require("./src/assets/portfolio/asepha/nine.png")
        },
        {
          img: require("./src/assets/portfolio/asepha/ten.png")
        }
      ],
      technologies: ["Flutter", "Directus", "DHL", "Stripe"],
      category: "Mobile Application",
      date: "2022",
      visit: "https://apps.apple.com/de/app/asepha/id1577175901",
      description:
        "<p>Asepha is Digital Technologies for Innovative Therapies.</p>" +
        "<p>The application offers patients a comprehensive solution for efficiently managing their healthcare journey. With this user-friendly app, patients can seamlessly navigate through various healthcare tasks and access vital information. They can easily schedule appointments with their preferred doctors, choosing the most convenient date and time. After visiting the doctor, patients can access their prescriptions directly within the application, ensuring quick and easy access to medication details and instructions. If medications are shipped, patients can conveniently track the status of their shipments using integrated tracking services. Additionally, the app allows patients to securely manage their bank cards, facilitating easy payment for medical services and invoice settlement. Overall, this application enhances the patient experience by providing a centralized platform for managing healthcare-related tasks, streamlining processes, and promoting convenience and engagement.</p>" +
        "<p>During the project, I accomplished the following tasks:</p><ol><li>" +
        "<p><strong>Appointment Reservation</strong>: The application allows patients to schedule appointments with specific doctors. Patients can select their preferred date, time, and doctor for the appointment, facilitating convenient booking and reducing waiting times.</p> </li> <li>" +
        "<p><strong>Prescription Management</strong>: After visiting the doctor, patients can access their prescription within the application. This feature enables patients to view their prescribed medications, dosages, and any specific instructions provided by the doctor. It ensures easy access to important healthcare information.</p></li><li>" +
        "<p><strong>Shipment Tracking</strong>: If the pharmacy sends the prescribed medicine via a shipping service like DHL, patients can track the status and progress of their shipment within the application. This feature provides transparency and allows patients to anticipate the arrival of their medication.</p></li><li>" +
        "<p><strong>Bank Card Management</strong>: The application allows patients to add and manage their bank cards securely. Patients can store their card information within the application, enabling convenient payment options for medical services and invoice settlement.</p>  </li> </ol>"
    },
    {
      name: "USTA",
      pictures: [
        {
          img: require("./src/assets/portfolio/usta/one.jpg")
        }
      ],
      technologies: ["Ionic", "Firebase", "Angular", "CoreUi"],
      category: "Mobile Application",
      date: "2019 - 2020",
      visit: "https://play.google.com/store/apps/details?id=com.midadtek.usta&hl=tr&gl=US",
      description:
        "<p>The app provides a comprehensive guide to all services and companies available to the Arab community in Turkey, providing information on professionals and services located in Turkey&#39;s provinces.<br />" +
        "It also provides extensive information about companies - factories - restaurants and arabic services.<br /> The application is the first communication platform with a wide range of services covering various fields in the provinces of Turkey.</p>" +
        "<p>During the project, I accomplished the following tasks:</p><ul><li>" +
        "<p><strong>Ionic Framework Development</strong>: I utilized the Ionic framework to build the frontend of the application. Ionic provided a powerful and cross-platform development environment for creating a responsive and intuitive user interface.</p></li><li>" +
        " <p><strong>CoreUI Angular Admin Panel</strong>: For the admin panel, I leveraged the CoreUI Angular library. This provided a collection of UI components and templates specifically designed for Angular applications. The admin panel facilitated seamless control over the application&#39;s functions, including CRUD operations, and ensured effective connectivity with the Firebase database.</p> </li><li>" +
        "<p><strong>Database Structure with Firebase</strong>: I designed and implemented the database structure using Firebase&#39;s NoSQL database. This choice allowed for efficient data storage, retrieval, and synchronization across multiple devices.</p></li><li>" +
        "<p><strong>Permission System</strong>: Within the admin panel, I implemented a permission system that grants different access levels to users based on their roles. This feature ensures appropriate control and security for the application&#39;s functionalities.</p> </li><li>" +
        "<p><strong>Reporting Functionality</strong>: The admin panel includes reporting capabilities, enabling administrators to generate detailed reports about the application&#39;s usage, user behavior, and other relevant metrics. This allows for data-driven decision-making and monitoring of key performance indicators.</p> </li> <li>" +
        "<p><strong>App Notifications</strong>: I integrated a notification system into the application, enabling users to receive important updates, announcements, or personalized messages. This feature enhances user engagement and facilitates effective communication.</p> </li> </ul>    " +
        "<p>Throughout the development process, I collaborated with a senior developer who provided guidance and expertise. This collaborative effort ensured the incorporation of best practices and the development of a high-quality application. By leveraging the Ionic framework, CoreUI Angular library, Firebase database, and the knowledge shared by the senior developer, we created a powerful application that meets the needs of the Arab community in Turkey, providing comprehensive information and a seamless user experience.</p>"
    },
  ]

};

export default info;
