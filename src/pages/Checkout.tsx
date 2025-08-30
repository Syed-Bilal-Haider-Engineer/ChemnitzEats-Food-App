import "react-credit-cards-2/dist/es/styles-compiled.css";
import BackBtn from "../components/BackBtn";
import CreditCard from "../components/CreditCard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetCart, selectCartItems, selectTotalPriceInCart } from "../store/cartSlice";
import { createOrderId } from "../utils/order-utils";
import { createOrder } from "../store/ordersSlice";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/price-utils";

const Checkout = () => {

  const cartItems = useAppSelector(selectCartItems);
  const totalPriceInCart: number = useAppSelector(selectTotalPriceInCart)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCardSubmit = (data: any) => {
  const orderId = createOrderId();

  const order = { 
    id: orderId,
    items: cartItems,
    total: totalPriceInCart,
    creditCardNumber: data.number, 
    state: "pending" as const
  };

  dispatch(createOrder(order));
  dispatch(resetCart());
  navigate(`/order/${orderId}`,{replace:true});
};

  return (
    <div className="my-6 ">
      <BackBtn to={"/cart"}>Back to cart</BackBtn>
       <h2 className="text-3xl text-center">Checkout</h2>
      {cartItems.length > 0 ? <div className="grid grid-cols-1 my-4 p-4 md:grid-cols-2 gap-8 card bg-base-300 shadow-xl">
        <section>
          <h2 className="text-2xl w-full text-center mb-4 card-title block">
            Order Summary
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((items,index) =>{
                  return <tr key={index + items.id}>
                   <td>{items?.title}</td>
                   <td>{items?.quantity}</td>
                   <td>{items?.price}</td>
                  </tr>
                })}
                <tr className="font-semibold">
                  <td>Subtotal: </td>
                  <td></td>
                  <td>€{formatPrice(totalPriceInCart)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section>
          <h2 className="text-2xl mb-4 card-title w-full block text-center">
            Payment Details
          </h2>
          <CreditCard onSubmit={handleCardSubmit}/>
        </section>
      </div>:<div className="flex flex-col gap-4 items-center justify-center my-4">
        <h3 className="text-2xl">No items in the cart</h3>
        <img src="https://cdn-icons-png.freepik.com/256/6572/6572867.png?semt=ais_white_label" width={200} height={40}/>
       </div>}
    </div>
  );
};

export default Checkout;
