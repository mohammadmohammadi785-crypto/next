import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import React from "react";

export default function page() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Card className="mt-20 w-9/12">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="" className=" flex flex-col gap-4">
            <div>
              <Input type="email" placeholder="Enter your Email" />
            </div>
            <Input type="password" placeholder="Enter your Password" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
