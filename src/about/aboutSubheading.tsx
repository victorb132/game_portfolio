import "./aboutMenu.css";

import classNames from "classnames";

interface AboutSubheadingProps {
  title: string;
  content: JSX.Element;
  active: boolean;
  onClick: () => void;
  menuItem: number;
}

const AboutSubheading = ({
  title,
  content,
  active,
  onClick,
  menuItem,
}: AboutSubheadingProps) => {
  const subContainerClass = `sub-container-${menuItem}`;

  return (
    <div
      className={classNames(subContainerClass, { "active-subheading": active })}
    >
      <h3 onClick={onClick}>{title}</h3>
      <div className="p-container">{content}</div>
    </div>
  );
};

export default AboutSubheading;
