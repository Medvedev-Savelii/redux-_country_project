import { clearControls } from "../store/controls/controls-actions";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { ThemeSwitcher } from "../features/theme/ThemeSwitcher";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const Header = () => {
  const dispatch = useDispatch();
  const clearApp = () => dispatch(clearControls());

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={clearApp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
