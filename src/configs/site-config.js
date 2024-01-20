import React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Syed Fahad Saif. All Rights Reserved.`,
  author: {
    name: "Syed Fahad Saif",
    accounts: [
      {
        url: "https://github.com/fahitosup",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },

      {
        url: "https://www.linkedin.com/in/syed-fahad-saif-a303b0a4/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },

      {
        url: "mailto:benden143@gmail.com",
        label: "Mail Fahad",
        type: "gray",
        icon: <FiMail />,
      },
    ],
  },
};

export default siteConfig;
