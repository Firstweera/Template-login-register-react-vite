import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import {
  MdCoPresent,
  MdDomainVerification,
  MdEventRepeat,
  MdHail,
  MdOutlineSettings,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";
import { TbReportSearch } from "react-icons/tb";
import { GrAnnounce } from "react-icons/gr";

type MenuItem = Required<MenuProps>["items"][number];

const getMenuItems = (): MenuItem[] => [
  {
    key: "1",
    icon: <MdDomainVerification />,
    label: "Main",
    // to: "/attendance",
  },
  {
    key: "sub1",
    icon: <MdOutlineWorkHistory />,
    label: "Attendance",
    children: [
      { key: "2", label: "Request" },
      { key: "3", label: "Waiting" },
      { key: "4", label: "Approved" },
      { key: "5", label: "Rejected" },
    ],
  },
  {
    key: "sub2",
    icon: <MdEventRepeat />,
    label: "Overtime",
    children: [
      { key: "6", label: "Request" },
      { key: "7", label: "Waiting" },
      { key: "8", label: "Approved" },
      { key: "9", label: "Rejected" },
    ],
  },
  {
    key: "sub3",
    icon: <MdHail />,
    label: "Leave",
    children: [
      { key: "10", label: "Request" },
      { key: "11", label: "Approved" },
      { key: "12", label: "Rejected" },
    ],
  },
  {
    key: "13",
    icon: <FiUserPlus />,
    label: "Employees",
  },
  {
    key: "sub4",
    icon: <MdCoPresent />,
    label: "Job Tracking",
    children: [
      { key: "14", label: "Request" },
      { key: "15", label: "Waiting" },
      { key: "16", label: "Approved" },
      { key: "17", label: "Rejected" },
    ],
  },
  {
    key: "18",
    icon: <TbReportSearch />,
    label: "Report",
  },
  {
    key: "19",
    icon: <GrAnnounce />,
    label: "Announcement",
  },
  {
    key: "sub5",
    icon: <MdOutlineSettings />,
    label: "Setting",
    children: [
      {
        key: "sub6",
        label: "General",
        children: [
          { key: "20", label: "Organization" },
          { key: "21", label: "Other" },
        ],
      },
      {
        key: "sub7",
        label: "System",
        children: [
          { key: "22", label: "Leave" },
          { key: "23", label: "Calendar" },
          { key: "24", label: "Annual holiday group" },
          { key: "25", label: "Workings Days" },
          { key: "26", label: "Generate Leave" },
        ],
      },
      {
        key: "sub8",
        label: "Approval",
        children: [{ key: "27", label: "Create approve plan" }],
      },
      {
        key: "sub9",
        label: "Employees",
        children: [{ key: "28", label: "Connection" }],
      },
    ],
  },
];

const rootSubmenuKeys = [
  "1",
  "sub1",
  "sub2",
  "sub3",
  "13",
  "sub4",
  "18",
  "19",
  "sub5",
];

export const Sidebar: React.FC = () => {
  const [openKeys, setOpenKeys] = useState<string[]>(["1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256, height: "100vh" }}
      items={getMenuItems()}
    />
  );
};
