import React, { useContext } from "react";
import Image from "../../components/Image";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { useSelector } from "react-redux";
import { userContext } from "../../App";

export default function UserAccount() {
  const token = window.localStorage.getItem("token");
  const api = import.meta.env.VITE_API;
  const { setAuthor, author } = useContext(userContext);
  const fetcher = (url: string) =>
    axios.get(url).then((res) => setAuthor(res.data[0]));
  const { data, error, isLoading } = useSWR(
    `${api}user/usertoken/${token}`,
    fetcher
  );
  function logout() {
    window.localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div>
      {data ? (
        <details>
          <summary className="size-10 rounded-full overflow-hidden bg-gradient-to-r from-secondaryColor to-fadedColor list-none">
            <abbr title={author.username}>
              <Image path={author.profilePics} />
            </abbr>
          </summary>
          <button onClick={logout}>logout</button>
        </details>
      ) : (
        <Link
          to="/signup"
          className="bg-primaryColor p-2 rounded-lg font-bold animate-pulse"
        >
          signup
        </Link>
      )}
    </div>
  );
}
