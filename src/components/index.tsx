import { FC, useState } from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import NotFoundBlock from "./NotFoundBlock.tsx";
import Loader from "./Loader.tsx";
import CardUser from "./CardUser.tsx";
import useGetUserData from "../hooks/useGetUserData.ts";

const Index: FC = () => {
  const { fetchData, isLoading, errorMessage, userData, onkeydown } =
    useGetUserData();
  const [valueInput, setValueInput] = useState("");

  return (
    <div className="main__page">
      <div className="wrapper_search">
        <input
          type="text"
          value={valueInput}
          placeholder="Enter name user.."
          onChange={(e) => setValueInput(e.target.value)}
          className="search__input"
          autoFocus
          spellCheck={false}
          onKeyDown={(e) => onkeydown(e, valueInput)}
        />
        <button className="search__btn" onClick={() => fetchData(valueInput)}>
          <AiOutlineSearch />
        </button>
      </div>
      {errorMessage && <NotFoundBlock message={errorMessage} />}
      {isLoading && <Loader />}
      {Object.keys(userData).length > 0 && <CardUser user={userData} />}
    </div>
  );
};

export default Index;
