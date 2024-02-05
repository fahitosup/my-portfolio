import elghidiya from "assets/images/projects/elghidiya.png";
import instagram from "assets/images/projects/instagram-minimalistic.png";
import parentapp from "assets/images/projects/parentapp.png";
import mail from "assets/images/projects/mail-minimalistic.png";
import souq from "assets/images/projects/souq.png";
import gosave from "assets/images/projects/gosave.png";

export const projectsList = [
  {
    id: 1,
    title: "El-Ghidiya tourism",
    logo: elghidiya,
    blurHash: "L4ADc400P*Zi4Tu1y;Qo00pH#YXl",
    link: "https://el-ghidiya-website.vercel.app.com/",
    desc: `A blogging web app that enables users to participate and communicate in the community of El-Ghidiya.`,
    technologies: ["react", "javascript", "python", "django-rest-framework"],
  },
  {
    id: 2,
    title: "Instagram web app clone",
    // Need to add the link
    link: "https://instagram-social-media-app.vercel.app/",
    logo: instagram,
    blurHash: "L0Aer?tjH[tPyAayj[j[00ay%xkB",
    desc: `This is a minimalistic clone of the Instagram web app allowing users to follow each other, post content and comment on them.`,
    technologies: ["react", "javascript", "node.js", "express", "postgreSQL"],
  },
  /* {
    id: 3,
    title: "Parent exammate monitor app",
    logo: parentapp,
    blurHash: "L2M5%%0000EN00I:-oIp00kC?^sl",
    link: "https://workof.com/",
    desc: `This is a mobile application that monitors progress of students completing a series of tasks such as reading assignments or past exams remotely and also shows their live activity.`,
    technologies: ["react native", "javascript", "aws", "tampermonkey"],
  }, */
  {
    id: 4,
    title: "Minimalistic mail app",
    logo: mail,
    blurHash: "L1O^uE0679I00AGT?.H{00y7p2tK",
    link: "https://instagram-social-media-app.vercel.app/",
    desc: `This is a mail app where users can do basic tasks such as compose emails, store sent emails and archive them. Built entirely with Django.`,
    technologies: ["django"],
  },
];
