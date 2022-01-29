import { HStack } from "@chakra-ui/react";
import React from "react";
import ReactComponent as CartIcon  from "@images/icon-cart.svg";
import { ReactComponent as MenuIcon } from "@images/icon-menu.svg";
import { ReactComponent as LogoIcon } from "@images/icon-logo.svg";

const MobileNav: React.FC = () => {
  return (
    <HStack>
      <CartIcon />
      <MenuIcon />
      <LogoIcon />
    </HStack>
  );
};

export default MobileNav;
