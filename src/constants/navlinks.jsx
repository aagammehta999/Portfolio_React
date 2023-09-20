import * as FaIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
export const navlinks = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "About",
  },
  {
    id: 3,
    title: "Projects",
  },
  {
    id: 4,
    title: "Contact",
  },
];

export const projectData = [
  {
    id: 1,
    title: "Ecommerce  Website ",
    description:
      "Build a ecommerce Website based on Django which has all the functionalities and payment integration ",
    icons: [
      {
        iconName1: <FaIcons.FiFolder size="2.5rem" color="#DEBCEE" />,

        iconName2: (
          <BsIcons.BsGithub
            size="2rem"
            color="#DEBCEE"
            className="mr-3 cursor-pointer hover:text-white hover:translate-y-[-2px]"
            // onClick={}
          />
        ),

        iconName3: (
          <BiIcons.BiLinkExternal
            size="2rem"
            color="#DEBCEE "
            className="cursor-pointer hover:translate-y-[-2px]"
          />
        ),
      }
    ],
    tech: [
      {
        id: 1001,
        title: "DJANGO",
      },
      {
        id: 1002,
        title: "BOOTSTRAP",
      },
      {
        id: 1003,
        title: "SMTP",
      },
    ],
  },
  {
    id: 2,
    title: "To Do App",
    description:
      "Build a TODO App based on react and basic app",
    icons: [
      {
        iconName1: <FaIcons.FiFolder size="2.5rem" color="#DEBCEE" />,

        iconName2: (
          <BsIcons.BsGithub
            size="2rem"
            color="#DEBCEE"
            className="mr-3 cursor-pointer hover:text-white hover:translate-y-[-2px]"
          />
        ),

        iconName3: (
          <BiIcons.BiLinkExternal
            size="2rem"
            color="#DEBCEE "
            className="cursor-pointer hover:translate-y-[-2px]"
          />
        ),
      },
    ],
    tech: [
      {
        id: 1001,
        title: "HTML",
      },
      {
        id: 1002,
        title: "CSS",
      },
      {
        id: 1003,
        title: "REACT",
      },
    ],
  },
  {
    id: 3,
    title: "Booking  Application ",
    description:
      "This app lets you to book itenaries for staycation Just Similar like Airbnb  ",
    icons: [
      {
        iconName1: <FaIcons.FiFolder size="2.5rem" color="#DEBCEE" />,

        iconName2: (
          <BsIcons.BsGithub
            size="2rem"
            color="#DEBCEE"
            className="mr-3 cursor-pointer hover:text-white hover:translate-y-[-2px]"
          />
        ),

        iconName3: (
          <BiIcons.BiLinkExternal
            size="2rem"
            color="#DEBCEE "
            className="cursor-pointer hover:translate-y-[-2px]"
          />
        ),
      },
    ],
    tech: [
      {
        id: 1001,
        title: "REACT",
      },
      {
        id: 1002,
        title: "NODE",
      },
      {
        id: 1003,
        title: "VITE",
      },
    ],
  },
  // {
  //   id: 1,
  //   title: "Weather Application ",
  //   description:
  //     "Integrated APIs from weather services such as OpenWeatherMap to retrieve up-to-date information on temperature, wind, humidity, and other weather-related data.",
  //   icons: [
  //     {
  //       iconName1: <FaIcons.FiFolder size="2.5rem" color="#DEBCEE" />,

  //       iconName2: (
  //         <BsIcons.BsGithub
  //           size="2rem"
  //           color="#DEBCEE"
  //           className="mr-3 cursor-pointer hover:text-white hover:translate-y-[-2px]"
  //         />
  //       ),

  //       iconName3: (
  //         <BiIcons.BiLinkExternal
  //           size="2rem"
  //           color="#DEBCEE "
  //           className="cursor-pointer hover:translate-y-[-2px]"
  //         />
  //       ),
  //     },
  //   ],
  //   tech: [
  //     {
  //       id: 1001,
  //       title: "React",
  //     },
  //     {
  //       id: 1002,
  //       title: "Bootstrap",
  //     },
  //     {
  //       id: 1003,
  //       title: "vite",
  //     },
  //   ],
  // },
  // {
  //   id: 2,
  //   title: "Weather Application ",
  //   description:
  //     "Integrated APIs from weather services such as OpenWeatherMap to retrieve up-to-date information on temperature, wind, humidity, and other weather-related data.",
  //   icons: [
  //     {
  //       iconName1: <FaIcons.FiFolder size="2.5rem" color="#DEBCEE" />,

  //       iconName2: (
  //         <BsIcons.BsGithub
  //           size="2rem"
  //           color="#DEBCEE"
  //           className="mr-3 cursor-pointer hover:text-white hover:translate-y-[-2px]"
  //         />
  //       ),

  //       iconName3: (
  //         <BiIcons.BiLinkExternal
  //           size="2rem"
  //           color="#DEBCEE "
  //           className="cursor-pointer hover:translate-y-[-2px]"
  //         />
  //       ),
  //     },
  //   ],
  //   tech: [
  //     {
  //       id: 1001,
  //       title: "React",
  //     },
  //     {
  //       id: 1002,
  //       title: "Bootstrap",
  //     },
  //     {
  //       id: 1003,
  //       title: "vite",
  //     },
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Weather Application ",
  //   description:
  //     "Integrated APIs from weather services such as OpenWeatherMap to retrieve up-to-date information on temperature, wind, humidity, and other weather-related data.",
  //   icons: [
  //     {
  //       iconName1: <FaIcons.FiFolder size="2.5rem" color="#DEBCEE" />,

  //       iconName2: (
  //         <BsIcons.BsGithub
  //           size="2rem"
  //           color="#DEBCEE"
  //           className="mr-3 cursor-pointer hover:text-white hover:translate-y-[-2px]"
  //         />
  //       ),

  //       iconName3: (
  //         <BiIcons.BiLinkExternal
  //           size="2rem"
  //           color="#DEBCEE "
  //           className="cursor-pointer hover:translate-y-[-2px]"
  //         />
  //       ),
  //     },
  //   ],
  //   tech: [
  //     {
  //       id: 1001,
  //       title: "React",
  //     },
  //     {
  //       id: 1002,
  //       title: "Bootstrap",
  //     },
  //     {
  //       id: 1003,
  //       title: "vite",
  //     },
  //   ],
  // },
];
