import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"
import { TableDemo2 } from "./TableDemo2"

export function TabsDemo() {
  return (
    <Tabs defaultValue="ERC721" className="w-full flex flex-col justify-center">
      <TabsList className="grid grid-cols-3 w-[40%] self-center">
        <TabsTrigger value="ERC20">ERC20</TabsTrigger>
        <TabsTrigger value="ERC721" defaultChecked>ERC721</TabsTrigger>
        <TabsTrigger value="ERC1155">ERC1155</TabsTrigger>
      </TabsList>
      <TabsContent value="ERC20">
       <TableDemo2 content={'No USDC deposited.'}/>
       <TableDemo2 content={'No USDC deposited.'}/>
       <TableDemo2 content={'No USDC deposited.'}/>
       <TableDemo2 content={'No USDC deposited.'}/>
       <TableDemo2 content={'No USDC deposited.'}/>
       <TableDemo2 content={'No USDC deposited.'}/>
       <TableDemo2 content={'No USDC deposited.'}/>
      </TabsContent>
      <TabsContent value="ERC721">
      <TableDemo2 content={'No USDC deposited.'}/>
       <TableDemo2 content={'No USDC deposited.'}/>
      </TabsContent>
      <TabsContent value="ERC1155">
      <TableDemo2 content={'No USDC deposited.'}/>
      </TabsContent>
    </Tabs>
  )
}
