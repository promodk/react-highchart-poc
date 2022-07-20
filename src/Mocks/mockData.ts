export const lineChartData = [
  29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6,
  54.4,
];

export const lineChartCategory = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const donutChartData = [
  {
    name: "Community",
    y: 30,
    color: "#97d5ff",
  },
  {
    name: "Care",
    y: 10,
    color: "#31aaff",
  },
  {
    name: "Marketing",
    y: 20,
    color: "#FF0000",
  },
  {
    name: "CX team",
    y: 25,
    color: "#0477cc",
  },
  {
    name: "Demo Engineering",
    y: 15,
    color: "#808000",
  },
];

export const stackedAreaChartData = [
  {
    name: "Watcher",
    data: [5020, 6350, 8090, 9470, 14020, 3634, 5268],
    color: "#97d5ff",
  },
  {
    name: "Participants",
    data: [3000, 1070, 4000, 6330, 2210, 7670, 9766],
    color: "#31aaff",
  },
  {
    name: "Contributor",
    data: [8000, 9030, 2760, 4080, 5470, 1290, 6280],
    color: "#0477cc",
  },
];

export const stackAreaXAxisData = [
  "1750",
  "1800",
  "1850",
  "1900",
  "1950",
  "1999",
  "2050",
];

export const sunburstChartData = [
  {
    id: "0.0",
    name: "Khoros",
  },
  {
    id: "1.0",
    parent: "0.0",
    name: "Community",
    color: "#0477cc",
  },
  {
    parent: "1.0",
    name: "Aurora",
    value: 15,
  },
  {
    parent: "1.0",
    name: "Calvin",
    value: 8,
  },
  {
    id: "2.0",
    name: "Marketing",
    parent: "0.0",
    color: "red",
  },
  {
    parent: "2.0",
    name: "Team A",
    value: 5,
  },
  {
    parent: "2.0",
    name: "Team B",
    value: 6,
  },
];
