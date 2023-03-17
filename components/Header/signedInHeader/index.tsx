import { Session } from "next-auth";
import { signOut } from "next-auth/react"; 
import React from "react";
import { DropDown, NavMenu, SignOut, UserImg } from "../styles";

interface Props {
  session: Session;
}

function SignedInHeader({ session }: Props) {
  const image = session?.user?.image as string;
  const name = session?.user?.name as string;
  return (
    <>
      <NavMenu>
        <a>
          <img src="https://disney-plus-clone-43569.web.app/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </a>
        <a>
          <img src="https://disney-plus-clone-43569.web.app/images/search-icon.svg" alt="Search icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="https://disney-plus-clone-43569.web.app/images/watchlist-icon.svg" alt="WatchList icon"></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="https://disney-plus-clone-43569.web.app/images/original-icon.svg" alt="Originals icon"></img>
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="https://disney-plus-clone-43569.web.app/images/movie-icon.svg" alt="Movie icon"></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src="https://disney-plus-clone-43569.web.app/images/series-icon.svg" alt="Series icon"></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        {session !== null ? <UserImg src={image} alt={name} /> : null}
        <DropDown>
          <span onClick={() => signOut()}>SignOut</span>
        </DropDown>
      </SignOut>
    </>
  );
}

export default SignedInHeader;