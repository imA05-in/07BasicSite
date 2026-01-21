import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useUserDetails from "../Hook/useUserDetails";
export default function Users() {
  const { user } = useParams();
    const det = useUserDetails(user)
return (
    <>
      <div>
        user: {det.name}
        <br />
        followers: {det.followers}
        <img src={det.avatar_url} className="size-30" alt="" />
      </div>
    </>
  );
}
