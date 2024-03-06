import type { ReactNode } from "react";
import React, { forwardRef } from "react";


import classNames from "../../../../../libs/classNames";
import { Label } from "./Label";

type TextAreaProps = JSX.IntrinsicElements["textarea"];

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextAreaInput(props, ref) {
    return (
        <textarea
            ref={ref}
            {...props}
            className={classNames(
                "bg-darks-100 hover:bg-darks-200  p-2 flex flex-row items-center gap-2 rounded-md border-[1px] border-primary-lighter shadow-primary hover:shadow-lg transition-all resize-none w-full outline-none",
                props.className
            )}
        />
    );
});

type TextAreaFieldProps = {
    label?: ReactNode;
    t?: (key: string) => string;
} & React.ComponentProps<typeof TextArea> & {
    name: string;
    labelProps?: React.ComponentProps<typeof Label>;
};

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(function TextField(
    props,
    ref
) {
    const {
        label = props.name as string,
        labelProps,
        /** Prevents displaying untranslated placeholder keys */
        placeholder = `${props.name}_placeholder` !== `${props.name}_placeholder`
            ? `${props.name}_placeholder`
            : "",
        ...passThrough
    } = props;
    return (
        <div>
            {!!props.name && (
                <Label {...labelProps}>
                    {label}
                </Label>
            )}
            <TextArea ref={ref} placeholder={placeholder} {...passThrough} />
        </div>
    );
});