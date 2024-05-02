import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';


export function TableDemo2({ content }: { content: React.ReactNode }) {
  return (
    <div className='bg-white/5 rounded-2xl flex flex-col justify-center items-center my-7 px-5'>
      <Table className="bg-white/5 rounded-xl my-4">
      <TableHeader className="rounded-xl px-3">
        <TableRow>
          <TableHead className="w-[100px]">Collection</TableHead>
          <TableHead>Deposits</TableHead>
          <TableHead>Oracle floor price</TableHead>
          <TableHead>Interest rate</TableHead>
          <TableHead className="text-right">Available borrow</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full flex justify-center items-center"></TableBody>
      
    </Table>
    <div className='flex flex-row justify-center items-center py-10 text-lg'>No items to display.</div>
    </div>
  );
}
