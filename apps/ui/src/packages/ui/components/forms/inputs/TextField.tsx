import React, { forwardRef, useId, useState } from "react";


import { GoX } from "react-icons/go";
import classNames from "../../../../../libs/classNames";
import type { InputFieldProps, InputProps } from "./type";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    { isFullWidth = true, ...props },
    ref
) {
    return (
        <input
            {...props}
            ref={ref}
            className={classNames(
                "bg-darks-100 hover:bg-darks-200  p-2 flex flex-row items-center gap-2 rounded-md border-[1px] border-primary-lighter shadow-primary hover:shadow-lg transition-all",
                isFullWidth && "w-full",
                props.className
            )}
        />
    );
});

type AddonProps = {
    children: React.ReactNode;
    isFilled?: boolean;
    className?: string;
    error?: boolean;
    onClickAddon?: () => void;
};

const Addon = ({ isFilled, children, className, error, onClickAddon }: AddonProps) => (
    <div
        onClick={onClickAddon && onClickAddon}
        className={classNames(
            "addon-wrapper border-primary-lighter [input:hover_+_&]:border-emphasis [input:hover_+_&]:border-l-primary-lighter [&:has(+_input:hover)]:border-emphasis [&:has(+_input:hover)]:border-r-primary-lighter border p-[2px] pl-3 pr-3",
            isFilled && "bg-primary-lighters",
            onClickAddon && "cursor-pointer disabled:hover:cursor-not-allowed",
            className
        )}>
        <div
            className={classNames(
                "min-h-9 flex flex-col justify-center text-sm leading-7",
                error ? "text-error" : "text-default"
            )}>
            <span className="flex whitespace-nowrap">{children}</span>
        </div>
    </div>
);

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(props, ref) {
    const id = useId();
    const name = props.name || "";
    const {
        label = name,
        labelProps,
        labelClassName,
        disabled,
        LockedIcon,
        placeholder = name ? name : "",
        className,
        addOnLeading,
        addOnSuffix,
        addOnFilled = true,
        addOnClassname,
        inputIsFullWidth,
        hint,
        type,
        hintErrors,
        labelSrOnly,
        containerClassName,
        readOnly,
        showAsteriskIndicator,
        onClickAddon,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ...passThrough
    } = props;

    const [inputValue, setInputValue] = useState<string>("");

    return (
        <div className={classNames(containerClassName)}>
            {!!name && (
                <span>Loading...</span>
            )}
            {addOnLeading || addOnSuffix ? (
                <div
                    dir="ltr"
                    className="group relative mb-1 flex items-center rounded-md">
                    {addOnLeading && (
                        <Addon
                            isFilled={addOnFilled}
                            className={classNames("ltr:rounded-l-md rtl:rounded-r-md", addOnClassname)}>
                            {addOnLeading}
                        </Addon>
                    )}
                    <Input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        isFullWidth={inputIsFullWidth}
                        className={classNames(
                            className,
                            "disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed outline-none",
                            addOnLeading && "rounded-l-none border-l-0",
                            addOnSuffix && "rounded-r-none border-r-0",
                            type === "search" && "pr-8"
                        )}
                        {...passThrough}
                        {...(type == "search" && {
                            onChange: (e) => {
                                setInputValue(e.target.value);
                                props.onChange && props.onChange(e);
                            },
                            value: inputValue,
                        })}
                        disabled={readOnly || disabled}
                        ref={ref}
                    />
                    {addOnSuffix && (
                        <Addon
                            onClickAddon={onClickAddon}
                            isFilled={addOnFilled}
                            className={classNames("ltr:rounded-r-md rtl:rounded-l-md", addOnClassname)}>
                            {addOnSuffix}
                        </Addon>
                    )}
                    {type === "search" && inputValue?.toString().length > 0 && (
                        <GoX
                            className="text-subtle absolute top-2.5 h-4 w-4 cursor-pointer ltr:right-2 rtl:left-2"
                            onClick={(e) => {
                                setInputValue("");
                                props.onChange && props.onChange(e as unknown as React.ChangeEvent<HTMLInputElement>);
                            }}
                        />
                    )}
                </div>
            ) : (
                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={classNames(
                        className,
                        "disabled:bg-subtle disabled:hover:border-subtle disabled:cursor-not-allowed outline-none"
                    )}
                    {...passThrough}
                    readOnly={readOnly}
                    ref={ref}
                    isFullWidth={inputIsFullWidth}
                    disabled={readOnly || disabled}
                />
            )}
            {hint && <div className="text-default mt-2 flex items-center text-sm">{hint}</div>}
        </div>
    );
});

export const TextField = forwardRef<HTMLInputElement, InputFieldProps>(function TextField(props, ref) {
    return <InputField ref={ref} {...props} />;
});