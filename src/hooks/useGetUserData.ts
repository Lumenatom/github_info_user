import axios from "axios";
import { useState } from "react";
import { UserProps } from "../types/types.ts";

const useGetUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState<UserProps>({});

  const fetchData = async (name: string) => {
    setErrorMessage("");
    setUserData({});
    setIsLoading(true);
    await axios
      .get(`https://api.github.com/users/${name}`, {
        method: "GET",
        headers: {
          Authorization:
            "token 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",
        },
      })
      .then((res) => {
        setUserData({
          avatar_url: res.data.avatar_url,
          login: res.data.login,
          name: res.data.name,
          bio: res.data.bio,
          html_url: res.data.html_url,
        });
      })
      .catch((res) => setErrorMessage(res.response.data.message))
      .finally(() => setIsLoading(false));
  };
  const onkeydown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    name: string,
  ): void => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      fetchData(name);
    }
  };

  return { fetchData, isLoading, errorMessage, userData, onkeydown };
};

export default useGetUserData;
