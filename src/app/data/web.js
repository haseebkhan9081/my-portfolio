import TagFacesIcon from '@mui/icons-material/TagFaces';
import ReactIcon from "../../../public/react.svg";
import NodeIcon from "../../../public/node.svg";
import SocketIcon from "../../../public/bolt-solid.svg";
import JavascriptIcon from '@mui/icons-material/Javascript';
import {TbBrandNextjs} from "react-icons/tb";
import {SiPusher } from "react-icons/si";
import {SiTailwindcss,SiJavascript} from "react-icons/si";
import {GrReactjs} from "react-icons/gr";
import {BiLogoNodejs} from "react-icons/bi";

let web=[{
name:"Messenger-X",
Description:"Messenger-X: Real-time chat app with Pusher messaging, Tailwind UI, and Google/Github auth. Share files, customize profiles, enjoy read receipts, and seamless group/one-on-one messaging. Robust server-side routes empower effortless chat room and channel management",
img:"https://raw.githubusercontent.com/haseebkhan9081/messenger-x/3446a5371c564df61f8cbac109a4dfb892ecb7df/2023-08-01%20(10).png",
link:"https://messenger-x.vercel.app/",
TechUsed:[{name:"Tailwind",icon:<SiTailwindcss size={24} color='sky-blue'/>,color:"#3998b6",bgcolor:'#11182766',},
{name:"Next.js",icon:<TbBrandNextjs size={24} color='white' />,color:"#FFFFFF",bgcolor:'#11182766'},
{name:"Pusher",icon:<SiPusher size={24} color='green' />,color:"#FFFFFF",bgcolor:'#11182766'},
 ],
GithubLink:"https://github.com/haseebkhan9081/messenger-x.git",
},{
name:"Global Keeper App",
Description:"The MERN web app is a full-stack application using the MERN stack. It provides real-time updates via Socket.IO, authentication, authorization, and utilizes a database for data storage.",
img:"https://raw.githubusercontent.com/haseebkhan9081/G-Keeper-App/master/public/GKA.png",
link:"https://keeper-app-nar6.onrender.com",
TechUsed:[{name:"React",icon:<GrReactjs size={24} color='sky-blue'/>,color:"#3998b6",bgcolor:'#11182766',},
{name:"Node",icon:<BiLogoNodejs size={24} color='green'/>,color:"green",bgcolor:'#11182766'},
{name:"Socket.io",icon:<SocketIcon/>,color:"#FFFFFF",bgcolor:'#11182766'},
 ],
GithubLink:"https://github.com/haseebkhan9081/G-Keeper-App",
},
{
    name:"Pacman",
    Description:"Implemented a Pacman game in JavaScript with movement, collision detection, eating, and animation. Utilized object-oriented programming with classes for Pacman and ghosts, and incorporated game logic with map grids. Collaborated with HTML5 canvas for rendering and user interaction.",
    img:"https://raw.githubusercontent.com/haseebkhan9081/Pacman/main/Pacman%20(5).png",
    link:"https://pacman-x5i7.onrender.com/",
    TechUsed:[{name:"JavaScript",icon:<SiJavascript size={24} color='yellow'/>,color:"#F7DF1E",bgcolor:"#11182766"}, ],
    GithubLink:"https://github.com/haseebkhan9081/Pacman.git",
},
     

]

export default web;
