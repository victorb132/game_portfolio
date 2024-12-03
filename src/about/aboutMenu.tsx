import AboutMenuItem from "./aboutMenuItem";
import AboutSubheading from "./aboutSubheading";
import careerIcon from "../assets/triple-corn.png";
import educationIcon from "../assets/upgrade.png";
import personalIcon from "../assets/moebius-triangle.png";
import subheadingsData from "./subheadingsData";
import { useState } from "react";

interface Subheading {
  title: string;
  content: JSX.Element;
}

enum MenuItems {
  PERSONAL = "Pessoal",
  EDUCATION = "Educação",
  CAREER = "Carreira",
}

const AboutMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState<number>(1);
  const [activeSubheading, setActiveSubheading] = useState<number>(1);

  const menuItems = [MenuItems.PERSONAL, MenuItems.EDUCATION, MenuItems.CAREER];
  const activeMenuTitle = menuItems[activeMenuItem - 1];
  const activeMenuIcon =
    activeMenuTitle === MenuItems.PERSONAL
      ? personalIcon
      : activeMenuTitle === MenuItems.EDUCATION
      ? educationIcon
      : careerIcon;

  const subheadings: Subheading[] = subheadingsData[activeMenuItem] || [];

  const handleMenuItemClick = (menuItem: number) => {
    setActiveMenuItem(menuItem);
    setActiveSubheading(1);
  };

  const handleSubheadingClick = (subheading: number) => {
    setActiveSubheading(subheading);
  };

  return (
    <>
      <div className="menu">
        {menuItems.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick(index + 1)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
          <h3>{activeMenuTitle}</h3>
        </div>
        {subheadings.map((subheading, index) => (
          <AboutSubheading
            key={index}
            title={subheading.title}
            content={subheading.content}
            active={activeSubheading === index + 1}
            onClick={() => handleSubheadingClick(index + 1)}
            menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
  );
};

export default AboutMenu;
