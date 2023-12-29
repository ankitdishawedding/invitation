// import React from "react";
// import { Link } from "react-scroll";
// import { NavLink } from "react-router-dom";
// const Navigation = ({ activeStep, setActiveStep }) => {

//   return (
//     <div className="bg-white max-h-[4.4rem] px-6 rounded-t-xl flex justify-center">
//       <ul className="flex relative">
//         <span
//           className={`bg-rose-600 duration-500 ${Menus[activeStep]?.dis} border-4 border-gray-900 h-16 w-16 absolute -top-5 rounded-full`}
//         >
//           <span
//             className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px]
//           rounded-tr-[11px] shadow-myShadow1"
//           ></span>
//           <span
//             className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px]
//           rounded-tl-[11px] shadow-myShadow2"
//           ></span>
//         </span>
//         {Menus.map((menu, i) => (
//           <li key={i} className="w-16 flex justify-center">
//             <Link
//               to={menu.id}
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={500}
//               className="flex flex-col text-center pt-6"
//               onClick={() => setActiveStep(i)}
//             >
//               <span
//                 className={`text-xl cursor-pointer duration-500 ${
//                   i === activeStep && "-mt-6 text-white"
//                 }`}
//               >
//                 <ion-icon name={menu.icon}></ion-icon>
//               </span>
//               <span
//                 className={` ${
//                   activeStep === i
//                     ? "translate-y-4 duration-700 opacity-100"
//                     : "opacity-0 translate-y-10"
//                 } `}
//               >
//                 {menu.name}
//               </span>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Navigation;

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MusicPlayerSlider from "./MusicPlayer";
import CollectionsRoundedIcon from "@mui/icons-material/CollectionsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import {} from "react-scroll";

export default function Navigation({ activeStep, setActiveStep }) {
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    debugger;
    console.log(event, newValue, "newValue");
    const element = document.getElementById(newValue);
    element.scrollIntoView({
      behavior: "smooth",
    });
    setValue(newValue);
    setActiveStep(2);
  };

  const Menus = [
    {
      label: "Home",
      value: "home",
      icon: <HomeRoundedIcon />,
      dis: "translate-x-0",
      id: "home",
    },
    {
      label: "Couple",
      value: "couple",
      icon: <CollectionsRoundedIcon />,
      dis: "translate-x-16",
      id: "couple",
    },
    {
      label: "Events",
      value: "organization",
      icon: <EventNoteRoundedIcon />,
      dis: "translate-x-48",
      id: "organization",
    },
    {
      label: "Location",
      icon: <LocationOnRoundedIcon />,
      dis: "translate-x-64",
      id: "whenwhere",
      value: "whenwhere",
    },
  ];

  return (
    <BottomNavigation
      //   className="w-full h-20 shadow-xl rounded-t-xl bg-red-400 "
      value={value}
      sx={{
        "& .MuiBottomNavigation-root": {
          borderRadius: "10px 10px 0px 0px",
        },
        "& .MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected.Mui-selected":
          {
            color: "#9A2143",
            fontSize: "5px",
            fontFamily: "cursive",
          },
      }}
      onChange={handleChange}
    >
      {/* <Link
          to={menu.id}
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onClick={() => setActiveStep(i)}
        >
        
        </Link> */}
      {Menus.map((menu, i) => (
        <BottomNavigationAction
          key={i}
          label={menu?.label}
          value={menu?.value}
          icon={menu?.icon}
        />
      ))}
    </BottomNavigation>
  );
}
