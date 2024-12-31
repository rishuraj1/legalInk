"use client";

import React, { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import useAppStore from "@/store";
import { redirect } from "next/navigation";

const ScrollTriggeredDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { hasAgreed, setHasAgreed } = useAppStore();

  useEffect(() => {
    if (!hasAgreed) {
      const handleScroll = () => {
        if (window.scrollY > 100 && !isDrawerOpen) {
          setIsDrawerOpen(true);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [hasAgreed, isDrawerOpen]);

  const handleAgree = () => {
    setHasAgreed(true);
    setIsDrawerOpen(false);
  };

  const handleDeny = () => {
    redirect("/");
  };

  return (
    <Drawer
      open={isDrawerOpen}
      onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}
      onClose={handleDeny}
    >
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Terms and Conditions</DrawerTitle>
          <DrawerDescription>
            When you click on agree, you accept the terms and conditions.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <div className="flex justify-end gap-4">
            <Button onClick={handleAgree}>Agree</Button>
            <DrawerClose asChild>
              <Button variant="outline" onClick={handleDeny}>
                Deny
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ScrollTriggeredDrawer;
