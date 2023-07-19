import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";

interface BigModalProps {
    element: JSX.Element,
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    title: string
}

const BigModal: React.FC<BigModalProps> = ({ element, open, setOpen, title }) => {

    return (
        <Modal
            title={title}
            centered
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={'100%'}
        >
            {element}
        </Modal>
    )
}

export default BigModal;