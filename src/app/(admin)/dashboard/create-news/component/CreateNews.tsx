"use client";
import { baseUrl } from "@/app/utils/databases";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const CreateNews = () => {

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${baseUrl}/news/create-news`, {
          title: values.title,
          description: values.description,
        });
        toast.success("Add succes");
        router.push("/dashboard");
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          toast.error(errorMsg);
        }
      }
    },
  });

  //   useEffect(() => {
  //     createPostNews();
  //   }, []);

  return (
    <section className="bg-third">
      <div className="mx-3 h-full bg-cover py-10 sm:mx-10 md:mx-10">
        <div className="pt-24 sm:mx-10  md:mx-10">
          <Card className="w-full">
            <CardHeader className="space-y-1">
              <CardTitle className="text-4xl">Submit a news post</CardTitle>
              <CardDescription className="text-xl">
                Submit your news post for review by our editorial team.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Toaster />

              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    placeholder="Enter the title"
                    required
                    type="text"
                    name="title"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" placeholder="Select the date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    className="min-h-[200px]"
                    placeholder="Enter the content"
                    required
                    name="description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                  />
                </div>
                  <Button type="submit" className="my-10">Submit</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreateNews;
