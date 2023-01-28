import { Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import About from "./pages/About";
import Admin_login from "./pages/Admin_login";
import User_reg from "./pages/User_reg";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Service from "./pages/Service";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
// Addmin
import Addmenu from "./admin/component/Addmenu";
import Allmenu from "./admin/component/Allmenu";
import Editmenu from "./admin/component/Editmenu";
import Addmain from "./admin/pages/Addmain";
import Dashboard from "./admin/pages/Dashboard";
import Chefs from "./admin/component/Chefs";
import Addchefs from "./admin/component/Addchefs";
import Editchefs from "./admin/component/Editchefs";
import Order from "./pages/Order";
import Orders from "./admin/component/Orders";
import Invoice from "./admin/component/Invoice";
import User_login from "./pages/User_login";
import Alladmin from "./admin/component/Alladmin";
import Addadmin from "./admin/component/Addadmin";
import Editadmin from "./admin/component/Editadmin";
import Alluser from "./admin/component/Alluser";
import Edituser from "./admin/component/Edituser";

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="menu" element={<Menu />} />
        <Route path="contact" element={<Contact />} />
        <Route path="booking" element={<Booking />} />
        <Route path="team" element={<Team />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="user_reg" element={<User_reg />} />
        <Route path="user_log" element={<User_login />} />
        <Route path="admin_log" element={<Admin_login />} />
        <Route path="order" element={<Order />} />
      </Route>
      <Route path="admin" element={<Addmain />}>
        <Route index element={<Dashboard />} />
        <Route path="allmenu" element={<Allmenu />} />
        <Route path="addmenu" element={<Addmenu />} />
        <Route path="editmenu/:id" element={<Editmenu />} />
        <Route path="chefs" element={<Chefs />} />
        <Route path="addchefs" element={<Addchefs />} />
        <Route path="editchefs/:id" element={<Editchefs />} />
        <Route path="editadmin/:id" element={<Editadmin />} />
        <Route path="orders" element={<Orders />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="alladmin" element={<Alladmin />} />
        <Route path="adminentry" element={<Addadmin />} />
        <Route path="alluser" element={<Alluser />} />
        <Route path="edituser/:id" element={<Edituser />} />
      </Route>
    </Routes>
  );
}

export default App;
