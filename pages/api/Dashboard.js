export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({
        resumen: {
          noviembre: {
            clientes: 81420,
            ventasTotales: 1100,
            montoTotal: 70000000,
            cashback: {
              acumulado: 200000,
              facturado: {
                "01/11": 120000,
                "10/11": 200000,
                "20/11": 0
              }
            }
          },
          octubre: {
            clientes: 81295,
            ventasTotales: 3800,
            montoTotal: 170840000,
            cashback: {
              acumulado: 700000,
              facturado: {
                "01/10": 100000,
                "10/10": 250000,
                "20/10": 100000
              }
            }
          },
          septiembre: {
            clientes: 80995,
            ventasTotales: 4000,
            montoTotal: 179850000,
            cashback: {
              acumulado: 450000,
              facturado: {
                "01/09": 85000
              }
            }
          }
        },
        grafico: {
            hoy: [
          { hour: "00:00", "Clientes nuevos": 5, Compraron: 2 },
          { hour: "01:00", "Clientes nuevos": 10, Compraron: 5 },
          { hour: "02:00", "Clientes nuevos": 15, Compraron: 8 },
          { hour: "03:00", "Clientes nuevos": 20, Compraron: 10 },
          { hour: "04:00", "Clientes nuevos": 30, Compraron: 15 },
          { hour: "05:00", "Clientes nuevos": 40, Compraron: 20 },
          { hour: "06:00", "Clientes nuevos": 50, Compraron: 30 },
          { hour: "07:00", "Clientes nuevos": 60, Compraron: 40 },
          { hour: "08:00", "Clientes nuevos": 40, Compraron: 50 },
          { hour: "08:00", "Clientes nuevos": 120, Compraron: 180 },
          { hour: "09:00", "Clientes nuevos": 90, Compraron: 200 },
          { hour: "10:00", "Clientes nuevos": 60, Compraron: 50 },
          { hour: "11:00", "Clientes nuevos": 150, Compraron: 195 },
          { hour: "12:00", "Clientes nuevos": 20, Compraron: 230 },
          { hour: "13:00", "Clientes nuevos": 30, Compraron: 230 },
          { hour: "14:00", "Clientes nuevos": 5, Compraron: 230 },
          { hour: "15:00", "Clientes nuevos": 10, Compraron: 100 },
          { hour: "16:00", "Clientes nuevos": 15, Compraron: 50 },
          { hour: "17:00", "Clientes nuevos": 4, Compraron: 10 },
          { hour: "18:00", "Clientes nuevos": 8, Compraron: 20 },
          { hour: "19:00", "Clientes nuevos": 19, Compraron: 120 },
          { hour: "20:00", "Clientes nuevos": 10, Compraron: 30 },
          { hour: "21:00", "Clientes nuevos": 15,Compraron: 38 },
          { hour: "22:00", "Clientes nuevos": 4, Compraron: 30 },
          { hour: "23:00", "Clientes nuevos": 2, Compraron: 12 },

        ],
        sieteDias: [
            { day: "Lunes", "Clientes nuevos": 210, Compraron: 2000 },
            { day: "Martes", "Clientes nuevos": 400, Compraron:1200 },
            { day: "Miércoles", "Clientes nuevos": 550, Compraron: 1500 },
            { day: "Jueves", "Clientes nuevos": 380, Compraron: 1850 },
            { day: "Viernes", "Clientes nuevos": 410, Compraron: 2200 },
            { day: "Sábado", "Clientes nuevos": 375, Compraron: 1000 },
            { day: "Domingo", "Clientes nuevos": 400, Compraron: 1300 },
        
        ],
        anual: [
            { 2022: "YTD/YTG",  dinero: 6000000, cashback: 2000000 },
            { 2023: "YTD/YTG",  dinero: 8000000, cashback: 2000000 },
            { 2022: "YTD/YTG",  dinero: 10000000, cashback: 2000000 },
            { 2023: "YTD/YTG",  dinero: 12000000, cashback: 2000000 },
        ],
        transacciones: [
            { day: "Lunes", transacciones: 1000  },
            { day: "Martes", transacciones: 2500  },
            { day: "Miércoles", transacciones: 2000  },
            { day: "Jueves", transacciones: 3500 },
            { day: "Viernes", transacciones: 4000  },
            { day: "Sábado", transacciones: 3800  },
            { day: "Domingo", transacciones: 3500 },

        ],
        pulso: [
            {Septiembre: "Septiembre", "dia 1": 1000, "dia 2": 2000, "dia 3": 3000},
            {Octubre: "Octubre", "dia 1": 1000, "dia 2": 2000, "dia 3": 3000},
            {Noviembre: "Noviembre", "dia 1": 1000, "dia 2": 2000, "dia 3": 3000},
        ]


    },
        
      });
    } else {
      res.status(405).json({ error: "Método no permitido" });
    }
  }
  