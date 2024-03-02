import * as React from 'react';

import * as Tabs from '@radix-ui/react-tabs';
import { Button } from '../../../packages/ui/components/buttons/Button';

type Props = {
    tabs: []
}

const ProductTabSwitcher: React.FC = (props: Props) => {
    const [defaultTab, setDefaultTab] = React.useState(props.tabs[0].name);
    return (
        <Tabs.Root defaultValue={props.tabs[0].name} className="z-50 relative max-w-[1024px] w-full">
            <Tabs.List className="flex flex-row gap-2 border-b-[1px] border-info w-full">
                {props.tabs.map((y) => {
                    return (
                        <Tabs.Trigger value={y.name} className={`${defaultTab == y.name ? 'border-b-[1px] border-white transition-all' : 'color-info'}`} onClick={() => setDefaultTab(y.name)}>
                            <Button variant="button" color="minimal" className="mb-1px">
                                {defaultTab == y.name ? <span className="text-white">{y.name}</span> : <span className="text-[#ccc]">{y.name}</span>}
                            </Button>
                        </Tabs.Trigger>
                    )
                })}
            </Tabs.List>

            <div className="pt-3 pb-3">
                {
                    props.tabs.map((y) => {
                        return (
                            <Tabs.Content value={y.name}>
                                {y.tabContent}
                            </Tabs.Content>
                        )
                    })
                }
            </div>
        </Tabs.Root >
    )
}

export default ProductTabSwitcher;
