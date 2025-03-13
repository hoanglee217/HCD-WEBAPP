import React, { createContext, useContext, useState } from "react";
import { Modal } from "antd";

interface ModalContextProps {
  isOpen: boolean;
  openModal: (content?: React.ReactNode) => void;
  closeModal: () => void;
  modalContent: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = (content?: React.ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalContent }}
    >
      {children}
      <Modal
        open={isOpen}
        onCancel={closeModal}
        width={400}
        footer={null}
        style={{ padding: 0 }}
        centered
      >
        {modalContent}
      </Modal>
      <style>{`
        .ant-modal-content{
          padding: 0 !important;
        }
      `}</style>
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
