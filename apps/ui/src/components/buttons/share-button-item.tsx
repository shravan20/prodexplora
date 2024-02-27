import * as React from 'react'

type Props = {
    shareType: string,
    shareIcon: string,
    shareName: string,
    shareLink: string
}

const ShareButtonItem: React.FC = (props: Props) => {
    return (
        <div className="text-center flex flex-col justify-center items-center gap-2 hover:opacity-95 cursor-pointer">
            <div className="w-[45px] h-[45px] rounded-full hover:opacity-50 bg-primary-lighter flex flex-col items-center justify-center">
                {props.shareIcon}
            </div>
            <div className="font-semibold text-m">
                {props.shareName}
            </div>
        </div>
    )
}

export default ShareButtonItem;