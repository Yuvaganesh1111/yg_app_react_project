import customer from "../image/customer.png";
import help from "../image/help.png";
import income from "../image/income.png";
import keydash from "../image/keydash.png";
import product from "../image/product.png";
import promote from "../image/promote.png";

const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: keydash,
  },
  {
    path: "/product",
    name: "Product",
    icon: product,
    symbol: ">",
  },
  {
    path: "/customer",
    name: "Customers",
    icon: customer,
    symbol: ">",
  },
  {
    path: "/income",
    name: "Income",
    icon: income,
    symbol: ">",
  },
  {
    path: "/promote",
    name: "Promote",
    icon: promote,
    symbol: ">",
  },
  {
    path: "/help",
    name: "Help",
    icon: help,
    symbol: ">",
  },
];
export default menuItem;
