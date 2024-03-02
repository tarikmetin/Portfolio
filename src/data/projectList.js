import nutricount from "../images/nutricount.jpg";
import portfolio from "../images/portfolio.jpg";

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
];
