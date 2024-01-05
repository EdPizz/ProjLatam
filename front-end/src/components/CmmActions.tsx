import { useEffect } from "react";
interface PropCMM {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CmmActions = ({ setCurrentPage }: PropCMM) => {
  useEffect(() => {
    setCurrentPage(5);
  });

  return (
    <div>
      <p> página CMM Actions </p>
    </div>
  );
};
export default CmmActions;
