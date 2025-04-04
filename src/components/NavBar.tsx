import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function NavBar(){
  return (
    <>
        <nav>
            <AppBar position="static" sx={{ bgcolor: "#fff", borderBottom: 1, borderColor: "#ccc"}}>
                <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", width: "80%", justifyContent: "center", gap: 2 }}>
                        <Button sx={{ color: "#ffff", fontWeight: "bold", backgroundColor: "#644BBA", borderRadius: "25px", paddingX: "20px", paddingY: "10px", textTransform: "none",fontSize: { xs: "10px", sm: "12px", md: "18px", lg: "14px", xl: "12px" } }}>Dashboard</Button>
                        <Button sx={{ color: "#644BBA", fontWeight: "bold", textTransform: "none", fontSize: { xs: "10px", sm: "12px", md: "18px", lg: "14px", xl: "12px" } }}>Clientes</Button>
                        <Button sx={{ color: "#644BBA", fontWeight: "bold", textTransform: "none", fontSize: { xs: "10px", sm: "12px", md: "18px", lg: "14px", xl: "12px" } }}>Reglas de acumulación</Button>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography sx={{ color: "#000", fontWeight: "bold", fontSize: { xs: "10px", sm: "12px", md: "18px", lg: "14px", xl: "12px" }}}>Pamela Rojas Gonzalez</Typography>
                        <ExpandMoreIcon sx={{ color: "#000" }} />
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    </>
  )
}

export default NavBar