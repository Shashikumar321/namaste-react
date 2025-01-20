import { useDispatch } from "react-redux";
import { FETCH_ITEM_IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            className="flex justify-between my-3 border-b-2 p-3 pb-8 bg-white rounded-xl"
            key={item.card.info.id}
          >
            <div className="max-w-md">
              <div className="font-bold text-gray-700">
                {item.card.info.name}
              </div>
              <div className="font-bold text-gray-700">
                {"₹ " + item.card.info.price / 100}
              </div>
              <div className="pt-3 font-light text-gray-400">
                {item.card.info.description}
              </div>
            </div>

            <div>
              <button className="absolute bg-gray-50 w-24 h-10 ml-8 mt-32 p-2 bg-gray-20 font-bold text-green-600 shadow-lg rounded-lg "
              onClick={() => handleAddItem(item)}>
                ADD
              </button>
              <img
                className="w-[156px] h-[144px] rounded-xl"
                src={FETCH_ITEM_IMAGE + item.card.info.imageId}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
