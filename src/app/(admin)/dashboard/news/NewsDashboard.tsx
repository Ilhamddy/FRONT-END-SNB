"use client"
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useNews from "@/hooks/getNews";
import { BoxIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import ButtonNews from "./component/buttonDelete";
import ButtonDelete from "./component/buttonDelete";
import ButtonEdit from "./component/buttonEdit";
import { INews } from "@/types/news";
import { FaUser } from "react-icons/fa6";

interface INewsDelete {
  newsId: number;
}



const NewsDashboard = () => {
  const news = useNews();



  return (
    <div className="flex flex-col">
      <Toaster />
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
        <Link className="lg:hidden" href="#">
          <BoxIcon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="h-8 w-8 rounded-full border border-gray-200 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <FaUser />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold md:text-2xl">Users</h1>
          <Link href={'/dashboard/create-news'}>
            <Button className="ml-auto" size="sm">
              Add News
            </Button>
          </Link>
        </div>
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            {news.map((data, index) => {
              return (
                <TableBody key={index}>
                  <TableRow>
                    <TableCell>
                      {data.id}
                    </TableCell>
                    <TableCell className="font-medium md:w-[250px]">
                      {data.title}
                    </TableCell>
                    <TableCell>{data.description}</TableCell>
                    {/* <TableCell>{data.category}</TableCell> */}
                    <TableCell className="text-right">
                      <div className="my-2">
                        <ButtonEdit data={data} />
                      </div>
                      <ButtonDelete data={data} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      </main>
    </div>
  )
}

export default NewsDashboard