import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import profile from "../../assets/about/itsMe.jpg";

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatOpen = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen && window.innerWidth <= 767) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // const handleChatOpen = () => {
  //   setIsChatOpen(!isChatOpen);
  //   // if (!isChatOpen) {
  //   //   document.body.style.overflow = "hidden";
  //   // } else {
  //   //   document.body.style.overflow = "auto";
  //   // }
  // };

  const steps = [
    {
      id: "1",
      message: "Welcome to my portfolio! What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4",
    },
    {
      id: "4",
      message: "Are you interested in knowing more about my previous projects?",
      trigger: "interest_options",
    },
    {
      id: "interest_options",
      options: [
        { value: "yes", label: "Yes, I'm Interested!", trigger: "project" },
        { value: "no", label: "No, I'm Not Interested!", trigger: "how_about_skills"},
      ],
    },
    {
      id: "project",
      message: `My previous was a mobile application called [Retriever App]. It was built using the following tech stack:`,
      trigger: "project_tech-stack1",
    },
    {
      id: "project_tech-stack1",
      message:
        " • React Native: A popular framework for building mobile apps, known for its flexibility and performance. It allowed us to develop a seamless cross-platform app that works on both Android and iOS devices.",
      trigger: "project_tech-stack2",
    },
    {
      id: "project_tech-stack2",
      message:
        "• Firebase: A powerful platform for mobile and web applications, providing real-time database capabilities and user authentication. This allowed us to create a dynamic, responsive app with secure user accounts and data storage.",
      trigger: "project_key-features",
    },
    {
      id: "project_key-features",
      message: `The key features of the app included:`,
      trigger: "project_key-features1",
    },
    {
      id: "project_key-features1",
      message:
        "  • User Registration and Authentication: Users could create accounts, log in securely, and access their account information from any device.",
      trigger: "project_key-features2",
    },
    {
      id: "project_key-features2",
      message:
        " • Menu Browsing and Ordering: The app had a user-friendly interface for browsing menus, selecting items, and placing orders.",
      trigger: "project_key-features3",
    },
    {
      id: "project_key-features3",
      message:
        "• Real-Time Updates: The app provided real-time updates on order status and delivery tracking, ensuring a smooth and transparent experience for users.",
      trigger: "project_key-features4",
    },
    {
      id: "project_key-features4",
      message:
        " • Payment Integration: The app integrated with Gcash for online payments, allowing users to make payments online.",
      trigger: "project_summary",
    },
    {
      id: "project_summary",
      message:
        "Overall, the project was a great success, providing a seamless and enjoyable experience for users while helping businesses streamline their food delivery operations.",
      trigger: "how_about_skills",
    },
    {
      id: "how_about_skills",
      message: "how about my skills?",
      trigger: "how_about_skills_options",
    },
    {
      id: "how_about_skills_options",
      options: [
        {
          value: "Yes",
          label: "Sure, go ahead",
          trigger: "skills",
        },
        {
          value: "No",
          label: "No, I'm Not Interested!",
          trigger: "project_in_mind",
        },
      ],
    },
    {
      id: "skills",
      message:
        "I have experience with HTML, CSS, JavaScript, React, Firebase, PHP and MySQL.",
      trigger: "project_in_mind",
    },
    {
      id: "project_in_mind",
      message: "Do you have any project in mind that you'd like to discuss?",
      trigger: "project_in_mind-options",
    },
    {
      id: "project_in_mind-options",
      options: [
        {
          value: "yes",
          label: "Yes, I have a project in mind.",
          trigger: "great_project",
        },
        {
          value: "no",
          label: "Not yet, but I'm open to ideas.",
          trigger: "no_interest",
        },
      ],
    },
    {
      id: "great_project",
      message: "Great! Please tell me more about the project.",
      trigger: "project_description",
    },
    {
      id: "project_description",
      user: true,
      trigger: "response_to_project_description",
    },
    {
      id: "response_to_project_description",
      message:
        "Thank you for sharing! This sounds like an interesting project. Do you have any questions or would you like to discuss working together? ",
      trigger: "work_together_options",
    },
    {
      id: "work_together_options",
      options: [
        {
          value: "yes",
          label: "Yes, I'm interested in working together",
          trigger: "contact_information",
        },
        {
          value: "no",
          label: "No, I just wanted to get some information",
          trigger: "no_interest",
        },
      ],
    },

    {
      id: "contact_information",
      message:
        "Great! I'm excited to team up and bring your project to life! 🚀 Feel free to reach me via email at mantesherwin25@gmail.com or give me a call at +639562368407. Let's get started!",
      end: true,
    },

    {
      id: "no_interest",
      message:
        "Okay, no problem. If you have any other questions or need assistance, feel free to ask! 😉",
      trigger: "feel_free_to_ask",
    },
    {
      id: "feel_free_to_ask",
      message:
        "Reach me via email at mantesherwin25@gmail.com or give me a call at +639562368407.",
      end: true,
    },
  ];

  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#00bfff",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#f2f3f4",
    botFontColor: "#414a4c",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };

  const style = {
    position: "fixed",
    bottom: 0,
    right: 0,
    height: "100%",
    overflow: "hidden",
  };
  const floatingStyle = {
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    zIndex: "1",
  };

  const contentStyle = {
    paddingBottom: "70px",
    height: "90%",
  };

  const inputStyle = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    background: "#ffffff",
    opacity: "1",
  };
  const footerStyle = {
    position: "fixed",
    left: 0,
    bottom: 50,
    transform: 'translate("50%")',
    width: "100%",
    background: "#ffffff",
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true}
        enableSmoothScroll={true}
        style={style}
        floatingStyle={floatingStyle}
        contentStyle={contentStyle}
        inputStyle={inputStyle}
        footerStyle={footerStyle}
        opened={isChatOpen}
        toggleFloating={handleChatOpen}
        botAvatar={profile}
      />
    </ThemeProvider>
  );
};

export default Chatbot;
