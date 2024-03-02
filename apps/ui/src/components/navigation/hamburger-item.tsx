import * as React from 'react';

type Props = {
    hamrbugerItemLabel: string
}

const HamburgerItem: React.FC = (props: Props) => {
    return (
        <div className="load-into-place-anim pt-3 pb-3 border-b-[1px] border-b-primary-lighter">
            <div className="font-semibold text-lg">
                {props.hamburgerItemLabel}
            </div>
        </div>
    )
}

export default HamburgerItem;
