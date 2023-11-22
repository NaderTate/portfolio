"use client";
import { NextUIProvider as Next_UI_Provider } from "@nextui-org/system";

type Props = { children: React.ReactNode };

const NextUIProvider = ({ children }: Props) => {
  return <Next_UI_Provider>{children}</Next_UI_Provider>;
};

export default NextUIProvider;
