import React, { useRef, FC } from "react";

import {
  FormActionContainer,
  InputArea,
  Label,
  Input,
} from "../styles/estilos";

const inputActionHandler = (str:string) => {
  setAction
}

interface ComponentInterface {
  name: Function;
  setAction: Function;
  action: ActionType[];
}
const FormAction: FC<ComponentInterface> = ({setAction, action }) => {
  const ref = useRef();
  return (
    <FormActionContainer ref={ref}>
      <InputArea>
        <Label> Cadastro de nova atividade </Label>
        <Input value={description} placeholder="bla bla" autoFocus onChange={e => inputActionHandler(e.target.value)} onKeyDown={e => addAction(e)}/>
      </InputArea>
    </FormActionContainer>
  );
};

export default FormAction;
