import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "../styles/estilos";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import ActionType from "../Tipos/tipos.ts";

interface ComponentInterface {
  activities: ActionType[];
  setActivities: React.Dispatch<React.SetStateAction<ActionType[]>>;
}

const GridAction = ({ activities, setActivities }: ComponentInterface) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th> ATIVIDADES </Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {activities.map((item) => (
          <Tr key={item.id}>
            <Td width="80%">{item.description}</Td>
            <Td width="10%">
              <FaEdit />
            </Td>
            <Td width="10%">
              <FaTrash />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default GridAction;
