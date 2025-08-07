interface DotProps {
  className: string;
}

export default function Dot({ className }: DotProps) {
  return (
    <div
      className={`absolute w-[20px] h-[20px] rounded-full animate-bounce ${className}`}
    ></div>
  );
}
