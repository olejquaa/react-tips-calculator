import { GlobalStyle } from "./globalStyles";
import { Form } from "./components/Form/Form";
import { Container } from "./styles";


export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Form />
    </Container >
  );
};