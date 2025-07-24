import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "routes.js";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { SidebarContext } from "contexts/SidebarContext";

export default function Auth() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const getRoute = () => {
    return window.location.pathname !== "/auth/full-screen-maps";
  };

  const getRoutes = (routes) => {
    return routes.map((route, key) => {
      if (route.layout === "/auth") {
        return (
          <Route path={`${route.path}`} element={route.component} key={key} />
        );
      }
      if (route.collapse) {
        return getRoutes(route.items);
      }
      return null;
    });
  };

  const authBg = useColorModeValue("white", "navy.900");
  document.documentElement.dir = "ltr";

  return (
    <Box minH="100vh" bg={authBg}>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        {getRoute() ? (
          <Flex align="center" justify="center" minH="100vh" w="100%" px="20px">
            <Box w="100%" maxW="600px">
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  element={<Navigate to="/auth/sign-in/" replace />}
                />
              </Routes>
            </Box>
          </Flex>
        ) : null}
      </SidebarContext.Provider>
    </Box>
  );
}
