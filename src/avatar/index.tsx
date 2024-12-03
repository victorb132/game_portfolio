import "./avatar.css";

import avatarImage from "../assets/avatar-image.png";

interface AvatarProps {
  page: string;
}

const Avatar = ({ page }: AvatarProps) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <>
      <span className={spanClass}></span>
      <img src={avatarImage} className={avatarClass} alt="avatar" />
    </>
  );
};

export default Avatar;
