import * as React from 'react';

type Props = {
    children: React.ReactNode
}

const Card: React.FC = (props: Props) => {
    return (
        <div className="rounded bg-darks-100 hover:bg-darks-200 transition-all cursor-pointer border-[1px] border-primary-lighter overflow-hidden shadow-lg">
            {props.children}
        </div>
    )
}

export default Card;