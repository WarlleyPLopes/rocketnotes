import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";
import { Button } from "../../components/Button";

export function SingIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder="e-mail" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Entrar" />

        <a href="#">Criar conta</a>
      </Form>

      <Background/>
    </Container>
  );
}