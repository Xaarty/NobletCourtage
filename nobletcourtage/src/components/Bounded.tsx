import clsx from "clsx"

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default function Bounded({
    as: Comp = "section",
    className,
    children,
    ...restProps
}: BoundedProps) {
    return (
        <Comp className={clsx("px-20 py-2", className)} 
        {...restProps}>
            <div className="mx-auto w-full max-w-5xl h-full">{children}</div>
        </Comp>
    )
}