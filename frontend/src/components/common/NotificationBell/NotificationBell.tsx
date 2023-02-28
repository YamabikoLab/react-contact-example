import React, { useState } from "react";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const notifications = [
  {
    id: 0,
    label: "First notification",
  },
  {
    id: 1,
    label: "Second notification",
  },
];

interface NotificationBellProps {
  iconColor:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
}

const NotificationBell = ({
  iconColor,
}: NotificationBellProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<
    Element | ((element: Element) => Element) | null | undefined
  >(null);

  const newNotifications = `You have ${notifications.length} new notifications!`;
  const noNotifications = "No new notifications";

  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): React.MouseEventHandler<HTMLAnchorElement> | undefined => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
    return undefined;
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div>
      <Tooltip
        title={notifications.length > 0 ? newNotifications : noNotifications}
      >
        <IconButton
          color={iconColor}
          onClick={notifications.length > 0 ? handleOpen : undefined}
          // anchorEl={anchorEl}
        >
          <Badge badgeContent={notifications.length} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={notifications}
      />
    </div>
  );
};

export default NotificationBell;
