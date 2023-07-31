import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { IInvoice } from "interfaces/invoice.interface";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

interface IData {
  data: IInvoice[];
}

export default function BasicTable({ data }: IData) {
  // console.log(data);

  // const clients = data.filter(function (este, i) {
  //   console.log(este)
  //   console.log(i)
  //   return data.indexOf(este) === i;
  // });

  const clients = data.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.client === value.client)
  );

  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        { <TableHead>
          <TableRow>
            {/* <TableCell>Nome da UC</TableCell> */}
            <TableCell align="right">Número da UC</TableCell>
            {/* <TableCell align="right">Jan</TableCell>
            <TableCell align="right">Fev</TableCell>
            <TableCell align="right">Mar</TableCell>
            <TableCell align="right">Abr</TableCell>
            <TableCell align="right">Mai</TableCell>
            <TableCell align="right">Jun</TableCell>
            <TableCell align="right">Jul</TableCell>
            <TableCell align="right">Ago</TableCell>
            <TableCell align="right">Set</TableCell>
            <TableCell align="right">Out</TableCell>
            <TableCell align="right">Nov</TableCell>
            <TableCell align="right">Dez</TableCell> */}
          </TableRow>
        </TableHead> }
        <TableBody>
          {clients.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.client}
              </TableCell> */}
              <TableCell align="right">{row.client}</TableCell>

              {data.map((item, key) => (
                <>
                  {item.referencemonth === "janeiro" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "fevereiro" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "março" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "abril" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "maio" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "junho" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "julho" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "agosto" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "setembro" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "outubro" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "novembro" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                  {item.referencemonth === "dezemro" && (
                    <TableCell align="right">{item.referencemonth}</TableCell>
                  )}
                </>
              ))}

              {/* <TableCell align="right">{row.client}</TableCell> */}
              {/* <TableCell align="right">{row.client}</TableCell>
              <TableCell align="right">{row.client}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
