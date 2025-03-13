import React, { createContext, useContext, useState } from "react";
import { Drawer } from "antd";

interface DrawerContextProps {
  isOpen: boolean;
  openDrawer: (content?: React.ReactNode) => void;
  closeDrawer: () => void;
  drawerContent: React.ReactNode;
}

const DrawerContext = createContext<DrawerContextProps | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<React.ReactNode>(null);

  const openDrawer = (content?: React.ReactNode) => {
    setDrawerContent(content);
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setDrawerContent(null);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer, drawerContent }}>
      {children}
      <Drawer open={isOpen} onClose={closeDrawer} width={400}>
        {drawerContent}
      </Drawer>
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};