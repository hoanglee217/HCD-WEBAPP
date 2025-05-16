import React, { createContext, useContext, useState } from "react";
import { Modal } from "antd";

interface OpenModalProps {
  content?: React.ReactNode;
  width?: string | number;
  height?: string | number;
}
interface ModalContextProps {
  isOpen: boolean;
  openModal: ({ content, width, height }: OpenModalProps) => void;
  closeModal: () => void;
  modalContent: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [modalWidth, setModalWidth] = useState<string | number>();
  const [modalHeight, setModalHeight] = useState<string | number>();

  const openModal = ({ content, width, height }: OpenModalProps) => {
    setModalWidth(width);
    setModalHeight(height);
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
        width={modalWidth ? modalWidth : "400px"}
        height={modalHeight ? modalHeight : "max-content"}
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
