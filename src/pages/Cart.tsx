import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import { useAppSelector } from "../store/hooks";
import { selectCartItems, selectTotalPriceInCart } from "../store/cartSlice";
import MenuItem from "../components/MenuItem";
import { formatPrice } from "../utils/price-utils";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems)
  const totalPriceInCart: number = useAppSelector(selectTotalPriceInCart)
  return (
    <div className="my-6 flex flex-col items-center gap-2">
      <BackBtn to={"/menu"}>Back to menu</BackBtn>
      <h2 className="text-3xl">Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <ul className="my-4 w-full flex flex-col gap-4">
           {cartItems.map((item,index) =>{
              return <>
              <li key={`${index}-${item.id}`}>
                <MenuItem item={item}/>
              </li>
              </>
           })}
          </ul>
          <div className="flex text-2xl px-4 w-full font-semibold items-center justify-between">
            <span>Total Amount</span>
            <span className="text-primary">€{formatPrice(totalPriceInCart)}</span>
          </div>
          <Link to={"/checkout"} className="btn btn-primary w-44">
            Checkout
          </Link>
        </>
      ) : (<>
       <div className="flex flex-col gap-4 items-center justify-center my-4">
        <h3 className="text-2xl">No items in the cart</h3>
        <img src="https://cdn-icons-png.freepik.com/256/6572/6572867.png?semt=ais_white_label" width={200} height={40}/>
       </div>
      </>
      )}
    </div>
  );
};

export default Cart;
