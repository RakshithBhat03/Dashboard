export const PROFILE_URL = "https://randomuser.me/api/portraits/med/men/75.jpg";
export const chartData = {
  series: [2.4, 1.6, 1],
  options: {
    chart: {
      type: "donut",
    },
    colors: ["#5be7d9", "#798dcd", "#d80009"],
    labels: ["Under Budget", "On Budget", "Over Budget"],
    legend: {
      position: "bottom",
      inverseOrder: true,
      itemMargin: {
        horizontal: 20,
      },
    },
    dataLabels: {
      style: {
        fontSize: "9px",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 20,
            },
            value: {
              show: true,
              offsetY: -20,
              fontWeight: 600,
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total Projects",
              fontSize: "12px",
            },
          },
        },
      },
    },
  },
};
export const graphData = {
  series: [
    {
      name: "Cost",
      data: [0, 1000, 3500, 3250, 4250, 5500, 6500, 6500],
    },
  ],
  options: {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
      colors: "#008077",
    },
    xaxis: {
      tickAmount: 7,
      categories: [
        "19 June",
        "20 June",
        "21 June",
        "22 June",
        "23 June",
        "24 June",
        "25 June",
        " ",
      ],
      labels: {
        show: true,
        // offsetX: 5,
      },
    },
    yaxis: {
      tickAmount: 7,
    },
    grid: {
      show: true,
      position: "back",
      borderColor: "#cbd5e1",
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  },
  markers: {
    show: false,
  },
};
