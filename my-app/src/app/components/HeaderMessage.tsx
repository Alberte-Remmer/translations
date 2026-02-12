import { ReactNode } from "react";

type HeaderMessageProps = {
  title: string;
  text: ReactNode;
};

export default function HeaderMessage({ title, text }: HeaderMessageProps) {
  return (
   <div className="flex justify-center mb-12">
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-zinc-600">{text}</p>
        </div>
        <div className="mt-6 h-px w-full bg-zinc-200" />
      </div>
    </div>
  );
}