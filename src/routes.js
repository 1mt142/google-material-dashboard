import Dashboard from "@material-ui/icons/Dashboard";
import Language from "@material-ui/icons/Language";
import DashboardPage from "views/Dashboard/Dashboard.js";
import blankPage from "views/BlankPage/blankPage";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  {
    path: "/blank_page",
    name: "Blank Page",
    rtlName: "",
    icon: Language,
    component: blankPage,
    layout: "/admin",
  },
];

export default dashboardRoutes;
