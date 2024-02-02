import * as React from 'react'

type Props = {
    chipLabel: String
}

const Chip:React.FC = (props: Props) => {
    return (
        <div
        data-te-chip-init
        data-te-ripple-init
        className="[word-wrap: break-word] my-[5px] flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-primary-lighter border-[1px] border-primary px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-white shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none dark:text-neutral-200 w-max"
        data-te-ripple-color="dark">
            {props.chipLabel}
        </div>
    )
}

export default Chip;