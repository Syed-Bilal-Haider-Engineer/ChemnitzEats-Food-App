import { useLoaderData } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import MenuItem from "../components/MenuItem";
import { useAppSelector } from "../store/hooks";
import { selectOrderItems } from "../store/ordersSlice";
import { store } from "../store/store";
import { Order as Iorder } from "../store/ordersSlice";
import { onStoreReady } from "../utils/on-store-ready";

export async function orderLoader({ params }: { params: any }) {
  const {orderId} = params;
  await onStoreReady() 
  console.log("Loading order with id", orderId);
  const orderItem = store.getState().orders.items;
  console.log("All orders in store", orderItem);
  const order = orderItem.find(o => o?.id === orderId);
  console.log("Loaded order", order);
  if (!order) throw new Error(`Order not found ${orderId}`);
  return order;
}


const Order = () => {
  const orderItems= useLoaderData() as Iorder
  console.log("findOrderItems==>",orderItems);

  return (
    <div className="my-6">
      <BackBtn to={"/menu"}>Back to menu</BackBtn>
      <h2 className="text-3xl text-center my-4">Order #{orderItems.id}</h2>
      <div className="card bg-base-100 p-2">
        <div className="card-body gap-8">
          <div className="mx-5 card-title">Items</div>
          {orderItems.items.map((item) => {
            return <MenuItem readonly={true} item={item} />;
          })}
          <div className="card-title mx-5 flex justify-between">
            <span>Total:</span> <span>€{orderItems.total}</span>
          </div>
          <div className="card-title mx-5 flex justify-between">
            <span>Paid with:</span> <span>{orderItems.creditCardNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
