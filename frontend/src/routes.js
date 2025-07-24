import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";

import RTL from "views/admin/rtl";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import LogIn from "views/auth/logIn";

// Donor Imports
import DonorDashboard from "views/donor/default";
import DonorProfile from "views/donor/profile";

import MainDashboard1 from "views/faculty/default";
import NFTMarketplace1 from "views/faculty/marketplace";
import Profile1 from "views/faculty/profile";
import DataTables1 from "views/faculty/dataTables";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: "Donor Dashboard",
    layout: "/donor",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <DonorDashboard />,
  },
  {
    name: "Donor Profile",
    layout: "/donor",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <DonorProfile />,
  },

  // -------------------------------------------------------------------------------------------------------
  {
    name: "Main Dashboard",
    layout: "/faculty",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard1 />,
  },
  {
    name: "NFT Marketplace",
    layout: "/faculty",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace1 />,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/faculty",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/data-tables",
    component: <DataTables1 />,
  },
  {
    name: "Profile",
    layout: "/faculty",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile1 />,
  },

  // ----------------------------------------------------------------------------------
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
  {
    name: "Log In",
    layout: "/auth",
    path: "/log-in",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <LogIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <RTL />,
  },
];

export default routes;
