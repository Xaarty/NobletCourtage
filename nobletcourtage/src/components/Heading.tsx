import clsx from "clsx";

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size? : "4xl" | "xl" | "lg" | "md" | "sm" | "xs";
    children: React.ReactNode;
    className?: string;
}

export default function Heading ({
    as: Comp = "h2",
    className,
    children,
    size = "lg"
}: HeadingProps){

    return (
        <Comp className={clsx("font-body font-bold leading-snug tracking-tight grid content-center w-full", 
        size === "4xl" && "text-4xl md:text-6xl",
        size === "xl" && "text-lg md:text-4xl",
        size === "lg" && "text-base md:text-xl",
        size === "sm" && "text-sm md:text-lg",
        size === "xs" && "text-xs md:text-base",
        className
        )}>
            {children}
        </Comp>
    )

}