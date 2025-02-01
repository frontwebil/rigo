import { useParams } from "react-router-dom";
import { insurance } from "../../../consts/insurance";
import { Search } from "../../Search/Search";
import { CustomerDetailsTable } from "./СustomerDetailsTable";

export function CustomerDetails({ currentPage }) {
  const { id } = useParams();
  const currentAgent = insurance.find((item) => item.tax === id);
  const pageInfo = {
    ...currentPage,
    names: [...currentPage.names, currentAgent.name , 'Details'],
  };
  console.log(pageInfo);

  return (
    <div>
      <Search currentPage={pageInfo} />
      <CustomerDetailsTable currentAgent={currentAgent} />
    </div>
  );
}
