import {
  Table as TableComponent,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Table = () => {
  return (
    <TableComponent>
      <TableCaption>Caption</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Header 1</TableHead>
          <TableHead>Header 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 3</TableCell>
          <TableCell>Cell 4</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 5</TableCell>
          <TableCell>Cell 6</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 7</TableCell>
          <TableCell>Cell 8</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell 9</TableCell>
          <TableCell>Cell 10</TableCell>
        </TableRow>
      </TableBody>
    </TableComponent>
  );
};
