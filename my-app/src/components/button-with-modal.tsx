import { Button } from "./button";
import { ModalDialog } from "./basic-modal-dialog";
import { useModalDialog } from "../hooks/modal-dialog-state";

export const ButtonWithModal = () => {
    const { isOpen, open, close } = useModalDialog();

    return (
        <>
            <Button onClick={open}>
                Open dialog
            </Button>
            {isOpen ? (
                <ModalDialog onClose={close} />
            ) : null}
        </>
    );
}