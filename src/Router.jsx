import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AlertsPage } from "./components/AlertsPage/AlertsPage";
import { WorkedTimePage } from "./components/WorkedTimePage/WorkedTimePage.jsx";
import { SitesPage } from "./components/SitesPage/SitesPage.jsx";
import { SitesInner } from "./components/SitesInner/SitesInner.jsx";
import { PageNotFound } from "./components/InDeveloping/InDeveloping.jsx";
import { WorkersPage } from "./components/WorkersPage/WorkersPage.jsx";
import { WorkersInner } from "./components/WorkersInner/WorkersInner.jsx";

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

    ],
  },
]);
