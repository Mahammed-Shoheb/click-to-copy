"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import CopyIcon from "./CopyIcon";

const fieldOrder = [
  "Brand",
  "Trim / Edition",
  "Transmission",
  "Registration year",
  "Fuel type",
  "Kilometers run",
  "Model",
  "Year of Manufacture",
  "Condition",
  "Body type",
  "Engine capacity",
];

export default function Home() {
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    if (value !== "") {
      const updatedWords = [];
      const words = value.trim().split(/\n+/);
      for (let i = 0; i < words.length; i += 2) {
        updatedWords.push(`${words[i]} ${words[i + 1] ?? ""}`);
      }
      const sortedUpdatedWords = updatedWords.sort(
        (a, b) =>
          fieldOrder.indexOf(a.split(":")[0]) -
          fieldOrder.indexOf(b.split(":")[0])
      );
      console.log(updatedWords, sortedUpdatedWords);

      setText(sortedUpdatedWords);
    } else {
      setText([]);
    }
  };

  const handleCopy = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const text = (e.target as HTMLDivElement).innerText;
    navigator.clipboard.writeText(text);
    toast.success("Text  copied to clipboard!");
  };

  return (
    <main className="bg-slate-900 min-h-screen">
      <div className="max-w-5xl mx-auto py-12">
        <div className="px-12 py-4">
          <h1 className="text-xl md:text-3xl lg:text-5xl text-white text-center capitalize font-bold">
            click to copy app
          </h1>
        </div>
        <form className="px-12 py-4">
          <div className="flex flex-col mx-auto mb-4">
            <label
              htmlFor="input"
              className="text-white font-semibold text-lg md:text-xl"
            >
              Kindly paste the block of text :
            </label>
            <textarea
              name="input"
              id="input"
              className="h-20 md:h-32 rounded-md w-full md:w-[70%]"
              onChange={handleChange}
              value={input}
            ></textarea>
          </div>
          <div className="text-right w-full md:w-[70%]">
            <button
              type="reset"
              className="bg-white text-black rounded-md py-2 px-4"
              onClick={() => {
                setInput("");
                setText([]);
              }}
            >
              Reset
            </button>
          </div>
        </form>
        <section className="text-white px-12 py-4">
          <ul className="flex flex-col gap-4 w-[50%]">
            {text?.length > 0 &&
              text.map((item, index) => {
                return (
                  <li key={index} className="inline-flex gap-8 items-center">
                    <span className="text-lg md:text-xl font-semibold">
                      {item.split(":")[0] ?? ""}
                    </span>
                    <span> : </span>
                    {item.split(":")[1] && (
                      <span className="flex gap-2 items-center">
                        <span
                          className="border border-white px-2 py-1 cursor-pointer"
                          onClick={handleCopy}
                        >
                          {item.split(":")[1] ?? ""}
                        </span>
                        <span className="h-8 w-8 grid place-items-center">
                          <CopyIcon />
                        </span>
                      </span>
                    )}
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
    </main>
  );
}
