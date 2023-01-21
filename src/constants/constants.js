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
