import { useAppContext } from "../../context/AppContext";
import { Products } from "../../interfaces";

interface Props {
  product: Products;
}

export const Card: React.FC<Props> = ({ product }) => {
  const { category, price, title, images } = product;
  const { count, onChangeCount } = useAppContext();

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {category.name}
        </span>
        <img
          src={images[0]}
          alt="headphones"
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          onClick={() => onChangeCount(count + 1)}
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        >
          +
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="font-light text-sm">{title}</span>
        <span className="font-medium text-lg">${price}</span>
      </p>
    </div>
  );
};
