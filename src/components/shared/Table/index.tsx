import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
} from "@mui/material";
import Text from "../Text";
import { FaSort } from "react-icons/fa";

interface Props {
  columns?: any;
  onClick?: any;
  showPagination?: boolean;
  children?: JSX.Element;
}

const CustomTable = ({
  columns = [],
  onClick,
  showPagination = true,
  children,
}: Props) => {
  return (
    <>
      <TableContainer className="px-3">
        <Table size="small">
          <TableHead>
            <TableRow className="bg-aliceBlue-1">
              {columns.map(({ id, label }) => (
                <TableCell key={id}>
                  <Text className="flex items-center text-sm font-semibold">
                    {label}
                    <FaSort
                      className="ml-2 text-black cursor-pointer"
                      size={12}
                    />
                  </Text>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {children}
        </Table>
      </TableContainer>
      {showPagination && (
        <TablePagination
          component="div"
          count={10}
          rowsPerPageOptions={[10, 25, 100]}
          rowsPerPage={10}
          page={0}
          onPageChange={() => console.log("Page changed")}
          onRowsPerPageChange={() => console.log("rows per page changed")}
        />
      )}
    </>
  );
};

export default CustomTable;
