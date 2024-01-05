import { useEffect } from "react";
interface PropProd {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Products = ({ setCurrentPage }: PropProd) => {
  useEffect(() => {
    setCurrentPage(2);
  });

  return (
    <div>
      <p> página Products </p>
    </div>
  );
};
export default Products;
