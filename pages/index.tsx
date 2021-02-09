import styled from "styled-components";
import BasicLayout from "../layout/Basic";
import { TitlePage } from "@giglio-com/react-uikit";
import { Button } from "@giglio-com/react-uikit";

const Home = () => {
  return (
    <BasicLayout>
      <button>Button originale ha altro colore</button>

      <TitlePage>Prova titolo importato</TitlePage>
      <Button
        handleClick={() => console.log("il bottone funziona")}
        variant="primary"
      >
        prova funzione passata
      </Button>
    </BasicLayout>
  );
};

export default Home;
