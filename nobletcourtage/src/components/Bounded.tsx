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
        <Comp className={clsx("px-5 py-2", className)} 
        {...restProps}>
            <div className="mx-auto w-full max-w-5xl">{children}</div>
        </Comp>
    )
}