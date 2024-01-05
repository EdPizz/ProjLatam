import { useEffect } from "react";
interface PropHome {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Home = ({ setCurrentPage }: PropHome) => {
  useEffect(() => {
    setCurrentPage(1);
  });

  return (
    <div>
      <p> página Home </p>
    </div>
  );
};
export default Home;
