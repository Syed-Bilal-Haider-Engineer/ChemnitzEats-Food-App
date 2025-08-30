import { ComponentType, FC } from "react";
import { Pizza } from "../data/menu-items";
import { useAppSelector } from "../store/hooks";
import { CartItem, selectQuantityPerItem } from "../store/cartSlice";
import { MenuItemProps } from "./MenuItem";

type WithQuantityProps = {
  item: Pizza;
};

export function withQuantityHOC(Component: ComponentType<MenuItemProps>) {
  const WithQuantityComponent: FC<WithQuantityProps> = ({ item }) => {
    const quantity = useAppSelector(selectQuantityPerItem(item));
    const itemWithQuantity: CartItem = { ...item, quantity };
    return <Component  item={itemWithQuantity}/>;
  };

  return WithQuantityComponent;
}
