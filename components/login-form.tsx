"use client";
import React, { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import i18n from "@/i18n/client";
import { login } from "@/action/login.action";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, action, isPending] = useActionState(login, {
    state: false,
    message: "",
  });
  return (
    <Card className="lg:w-3/12">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={action} className=" flex flex-col gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
            {data.errors?.email && (
              <p className="text-red-500 text-sm py-1 px-3">
                {data.errors.email[0]}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="relative"
                placeholder="Enter your Password"
              />
              <div
                className={`absolute ${i18n.language === "en" ? "right-3" : "left-3"} top-3`}
              >
                {showPassword ? (
                  <EyeOff
                    size={18}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <Eye
                    size={18}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </div>
              {data.errors?.password && (
                <p className="text-red-500 text-sm py-1 px-3">
                  {data.errors.password[0]}
                </p>
              )}
            </div>
          </div>
          <Button disabled={isPending} type="submit">
            {isPending ? "siging in...." : "login"}
          </Button>
        </form>
        <CardFooter className="grid gap-2">
          <div className="p-0">
            <span>don't have an account?</span>
            <Link href="/register" className="underline text-blue-500">
              register now
            </Link>
          </div>
          <div>
            <Link href="/" className="underline">
              forgot password
            </Link>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
