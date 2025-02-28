import React from "react";
import Button from "./Button";

export default function Todoinput() {
  return (
    <div className=" mt-5">
      <input
        className="w-full rounded dark:bg-black border border-gray-500 p-1"
        type="text"
        placeholder="Задача"
      />
      <Button
        className="bg-nextBlue text-white mt-2 flex gap-1 items-center"
        textButton="Добавить"
      />
    </div>
  );
}
