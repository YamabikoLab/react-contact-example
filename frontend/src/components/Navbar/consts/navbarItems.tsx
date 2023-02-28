import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import ImageIcon from "@mui/icons-material/Image";
import PublicIcon from "@mui/icons-material/Public";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import DnsIcon from "@mui/icons-material/Dns";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <PeopleIcon />,
    label: "認証",
    route: "authentication",
  },
  {
    id: 1,
    icon: <DnsIcon />,
    label: "データベース",
    route: "database",
  },
  {
    id: 2,
    icon: <ImageIcon />,
    label: "ストレージ",
    route: "storage",
  },
  {
    id: 3,
    icon: <PublicIcon />,
    label: "ホスティング",
    route: "hosting",
  },
  {
    id: 4,
    icon: <SettingsEthernetIcon />,
    label: "機能",
    route: "functions",
  },
  {
    id: 5,
    icon: <SettingsInputComponentIcon />,
    label: "機械学習",
    route: "machine-learning",
  },
  {
    id: 6,
    icon: <ContactPageIcon />,
    label: "お問い合わせ",
    route: "contact",
  },
];
