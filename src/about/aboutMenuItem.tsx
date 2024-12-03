import "./aboutMenu.css";

import classNames from "classnames";

interface AboutMenuItemProps {
  title: string;
  active: boolean;
  onClick: () => void;
}

const AboutMenuItem = ({ title, active, onClick }: AboutMenuItemProps) => {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default AboutMenuItem;
