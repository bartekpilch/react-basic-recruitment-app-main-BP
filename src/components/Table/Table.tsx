import {
  Box,
  Button,
  ButtonProps,
  Grid,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Typography,
} from "@mui/material";
import { CSSProperties, FC, ReactElement } from "react";
import { TableRow } from "./TableRow";
import { ModelWithId } from "../../types/table.types";

export type TableColumn<Model> = {
  id: string;
  label: string;
  value: keyof Model | ReactElement;
  textAlign?: CSSProperties["textAlign"];
};

type TableProps<Model extends ModelWithId> = {
  columns: TableColumn<Model>[];
  items: Model[];
  title: string;
  ButtonProps?: Pick<ButtonProps, "children" | "onClick">;
};

export const Table: FC<TableProps<any>> = ({
  columns,
  items,
  title,
  ButtonProps,
}) => {
  return (
    <Box sx={{ boxShadow: 3 }}>
      {/*TODO: style to match designs*/}
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "space-between",
          verticalAlign: "middle",
          flexWrap: "wrap",
          background: "#202020",
          color: "#ffffff",
          p: 2,
          borderRadius: 0,
        }}
      >
        <Typography>{title}</Typography>

        {ButtonProps == undefined && (
          <Button
            variant={"contained"}
            sx={{
              p: 0,
              pl: 2,
              pr: 2,
              fontWeight: 0.5,
            }}
          >
            Add sport
          </Button>
        )}
      </Paper>

      <TableContainer>
        <MuiTable sx={{ background: "#ffffff" }}>
          <TableHead>
            <MuiTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  sx={{ textAlign: column.textAlign || "left" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </MuiTableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id} item={item} columns={columns} />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
};
