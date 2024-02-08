import * as React from 'react'

import * as Dialog from '@radix-ui/react-dialog';

type Props = {
    dialogTrigger: React.ReactNode,
    dialogContent: React.ReactNode,
}

const AnimatedDialog:React.FC = (props: Props) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      {props.dialogTrigger}
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#ffffff79] data-[state=open]:animate-overlayShow fixed inset-0 z-50" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] min-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-primary shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-50">
        {props.dialogContent}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default AnimatedDialog;