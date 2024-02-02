import * as React from 'react'

import { motion } from 'framer-motion'
import { Button } from '../../packages/ui/components/buttons/Button';

const HomeBanner: React.FC = () => {
    return (
        <div className="h-[280px] bg-primary-gradient w-[988px] m-auto rounded-md relative z-50">
            <div className="p-8 flex flex-col gap-5 h-full justify-center z-20 relative">
                <div className="flex flex-col gap-2">
                <motion.div className="text-5xl leading-tight text-white relative" initial={{opacity: 0, bottom: -10}} animate={{opacity: 1, bottom: 0}}>
                    Welcome to <br />
                    <strong>ProdExplora</strong>
                </motion.div>
                <motion.div className="text-xl font-medium text-white relative" initial={{opacity: 0, bottom: -10}} animate={{opacity: 1, bottom: 0}}>
                    The place to launch and discover new open source tech products 
                </motion.div>
                </div>
                <motion.div className="relative" initial={{opacity: 0, bottom: -10}} animate={{opacity: 1, bottom: 0}}>
                    <Button variant="button" color="subtle">
                        <span>Learn More</span>
                    </Button>
                </motion.div>
            </div>            
            <motion.svg style={{height: "100%"}} viewBox="0 0 505 471" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-0 z-0">
            <motion.circle cx="432" cy="127" r="181" fill="#CDF563" initial={{top: -20, opacity: 0}} animate={{top: 0, opacity: 1}} transition={{type: "spring", stiffness: 220, damping: 20}}/>
            <motion.circle cx="324" cy="235" r="181" fill="#FF4633" fill-opacity="0.7" initial={{top: -20, opacity: 0}} animate={{top: 0, opacity: 1}} transition={{type: "spring", stiffness: 220, damping: 20}}/>
            <motion.ellipse cx="181" cy="415.5" rx="181" ry="181.5" fill="#FB7EA8" fill-opacity="0.7" initial={{top: -20, opacity: 0}} animate={{top: 0, opacity: 1}} transition={{type: "spring", stiffness: 220, damping: 20}}/>
            </motion.svg>
        </div>
    )
}

export default HomeBanner;
