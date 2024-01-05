import React, { useEffect, useState } from "react";
import axios from "axios";
import GridAction from "../components/GridAction.tsx";
import "../Tipos/tipos.js";
import {
  Title,
  FormActionContainer,
  InputArea,
  Label,
  Input,
} from "../styles/estilos";

type ActionType = {
  id: number;
  description: string;
};

const ACTIVITIES: ActionType[] = [
  { id: 0, description: "Adhesive removal" },
  { id: 1, description: "Surface cleaning" },
  { id: 2, description: "Metal cleaning" },
  { id: 3, description: "Metal conservation" },
  { id: 4, description: "Repair of corrosion" },
];

interface PropAction {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Actions = ({ setCurrentPage }: PropAction) => {
  const [activities, setActivities] = useState<ActionType[]>(ACTIVITIES);
  const [description, setDescription] = useState("");

  useEffect(() => {
    setCurrentPage(4);
  }, [setCurrentPage]);

  const addActivity = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      setActivities((): ActionType[] => {
        return activities.concat({
          id:
            activities.length === 0
              ? 0
              : activities[activities.length - 1].id + 1,
          description,
        } as ActionType);
      });
    }
    setDescription(" ");
  };

  return (
    <div>
      <Title> Catálogo de Atividades </Title>

      <GridAction activities={activities} setActivities={setActivities} />

      <FormActionContainer>
        <InputArea>
          <Label> Cadastro de nova atividade </Label>
          <Input
            value={description}
            placeholder="Informe a nova atividade"
            autoFocus
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              addActivity(e)
            }
          />
        </InputArea>
      </FormActionContainer>
    </div>
  );
};
export default Actions;
