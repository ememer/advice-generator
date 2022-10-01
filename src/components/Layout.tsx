import React from "react";
import { Helmet } from "react-helmet";
import "./Layout.css";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <Helmet>
          <title>Advice generator app</title>
        </Helmet>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
