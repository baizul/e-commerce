import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TablePagination,
  TableBody,
  TableRowProps,
  TableCellProps,
} from "@mui/material";
import Text from "../Text";
import { FaSort } from "react-icons/fa";

interface Props extends TableRowProps {
  columns?: any;
  showPagination?: boolean;
  children?: JSX.Element;
  page?: number;
  count?: number;
  handleChangePage?: (eventName: any, newPage: any) => void;
  handleRowsChange?: (event: any) => void;
  rows?: number;
  showUpload?: boolean;
  onAddDocument?: () => void;
  showSort?: boolean;
  otherCellProperties?: any;
}

const CustomTable = ({
  columns = [],
  showPagination = true,
  children,
  page,
  showSort = true,
  otherCellProperties = {},
  count,
  handleChangePage,
  handleRowsChange,
  rows,
  showUpload = false,
  onAddDocument,
  ...rest
}: Props) => {
  return (
    <>
      <TableContainer className="px-3 overflow-y-auto h-86">
        <Table size="small">
          <TableHead>
            <TableRow {...rest} >
              {columns.map(({ id, label }) => (
                <TableCell key={id}>
                  <Text className="flex md:!font-mulish md:!text-xl items-center text-xs font-semibold">
                    {label}
                    {showSort && (
                      <FaSort
                        className="ml-2 text-black cursor-pointer"
                        size={12}
                      />
                    )}
                  </Text>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {children}
        </Table>
      </TableContainer>
      {showPagination && (
        <div className="border-t-0.3 mx-6 flex justify-between">
          {showUpload && (
            <Text
              onClick={onAddDocument}
              className="mt-3 text-sm font-semibold underline cursor-pointer text-nero font-mulish"
            >
              + Add Document
            </Text>
          )}
          <TablePagination
            component="div"
            className="ml-auto"
            count={count}
            rowsPerPageOptions={[
              { label: "1", value: 1 },
              { label: "2", value: 2 },
              { label: "3", value: 3 },
            ]}
            rowsPerPage={rows}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleRowsChange}
          />
        </div>
      )}
    </>
  );
};

export default CustomTable;
