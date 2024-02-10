import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ResourcesScreen } from "./screens/Resources";
import { ToolkitScreen } from "./screens/Toolkit";
import { DashboardScreen } from "./screens/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ResourcesScreen />,
  },
  {
    path: "/dashboard",
    element: <DashboardScreen />,
  },
  {
    path: "/toolkit",
    element: <ToolkitScreen />,
  },
]);

const colors = {
  blue: "#314EF9",
  text: "#2C3237",
  red: "#E00027",
  green: "#17E4A1",
  lightBlue: "#56CCF2",
  background: "#FAFAFA",
  border: "#E4E4E4",
  title: "#2C3237",
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
