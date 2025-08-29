import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Rootlayout from "./Rootlayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Rootlayout/>}>
        <Route index={true} element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkOut" element={<Checkout/>}/>
        <Route path="/order/:orderId" element={<Checkout/>}/>
        </Route>
        </>
    )
)

export default router;