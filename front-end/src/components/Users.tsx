import { useEffect } from "react";
interface PropUser {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const Users = ({ setCurrentPage }: PropUser) => {
  useEffect(() => {
    setCurrentPage(3);
  });

  return (
    <div>
      <p> página Users </p>
    </div>
  );
};
export default Users;
