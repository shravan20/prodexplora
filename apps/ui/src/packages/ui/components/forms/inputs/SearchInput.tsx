import * as React from "react";
import classNames from "../../../../../libs/classNames";
import { InputProps } from "./type";

import { GoSearch } from "react-icons/go";

export const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(function SearchInput(
    { isFullWidth = true, ...props },
    ref
) {
    return (
        <div
            {...props}
            ref={ref}
            className={classNames(
                "hover:border-emphasis dark:focus:border-emphasis border-[primary-lighter] bg-default placeholder:text-muted text-emphasis disabled:hover:border-default disabled:bg-subtle focus:ring-brand-default block h-9 rounded-md px-3 py-5 text-sm leading-4 transition focus:border-neutral-300 outline-none disabled:cursor-not-allowed bg-primary-lighter flex flex-row items-center gap-2",
                isFullWidth && "w-full",
                props.className
            )}
        >
            <GoSearch size={15} />
            <input
                type="text"
                placeholder={props.placeholder}
                className="bg-transparent border-none outline-none flex-grow"
                disabled={props.disabled}
            />
        </div>
    );
});
