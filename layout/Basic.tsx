import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components"; // theme.ts
import { DefaultTheme } from "styled-components";
import { ThemeProvider } from "styled-components";

const BasicLayout = ({ children }: { children: any }) => {
  const [theme, useTheme] = useState({
    id: "T_001",
    name: "Light",
    colors: {
      body: "white",
      text: "pink",
      button: {
        text: "#FFFFFF",
        background: "red",
      },
      link: {
        text: "teal",
        opacity: 1,
      },
    },
    font: "Tinos",
  });
  const GlobalStyle = createGlobalStyle`
    body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }

  a {
    color: ${({ theme }) => theme.colors.link.text};
    cursor: pointer;
  }

  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    margin-top: 5px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => theme.font};
  }

  button.btn {
    background-color: ${({ theme }) => theme.colors.button.background};
    color: ${({ theme }) => theme.colors.button.text};
  }
`;

  // useEffect(() => {
  //   fetch("http://localhost:3333/data")
  //     .then((response) => response.json())
  //     .then((data) => useTheme(data));
  // }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </>
  );
};

export default BasicLayout;
