import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

// import img1 from '../assets/images/loggo.webp'
// import img2 from '../assets/images/bayc.webp'
// import img3 from '../assets/images/pharaoh.webp'
import img4 from '../assets/images/pudgy.webp'
// import img5 from '../assets/images/usdc.webp'
// import img6 from '../assets/images/wstETH.webp'
// import img7 from '../assets/images/weeth.svg'
// import img8 from '../assets/images/ptEzeth.svg'
// import img9 from '../assets/images/ptRsweth.svg'
// import img10 from '../assets/images/ptRsETH.svg'
import { ProgressDemo } from './Progress';

const invoices = [
  {
    id:1,
    invoice: 'Bored Ape Yacht Club',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
    img:img4,
    rate:'80%'
  },
  {
    id:2,
    invoice: 'Pharaoh',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
    img:img4,
    rate:'80%'
  },
  {
    id:3,
    invoice: 'Pudgy Penguins',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
    img:img4,
    rate:'80%'
  },
  {
    id:4,
    invoice: 'USDC',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
    img:img4,
    rate:'80%'
  },
  {
    id:5,
    invoice: 'wstETH',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
    img:img4,
    rate:'80%'
  },
  {
    id:6,
    invoice: 'wstETH',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
    img:img4,
    rate:'80%'
  },
  {
    id:7,
    invoice: 'PT-ezETH',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
    img:img4,
    rate:'80%'  },
  {
    id:8,
    invoice: 'sUSDe',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
    img:img4,
    rate:'80%'
  },
  {
    id:9,
    invoice: 'PT-rsETH',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
    img:img4,
    rate:'80%'
  },
  {
    id:10,
    invoice: 'PT-rswETH',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
    img:img4,
    rate:'80%'
  },
];

export function TableDemo() {
  return (
    <div className='bg-white/5 rounded-2xl flex flex-col justify-center items-center my-7 px-5 py-5'>
      <Table className="rounded-xl w-full text-white">
      <TableHeader>
        <TableRow className='borderRadius rounded-2xl'>
          <TableHead className="w-[100px] cursor-pointer rounded-tl-xl rounded-bl-xl bg-white/10">Collection</TableHead>
          <TableHead className='cursor-pointer bg-white/10'>Deposits</TableHead>
          <TableHead className='cursor-pointer bg-white/10'>Oracle floor price</TableHead>
          <TableHead className='cursor-pointer bg-white/10'>Interest rate</TableHead>
          <TableHead className='cursor-pointer bg-white/10'>Available borrow</TableHead>
          <TableHead className="text-right cursor-pointer bg-white/10 rounded-tr-xl rounded-br-xl">Rate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium flex flex-row gap-3 items-center cursor-pointer w-[17rem]">
              <section><img src={invoice.img} alt=""  className='w-7 h-7 rounded-full'/>
              </section>
              {invoice.invoice}
            </TableCell>
            <TableCell className='cursor-pointer'>{invoice.paymentStatus}</TableCell>
            <TableCell className='cursor-pointer'>{invoice.paymentMethod}</TableCell>
            <TableCell className='cursor-pointer'>{invoice.paymentMethod}</TableCell>
            <TableCell className='cursor-pointer'>{invoice.totalAmount}</TableCell>
            <TableCell className="text-left flex flex-row items-center gap-3 cursor-pointer">
              <ProgressDemo/>
              {invoice.rate}
              </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
