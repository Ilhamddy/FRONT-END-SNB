'use client'
import { FaEdit } from "react-icons/fa";
import Image from "next/image";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaTrash, FaUser } from "react-icons/fa6";
import Link from "next/link";
import { BoxIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "@/app/utils/databases";

interface IUser {
  name: string,
  email: string,
  contact: string,
}


const UsersDashboard = () => {
  const [dataUsers, setdataUsrs] = useState<IUser[]>([]);

  const getdataUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/`)
      setdataUsrs(response.data.data)
      console.log(response.data.data);

    } catch (error) {
      console.log('data error');

    }
  }

  useEffect(() => {
    getdataUsers()
  }, [])
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
        <Link className="lg:hidden" href="#">
          <BoxIcon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Users</h1>
          <Button className="ml-auto" size="sm">
            Add user
          </Button>
        </div>
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px]">Id</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            {dataUsers.map((data, index) => {
              return (
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Image
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src="/icon/app.png"
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {data.name}
                    </TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.contact}</TableCell>
                    <TableCell className="text-right">
                      <Button size="icon" variant="ghost">
                        <FaEdit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button size="icon" variant="ghost">
                        <FaTrash className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
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

export default UsersDashboard