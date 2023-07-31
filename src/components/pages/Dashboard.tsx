import Navbar from "components/organisms/Navbar";
import TableContainer from "components/organisms/TableContainer";
import { useFetch } from "hooks/useFetch";

import { IInvoice } from "interfaces/invoice.interface";

const Dashboard = () => {
  const { data, error } = useFetch<IInvoice[]>("/api/invoices");

  return (
    <>
      <Navbar />
      {data && <TableContainer data={data} />}
    </>
  );
};

export default Dashboard;
