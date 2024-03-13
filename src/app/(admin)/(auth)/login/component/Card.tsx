'use client'

import React from 'react'
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from 'formik'
import axios, { AxiosError } from 'axios'
import { baseUrl } from '@/app/utils/databases'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

const validationSchema = yup.object().shape({
  usernameOrEmail: yup.string().required('name Cannot be Empty').min(6),
  password: yup
    .string()
    .required('length Password minimum  8 character')
    .min(1),
});

const CardLogin = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: ""
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post(`${baseUrl}/user/login`, {
          usernameOrEmail: values.usernameOrEmail,
          password: values.password,
        })
        toast.success("Login Success", {
          duration: 4000,
        });
        router.push("/dashboard")
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          alert(errorMsg);
        }
      }
    }
  })
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">
          Sign in SNB
        </CardTitle>
        <CardDescription className="text-center">
          Enter your email and password to login
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Toaster />
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email"
              placeholder="Enter Your mail"
              required
              name="usernameOrEmail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.usernameOrEmail}
            />
            {formik.errors.usernameOrEmail && formik.touched.usernameOrEmail && (
              <div className='text-yellow-500 text-xs italic'>{formik.errors.usernameOrEmail}</div>
            )}
          </div>
          <div className="grid gap-2 my-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password"
              placeholder="Enter Your Name"
              required
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password && (
              <div className='text-yellow-500 text-xs italic'>{formik.errors.password}</div>
            )}
          </div>

          <Button className="w-full bg-based1" type='submit'>Login</Button>
        </form>

      </CardContent>
      <CardFooter className="flex flex-col">
        <p className="mt-2 text-xs text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <span className=" text-blue-600 hover:underline">
            Sign up
          </span>
        </p>
      </CardFooter>
    </Card>
  )
}

export default CardLogin