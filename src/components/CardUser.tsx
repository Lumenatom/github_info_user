import { UserProps } from "../types/types.ts";
import { FC } from "react";
import { DiGithubFull } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
interface CardUserProps {
  user: UserProps;
}
const CardUser: FC<CardUserProps> = ({ user }) => {
  const { avatar_url, login, name, html_url, bio } = user;
  console.log(bio);
  return (
    <div className="wrapper__card_user">
      <img src={avatar_url} alt="" />
      <div className="main_info_user">
        <h2>{name || login}</h2>
        <p>{bio}</p>
        <a target="_blank" href={html_url} className="link">
          <AiFillGithub />
          <DiGithubFull />
        </a>
      </div>
    </div>
  );
};

export default CardUser;
