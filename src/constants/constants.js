export const PROFILE_URL = "https://randomuser.me/api/portraits/med/men/75.jpg";
export const RANDOM_IMAGE_URL = "https://picsum.photos/id/254/200/300";
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

    labels: [
      "19 June",
      "20 June",
      "21 June",
      "22 June",
      "23 June",
      "24 June",
      "25 June",
      ".",
    ],
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
      tickPlacement: "on",
      offsetX: 20,
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        offsetY: -5,
        maxHeight: 15,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      seriesName: "Cost",
      tickAmount: 7,
      labels: {
        show: true,
        maxWidth: 40,
        offsetY: 8,
        offsetX: 0,
        formatter: function (val) {
          return val === 0 ? " " : val;
        },
      },
      title: {
        text: "Cost €",
        rotate: 0,
        offsetX: 30,
        offsetY: -125,
        align: "left",
        style: {
          color: "#cbd5e1",
          fontWeight: 400,
          fontSize: 12,
        },
      },
      axisBorder: {
        show: false,
        offsetX: 0,
      },
      axisTicks: {
        show: false,
      },
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
      grid: {
        padding: {
          left: 0,
          right: 0,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  },
};
