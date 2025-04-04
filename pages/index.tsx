import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import Graf from "../src/components/Graf";
import Sidebar from "../src/components/Sidebar";
import NavBar from "../src/components/NavBar";

export default function Dashboard() {
  const [selectedView, setSelectedView] = useState("grafico");
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "90%",
        },
        margin: "auto",
      }}
    >
      <NavBar />
      <main>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Graf selectedView={selectedView} setSelectedView={setSelectedView} />
          {!isMobile && (
            <Sidebar
              selectedView={selectedView}
              setSelectedView={setSelectedView}
            />
          )}
        </Box>
      </main>
    </Box>
  );
}
