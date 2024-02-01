import * as React from 'react'

type Props = {
    children: React.ReactNode
}

const Wrapper: React.FC = (props: Props) => {
    return (
        <div className="pt-20 h-screen w-[1200px] m-auto">
            {props.children}
        </div>
    )
}

export default Wrapper;