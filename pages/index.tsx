import styled from "styled-components";
import BasicLayout from "../layout/Basic";
const StyledButton = styled.button``;

const Home = () => {
  return (
    <BasicLayout>
      <p>hello</p>
      <div>Title</div>
      <StyledButton>Prova button</StyledButton>
    </BasicLayout>
  );
};

export default Home;
