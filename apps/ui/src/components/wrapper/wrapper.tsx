import * as React from 'react';

type Props = {
    children: React.ReactNode;
};

const Wrapper: React.FC<Props> = (props) => {
    return (
        <div className="pt-20 h-full w-[1200px] m-auto z-20 relative">
            {props.children}
        </div>
    );
};

export default Wrapper;
