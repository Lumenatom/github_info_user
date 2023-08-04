import { FC } from "react";
import { MdSearchOff } from "react-icons/md";

interface NotFoundBlockProps {
  message: string;
}
const NotFoundBlock: FC<NotFoundBlockProps> = ({ message }) => {
  return (
    <div className="wrapper__notFound">
      <MdSearchOff />
      <p>{message} :(</p>
    </div>
  );
};

export default NotFoundBlock;
