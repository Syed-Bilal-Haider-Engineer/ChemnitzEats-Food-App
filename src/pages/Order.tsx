import { useLoaderData } from "react-router-dom";
import BackBtn from "../components/BackBtn";
import MenuItem from "../components/MenuItem";
import { store } from "../store/store";
import { Order as Iorder } from "../store/ordersSlice";
import { onStoreReady } from "../utils/on-store-ready";
import { formatPrice } from "../utils/price-utils";
import { CartItem } from "../store/cartSlice";

export async function orderLoader({ params }: { params: any }) {
  const {orderId} = params;
  await onStoreReady()
  const orderItem = store.getState().orders.items;
  const order = orderItem.find(o => o?.id === orderId);
  if (!order) throw new Error(`Order not found ${orderId}`);
  return order;
}

const Order = () => {
  const orderItems= useLoaderData() as Iorder
  return (
    <div className="my-6">
      <BackBtn to={"/menu"}>Back to menu</BackBtn>
      <h2 className="text-3xl text-center my-4">Order #{orderItems.id}</h2>
      <div className="card bg-base-100 p-2">
        <div className="card-body gap-8">
          <div className="mx-5 card-title">Items</div>
          {orderItems.items.map((item:CartItem) => {
            return <MenuItem readonly={true} item={item} />;
          })}
          <div className="card-title mx-5 flex justify-between">
            <span>Total:</span> <span>€{formatPrice(orderItems.total)}</span>
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
