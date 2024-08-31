import * as Dialog from "@radix-ui/react-dialog";
import logoImage from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionalModal";
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
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
