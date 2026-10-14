import React from "react";
import { Button } from "./ui/button";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <div className="w-full px-8 py-4 flex justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ThemeSwitcher />
        <Button variant="outline">Login</Button>
      </div>
    </div>
  );
}
