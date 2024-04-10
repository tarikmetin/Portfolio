import nutricount from "../images/nutricount.jpg";
import portfolio from "../images/portfolio.jpg";
import scheduler from "../images/scheduler.jpg";

export const projectList = [
  {
    projectName: "Nutricount",
    description:
      "This was my first project where I managed to turn an idea to a working app. All you need to do is type down the ingredients you used in a meal with their quantity, and app calculates the total macronutrients you consumed from that meal. I tried to make interface simple as possible, since simplecity was the thing I searched for this kind of tools, yet I never could find in other websites. ",
    additional:
      "Before starting this project I was really worried about working on the searchbar functionality, which I handled faster than I thought. On the other hand, drawing lines correctly on top of the pie charts as they are changing constantly due to changing states was really tough. Also, I had a huge problem due to giving key of mapped  elements index number instead of using unique characters. ",
    verdict:
      "In overall, this project taught me a lot of things and it was the project that took me out from the tutorial hell I created for myself",

    img: `${nutricount}`,
    libs: ["React", "Chart.js"],
    urlDemo: "https://nutricount.vercel.app/",
    urlGithub: "https://github.com/tarikmetin/Nutricount",
  },
  {
    projectName: "Portfolio",
    description:
      "I am refering to this website I made. Funny enough doing good looking website takes more time than a functional one. I spent days trying to find a color theme. Other hard thing to decide was the dosage of the animations. I believe that there is a very thin line between cheesy and cool when it comes to the website animations. I am hoping I just put the right amount to this portfolio.",

    img: `${portfolio}`,
    libs: ["React", "Framer Motion"],
  },
  {
    projectName: "Scheduler",
    description:
      "This one is my first full stack application I have done completely from scratch. I used MERN stack to build it. Simply put, it is a calendar application where you can register your upcoming appointments. It also tracks your customers with their appointment history. It is mainly built for people who need to register upcoming appointments and want to keep track of their customers' past appointments. ",
    additional:
      "Main challanges for this application in frontend was to use FullCalendar to build the calendar section. I don't know why, but I had hard time figuring out their doc files. As you may know forms in React give hard times, so I used React Hook Form and it made whole process trivial. After building the whole app I decided to do use Tanstack/React Query for the data fetching from the API. I wished that I started to build the app using this library in that point, because I had some hard time changing the fetch code from that point, but I am glad I did because data caching option blowed my mind helping me to avoid unnecessary client side get requests.",
    verdict:
      "I feel like the app nowhere nearby to have real commercial value, but I am so happy I pushed myself almost one month nonstop to make it work as it is working currently. I learnt so much from this project that I finally understand why people saying best thing to improve yourself is to build a full stack app. For more detail please check the github page.",

    img: `${scheduler}`,
    libs: ["React", "FullCalendar", "Tanstack", "React Hook Form"],
    urlDemo: "https://scheduler-client.onrender.com/",
    urlGithub: "https://github.com/tarikmetin/scheduler-client",
  },
];
