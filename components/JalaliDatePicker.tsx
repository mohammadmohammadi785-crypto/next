import React from "react";
import DatePicker from "react-multi-date-picker";
import persien from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Input } from "./ui/input";
export default function JalaliDatePicker({
  dob,
  setDob,
}: {
  dob: any;
  setDob: any;
}) {
  return (
    <DatePicker
      value={dob}
      calendar={persien}
      locale={persian_fa}
      format="YYYY/MM/DD"
      onChange={setDob}
      render={<MyInput />}
    />
  );
}

function MyInput(props: any) {
  const { onOpen, openCalender, ...inputProps } = props;
  return <Input readOnly className="w-full" {...inputProps} />;
}
