import { useState } from "react";
import { Button } from "./button";
import { ModalDialog } from "./basic-modal-dialog";

export const ButtonWithModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>
                Open dialog
            </Button>
            {isOpen ? (
                <ModalDialog onClose={() => setIsOpen(false)} />
            ) : null}
        </>
    );
}