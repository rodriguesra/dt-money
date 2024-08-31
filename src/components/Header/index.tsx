import logoImage from "../../assets/logo.svg";
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
} from "./styles.ts";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="dt money" />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
