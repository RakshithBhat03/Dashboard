export const PROFILE_URL = "https://randomuser.me/api/portraits/med/men/75.jpg";
export const chartData = {
  series: [48, 30, 22],
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
    bar: {
      barHeight: "50%",
    },
  },
};
