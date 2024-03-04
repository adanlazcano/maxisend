import { HTMLProps, memo } from "react";

interface IButton {
  title: string;
  className: HTMLProps<HTMLElement>["className"];
}

const Button = memo(({ title, className }: IButton) => {
  return <button className={className}>{title}</button>;
});

export default Button;
