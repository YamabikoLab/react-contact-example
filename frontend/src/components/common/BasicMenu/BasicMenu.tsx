/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface BasicMenuProps {
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  handleClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  open: boolean;
  menuItems: Array<{ id: number; label: string }>;
}

const BasicMenu = ({
  anchorEl,
  handleClose,
  open,
  menuItems,
}: BasicMenuProps): JSX.Element => {
  return (
    <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>{item.label}</MenuItem>
      ))}
    </Menu>
  );
};

export default BasicMenu;
