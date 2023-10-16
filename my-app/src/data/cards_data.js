import { HiArrowNarrowDown } from "react-icons/hi";
import { HiArrowNarrowUp } from "react-icons/hi";
import earning from "../image/earning.png";
import orders from "../image/orders.png";
import balance from "../image/balance.png";
import totalsales from "../image/totalsales.png";

const cards = [
    {
      title: "Earning",
      image: earning,
      amount: "$198k",
      date: "this month",
      percent: "37.8% ",
      color: "#00ce00",
      icon: <HiArrowNarrowUp />,
    },
    {
      title: "Orders",
      image: orders,
      amount: "$2.4k",
      date: "this month",
      percent: "2% ",
      color: "red",
      icon: <HiArrowNarrowDown />,
    },
    {
      title: "Balance",
      image: balance,
      amount: "$2.4k",
      date: "this month",
      percent: "2% ",
      color: "red",
      icon: <HiArrowNarrowDown />,
    },
    {
      title: "Total Sale",
      image: totalsales,
      amount: "$89k",
      date: "this week",
      percent: "11% ",
      color: "#00ce00",
      icon: <HiArrowNarrowUp />,
    },
  ];
  export default cards;