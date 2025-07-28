import React, { useContext } from "react";
import Image from "../../components/Image";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import { useSelector } from "react-redux";
import { userContext } from "../../App";

export default function UserAccount() {
  return (
    <div>
      <Link
        to="/signup"
        className="bg-primaryColor p-2 rounded-lg font-bold animate-pulse"
      >
        signup
      </Link>
    </div>
  );
}
