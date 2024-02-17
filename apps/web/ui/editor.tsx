"use client";

import { useRef, useState } from "react";
import { Editor as NovelEditor } from "novel-plus";
import clsx from "clsx";

export default function Editor() {
  const inputRef = useRef(null);
  const [saveStatus, setSaveStatus] = useState("Saved");
  const [show, setShow] = useState(true);

  return (
    <div className="relative w-full max-w-screen-lg">
      <div className="absolute right-5 top-5 z-10 mb-5   text-sm text-stone-400">
        <div className="mb-3 rounded-lg bg-stone-100 px-2 py-1">
          {saveStatus}
        </div>
        <button
          className="rounded-lg bg-stone-100 px-2 py-1"
          onClick={() => {
            setShow((prevShow) => {
              if (!prevShow && inputRef?.current) {
                // Set the cursor to position 10
                inputRef?.current?.commands?.focus(10);
              }
              return !prevShow;
            });
          }}
        >
          {!show ? "Show" : "Hide"} editor
        </button>
      </div>
      <NovelEditor
        ref={inputRef}
        className={clsx(show ? "display" : "hidden")}
        onUpdate={() => {
          setSaveStatus("Unsaved");
        }}
        onDebouncedUpdate={() => {
          setSaveStatus("Saving...");
          // Simulate a delay in saving.
          setTimeout(() => {
            setSaveStatus("Saved");
          }, 500);
        }}
      />
    </div>
  );
}
