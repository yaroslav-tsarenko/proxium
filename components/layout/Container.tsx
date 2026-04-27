import { cn } from "@/lib/utils/cn";

interface ContainerProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;

  return (
    <Component
      className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </Component>
  );
}
