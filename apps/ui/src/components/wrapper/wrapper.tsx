import * as React from 'react';

type Props = {
    children: React.ReactNode;
};

const Wrapper: React.FC<Props> = (props) => {
    return (
        <div className="pt-20 h-full max-w-[1024px] m-auto z-20 relative">
            {props.children}
        </div>
    );
};

export default Wrapper;
