import { useEffect, useState } from "react";
import {
  Toolbar,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import DoneIcon from "@mui/icons-material/Done";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EventIcon from "@mui/icons-material/Event";

interface GrafProps {
  selectedView: string;
  setSelectedView: (view: string) => void;
}

interface ChartData {
  hour?: string;
  day?: string;
  month?: string;
  year?: string;
  [key: string]: string | number | undefined;
}

interface DashboardData {
  grafico: {
    hoy: ChartData[];
    sieteDias: ChartData[];
    anual: ChartData[];
    pulso: ChartData[];
    transacciones: ChartData[];
  };
}

export default function Graf({ selectedView, setSelectedView }: GrafProps) {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<
    "dinero" | "compraron" | null
  >(null);

  const { data, isLoading } = useQuery<DashboardData>({
    queryKey: ["dashboardData"],
    queryFn: async () => {
      const res = await fetch("/api/Dashboard");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  useEffect(() => {
    if (!data) return;

    if (selectedView === "Hoy") {
      setChartData(data.grafico.hoy);
    } else if (selectedView === "7D") {
      setChartData(data.grafico.sieteDias);
    } else if (selectedView === "YTD") {
      setChartData(data.grafico.anual);
    } else if (selectedView === "pulso") {
      setChartData(data.grafico.pulso);
    } else if (selectedView === "transacciones") {
      setChartData(data.grafico.transacciones);
    } else if (selectedView === "clientes") {
      setChartData(data.grafico.hoy);
    } else if (selectedView === "grafico") {
      setChartData(data.grafico.hoy);
    }
  }, [selectedView, data]);

  if (isLoading) return <p>Cargando...</p>;
  if (!data) return <p>No hay datos disponibles</p>;

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 2,
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "100%",
            sm: "90%",
            md: "100%",
            lg: "100%",
          },
        }}
      >
        <Grid>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                width: "70%",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button
                sx={{
                  color: selectedView === "Hoy" ? "#48454E" : "#000",
                  backgroundColor:
                    selectedView === "Hoy" ? "#644BBA1F" : "transparent",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "16px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
                onClick={() => setSelectedView("Hoy")}
              >
                Hoy
              </Button>
              <Button
                sx={{
                  color: selectedView === "7D" ? "#48454E" : "#000",
                  backgroundColor:
                    selectedView === "7D" ? "#644BBA1F" : "transparent",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "16px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
                onClick={() => setSelectedView("7D")}
              >
                7D
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
              >
                Este mes
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
              >
                6M
              </Button>
              <Button
                sx={{
                  color: selectedView === "YTD" ? "#48454E" : "#000",
                  backgroundColor:
                    selectedView === "YTD" ? "#644BBA1F" : "transparent",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "16px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
                onClick={() => setSelectedView("YTD")}
              >
                YTD/YTG
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
              >
                1A
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
              >
                MÁX
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
              >
                <EventIcon />
                Personalizado
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "20%",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Button
                sx={{
                  color: "#644BBA",
                  fontWeight: "bold",
                  fontSize: {
                    xs: "10px",
                    sm: "12px",
                    md: "18px",
                    lg: "14px",
                    xl: "12px",
                  },
                }}
              >
                <RemoveRedEyeIcon />
                Ver detalle
              </Button>
            </Box>
          </Toolbar>
        </Grid>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Button
              sx={{
                color: selectedView === "clientes" ? "#644BBA" : "#000",
                backgroundColor:
                  selectedView === "clientes" ? "#644BBA1F" : "transparent",
                fontWeight: "bold",
                border: selectedView === "clientes" ? "none" : "1px solid",
                borderRadius: "15px",
                marginRight: "5px",
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "12px",
                },
              }}
              onClick={() => setSelectedView("clientes")}
            >
              <DoneIcon
                sx={{ display: selectedView === "clientes" ? "block" : "none" }}
              />
              Clientes
            </Button>
            <Button
              sx={{
                color: selectedView === "transacciones" ? "#644BBA" : "#000",
                backgroundColor:
                  selectedView === "transacciones"
                    ? "#644BBA1F"
                    : "transparent",
                border: selectedView === "transacciones" ? "none" : "1px solid",
                fontWeight: "bold",
                borderRadius: "15px",
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "12px",
                },
              }}
              onClick={() => setSelectedView("transacciones")}
            >
              <DoneIcon
                sx={{
                  display: selectedView === "transacciones" ? "block" : "none",
                }}
              />
              Transacciones
            </Button>
          </Box>
          <Box>
            <Button
              sx={{
                color: selectedMetric === "dinero" ? "#fff" : "#644BBA",
                backgroundColor:
                  selectedMetric === "dinero" ? "#644BBA" : "transparent",
                fontWeight: "bold",
                border: "1px solid",
                borderRadius: "15px",
                marginRight: "5px",
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "18px",
                  lg: "14px",
                  xl: "12px",
                },
              }}
              onClick={() => setSelectedMetric("dinero")}
            >
              Dinero
            </Button>
            <Button
              sx={{
                color: selectedMetric === "compraron" ? "#fff" : "#644BBA",
                backgroundColor:
                  selectedMetric === "compraron" ? "#644BBA" : "transparent",
                fontWeight: "bold",
                border: "1px solid",
                borderRadius: "15px",
                fontSize: {
                  xs: "10px",
                  sm: "12px",
                  md: "18px",
                  lg: "14px",
                  xl: "12px",
                },
              }}
              onClick={() => setSelectedMetric("compraron")}
            >
              Cashback
            </Button>
          </Box>
        </Toolbar>
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} barSize={30}>
                  <XAxis
                    dataKey={
                      selectedView === "Hoy"
                        ? "hour"
                        : selectedView === "7D"
                        ? "day"
                        : selectedView === "YTD"
                        ? "year"
                        : "day"
                    }
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend
                    formatter={(value, entry) => {
                      const hasData = chartData.some((d) => d[entry.dataKey]);
                      return (
                        <span style={{ opacity: hasData ? 1 : 0.3 }}>
                          {value}
                        </span>
                      );
                    }}
                  />
                  {chartData.length > 0 &&
                    Object.keys(chartData[0])
                      .filter(
                        (key) =>
                          key !== "hour" && key !== "day" && key !== "month"
                      )
                      .map((key, index) => (
                        <Bar
                          key={key}
                          dataKey={key}
                          fill={["#3385FF", "#FF5733", "#2DCF5A"][index % 6]}
                          name={key}
                          fillOpacity={chartData.some((d) => d[key]) ? 1 : 0}
                        />
                      ))}
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* tabla */}
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: "flex", gap: 3, borderRadius: "10px", p: 2 }}>
            <TableContainer
              component={Paper}
              sx={{
                flex: 1,
                borderRadius: "10px",
                backgroundColor: "#f4f4f4",
                overflowX: "auto",
              }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      {selectedView === "Hoy"
                        ? "Hora"
                        : selectedView === "7D"
                        ? "Día"
                        : selectedView === "YTD"
                        ? "Año"
                        : "Año"}
                    </TableCell>
                    {chartData.length > 0 &&
                      Object.keys(chartData[0])
                        .filter(
                          (key) =>
                            !["hour", "day", "month", "year"].includes(key)
                        )
                        .map((key) => (
                          <TableCell key={key} sx={{ fontWeight: "bold" }}>
                            {key}
                          </TableCell>
                        ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {chartData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        {row.hour ||
                          row.day ||
                          row.month ||
                          row.year ||
                          "Sin etiqueta"}
                      </TableCell>
                      {Object.keys(row)
                        .filter(
                          (key) =>
                            !["hour", "day", "month", "year"].includes(key)
                        )
                        .map((key) => (
                          <TableCell key={key}>
                            {row[key]?.toLocaleString?.() || row[key] || 0}
                          </TableCell>
                        ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Grid>
    </>
  );
}
