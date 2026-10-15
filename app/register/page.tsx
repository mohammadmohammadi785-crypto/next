"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("userInfo");

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          if (value === "userInfo") {
            setActiveTab("userInfo");
          }
        }}
        className="w-6/12"
      >
        <TabsList className="w-full">
          <TabsTrigger value="userInfo">User Information</TabsTrigger>
          <TabsTrigger value="personalInfo">Personal Information</TabsTrigger>
        </TabsList>
        <TabsContent value="userInfo">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="w-full grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="username">username</Label>
                  <Input type="text" name="name" id="username" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">email</Label>
                  <Input type="text" name="email" id="email" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">password</Label>
                  <Input type="text" name="password" id="password" />
                </div>
                <Button
                  onClick={() => setActiveTab("personalInfo")}
                  className="mt-5.5"
                >
                  Next
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="personalInfo">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="w-full grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" name="name" id="name" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="lastName">lastName</Label>
                  <Input type="text" name="lastName" id="lastName" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">password</Label>
                  <Input type="text" name="password" id="password" />
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
