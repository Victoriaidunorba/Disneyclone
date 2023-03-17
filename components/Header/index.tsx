import React from "react";
import { useSession, signIn } from "next-auth/react";
import { Nav, Logo, LoginContainer, Login } from "./styles";
import SignedInHeader from "./signedInHeader";

function Header() {
  const { data: session, status } = useSession();

  const renderHeader = () => {
    if (session) return <SignedInHeader session={session} />;
    return (
      <LoginContainer>
        <Login onClick={() => signIn()}>Login</Login>
      </LoginContainer>
      
    );
  };

  return (
    <div>
    <Nav>
      <Logo
        src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
        alt="Disney Logo"
      />
      {renderHeader()}
    </Nav>
    </div>
  );
}

export default Header;