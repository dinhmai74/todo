import React from "react";

interface TodoProps {
  text: string;
}

export const Todo: React.FC<TodoProps> = ({ text }) => {
  return <div className="text-xl">{text}</div>;
};
