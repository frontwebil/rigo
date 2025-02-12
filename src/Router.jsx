import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AlertsPage } from "./components/AlertsPage/AlertsPage";
import { WorkedTimePage } from "./components/WorkedTimePage/WorkedTimePage.jsx";
import { SitesPage } from "./components/SitesPage/SitesPage.jsx";
import { SitesInner } from "./components/SitesInner/SitesInner.jsx";
import { PageNotFound } from "./components/InDeveloping/InDeveloping.jsx";
import { WorkersPage } from "./components/WorkersPage/WorkersPage.jsx";
import { WorkersInner } from "./components/WorkersInner/WorkersInner.jsx";
import InsurancePage from "./components/InsurancePage/InsurancePage.jsx";
import { CustomerDetails } from "./components/InsurancePage/СustomerInfo/СustomerDetails.jsx";
import { BankingPage } from "./components/BankingPage/BankingPage.jsx";
import { BankingInnerTime } from "./components/BankingPage/BankingInnerTime.jsx";
import { ActionPage } from "./components/ActionsPage/ActionsPage.jsx";
import { CustomerPage } from "./components/Customer/CustomerPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SitesPage currentPage={{linkTo:'/sites' , names:["sites","All sites"]}}/>,
      },
      {
        path: "/alerts",
        element: <AlertsPage currentPage={{linkTo:'/alerts' , names:["alerts","All alerts"]}}/>,
      },
      {
        path: "/workedTime",
        element: <WorkedTimePage currentPage={{linkTo:'/workedTime' , names:["Worked Time","All Worked Time"]}}/>,
      },
      {
        path: "/sites",
        element: <SitesPage currentPage={{linkTo:'/sites' , names:["sites","All sites"]}}/>,
      },
      {
        path: "/sites/:id",
        element: <SitesInner currentPage={{linkTo:'/sites' , names:["sites","All sites"]}}/>,
      },
      {
        path: "/workers",
        element: <WorkersPage currentPage={{linkTo:'/workers' , names:["workers","All Workers"]}}/>
      },
      {
        path: "/workers/:id",
        element: <WorkersInner currentPage={{linkTo:'/workers' , names:["workers","All Workers"]}}/>,
      },
      {
        path: "/notFound",
        element: <PageNotFound/>
      },
      {
        path: "/insurance",
        element: <InsurancePage currentPage={{linkTo:'/insurance' , names:["Insurance","All Insurance"]}}/>
      },
      {
        path: "/insuranceCustomer/:id",
        element: <CustomerDetails currentPage={{linkTo:'/insurance' , names:["Insurance","All Insurance"]}}/>
      },
      {
        path: "/banking",
        element: <BankingPage currentPage={{linkTo:'/banking' , names:["Banking","All Workers"]}}/>
      },
      {
        path: "/actions",
        element: <ActionPage currentPage={{linkTo:'/actions' , names:["Actions","All Actions"]}}/>
      },
      {
        path: "/customers",
        element: <CustomerPage currentPage={{linkTo:'/customers' , names:["Customers","All Customers"]}}/>
      },
      {
        path: "/banking/WorkedTime/:id",
        element: <BankingInnerTime currentPage={{linkTo:'/banking' , names:["Banking","All Workers","WorkedTime"]}}/>
      },
    ],
  },
]);
