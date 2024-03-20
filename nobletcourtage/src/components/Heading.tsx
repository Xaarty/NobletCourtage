import clsx from "clsx";

type HeadingProps = {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    size? : "xl" | "lg" | "md" | "sm";
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
        <Comp className={clsx("font-display font-bold leading-snug tracking-tight h-50 grid content-center w-full", 
        size === "xl" && "text-lg md:text-7xl",
        className
        )}>
            {children}
        </Comp>
    )

}