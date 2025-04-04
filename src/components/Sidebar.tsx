import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import BarChartIcon from "@mui/icons-material/BarChart";
import HotelClassIcon from "@mui/icons-material/HotelClass";

interface SidebarProps {
  selectedView: string;
  setSelectedView: (view: string) => void;
}

interface CashbackData {
  acumulado: number;
  facturado: Record<string, number>;
}

interface ResumenData {
  clientes: number;
  ventas: number;
  montoTotal: number;
  cashback: CashbackData;
}

export default function Sidebar({
  selectedView,
  setSelectedView,
}: SidebarProps) {
  const { data, isLoading, error } = useQuery<ResumenData>({
    queryKey: ["dashboardResumen"],
    queryFn: async () => {
      const response = await fetch("/api/Dashboard");
      if (!response.ok) throw new Error("Error al obtener datos");
      const result = await response.json();
      return result.resumen;
    },
  });

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los datos</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <>
      <Box
        component="aside"
        sx={{
          marginTop: "30px",
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "220px",
            border: "1px solid #644BBA",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
            padding: "5px",
          }}
        >
          <Button
            sx={{
              color: selectedView === "grafico" ? "#ffff" : "#644BBA",
              backgroundColor:
                selectedView === "grafico" ? "#644BBA" : "transparent",
              borderRadius: selectedView === "grafico" ? "20px" : "0px",
              fontWeight: "bold",
              marginRight: "5px",
              paddingX: "20px",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "14px",
                xl: "14px",
              },
            }}
            onClick={() => setSelectedView("grafico")}
          >
            <BarChartIcon />
            Gráfico
          </Button>
          <Button
            sx={{
              color: selectedView === "pulso" ? "#ffff" : "#644BBA",
              backgroundColor:
                selectedView === "pulso" ? "#644BBA" : "transparent",
              borderRadius: selectedView === "pulso" ? "20px" : "0px",
              fontWeight: "bold",
              paddingX: "20px",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "18px",
                lg: "14px",
                xl: "14px",
              },
            }}
            onClick={() => setSelectedView("pulso")}
          >
            <HotelClassIcon />
            Pulso
          </Button>
        </Box>

        {Object.entries(data).map(([mes, info]) => (
          <Grid item key={mes} sx={{ margin: "6px" }}>
            <Card sx={{ width: 300, borderRadius: 2, boxShadow: 3, p: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 2,
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "16px",
                      xl: "20px",
                    },
                  }}
                >
                  {mes.charAt(0).toUpperCase() + mes.slice(1)}
                </Typography>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "16px",
                      },
                    }}
                  >
                    Clientes: {info.clientes}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "16px",
                      },
                    }}
                  >
                    {" "}
                    Ventas totales: {info.ventas}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "20px",
                        xl: "16px",
                      },
                    }}
                  >
                    Monto total: {info.montoTotal}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: "bold",
                      marginTop: 1,
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px",
                        lg: "14px",
                        xl: "16px",
                      },
                    }}
                  >
                    Cashback
                  </Typography>
                  <Typography variant="body2">
                    Acumulado: {info.cashback.acumulado.toLocaleString()}
                  </Typography>
                  {Object.entries(info.cashback?.facturado || {}).map(
                    ([fecha, monto], index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          fontSize: {
                            xs: "14px",
                            sm: "16px",
                            md: "18px",
                            lg: "14px",
                            xl: "15px",
                          },
                        }}
                      >
                        Facturado {fecha}: {monto.toLocaleString()}
                      </Typography>
                    )
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Box>
    </>
  );
}
