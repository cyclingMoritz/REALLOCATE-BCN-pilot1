var baseCoordinates = [2.16067522513251, 41.39093798964388];
var baseBounds = [
  [1.5703315311961603, 40.972277499709804], // Southwest coordinates
  [2.7920111626752373, 41.84544156594339], // Northeast coordinates
];
var mainAttribution = "Map by BSC - DataViz Team";
//Order by: lower layers first, top layers last
var layers = [
  {
    name: "Accidents 2024",
    sourceLayerName: "accidents2024", //source-layer & source
    attribution:  "",
    sourceType: "geojson",
    layerType: "circle",
    symbolization: {
      "circle-color": [
        "match",
        ["get", "max_severity"],
        "No injury", "#91cf60",
        "Slight", "#fee08b",
        "Serious", "#fc8d59",
        "Fatal", "#d73027",
        "#bdbdbd" // fallback
      ],
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12, 0,
        15, 5
      ],
      "circle-stroke-width": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12, 0,
        15, 1
      ],
      // "circle-stroke-width": 1,
      // "circle-stroke-color": "#333",
      "circle-opacity": 0.8
    },

    legend: {
      id: "legend-accidents-severity",
      class: "legend",
      items: [
        { backgroundColor: "#91cf60", range: ["No injury"] },
        { backgroundColor: "#fee08b", range: ["Slight injury"] },
        { backgroundColor: "#fc8d59", range: ["Serious injury"] },
        { backgroundColor: "#d73027", range: ["Fatal accident"] }
      ],
      notes: "Circle color represents the most severe outcome of the accident"
    },

    states: {
      visible: "visible",
      popUps: true,
      icons: true,
      filterCat: true,
      highlight: false,
      filterLayer: false,
      dateRange: false,
    },
    popUpFeatures: {
      event: "click",
      fields: [
        "street_name",
        "max_severity",
        "deaths",
        "serious_injuries",
        "slight_injuries",
        "people_involved",
        'pedestrian_count', 
        'bicycle_count', 
        'scooter_count',
        "year"
      ]
    },

    filterBy: {
      active: false,
      fFeature: "Type",
    },
  },
  {
  name: "Bicycle Flow (2024)",
  sourceLayerName: "imd_bicycles_2024",
  sourceType: "geojson",
  layerType: "line",

  symbolization: {
    "line-width": [
      "match",
      ["get", "AADBT_categorized"],
      "0-1000", 1.8,
      "1000-2000", 3.5,
      "2000-3000", 5.5,
      "3000-4000", 7.5,
      "4000-5000", 9.0,
      "5000+", 10.5,
      1.2
    ],

    "line-color": "#2E7D32",
    "line-opacity": 0.9
  },



  states: {
    visible: "visible",
    popUps: true,
    highlight: true
  },

  popUpFeatures: {
    event: "click",
    fields: [
      "Total_AADBT",
      "Predicted_AADBT_AB",
      "Predicted_AADBT_BA",
    ]
  },

legend: {
  id: "legend-bicycle-flow",
  class: "legend",
  items: [
    { backgroundColor: "#e5f5e0", range: ["0–1,000"] },
    { backgroundColor: "#a1d99b", range: ["1,000–2,000"] },
    { backgroundColor: "#74c476", range: ["2,000–3,000"] },
    { backgroundColor: "#41ab5d", range: ["3,000–4,000"] },
    { backgroundColor: "#238b45", range: ["4,000–5,000"] },
    { backgroundColor: "#005a32", range: ["> 5,000"] }
  ],
  notes: "Line width represents average daily bicycle traffic (AADBT)"
}


},
{
  name: "Motorized Vehicle Flow (2023)",
  sourceLayerName: "imd_motorized_2023",
  attribution: "© City Traffic Department – 2023",
  sourceType: "geojson",
  layerType: "line",

  symbolization: {
    "line-width": [
      "step",
      ["get", "total_flow"],
      1.2,
      500, 2.5,
      2000, 4.0,
      7000, 6.5,
      20000, 9.0,
      50000, 12.0
    ],

    "line-color": [
      "step",
      ["get", "total_flow"],
      "#fff5eb",
      500, "#fee6ce",
      2000, "#fdae6b",
      7000, "#fd8d3c",
      20000, "#e6550d",
      50000, "#a63603"
    ],

    "line-opacity": 0.85
  },


  legend: {
    id: "legend-motorized-flow",
    class: "legend",
    items: [
      { backgroundColor: "#fff5eb", range: ["< 500 veh/day"] },
      { backgroundColor: "#fee6ce", range: ["500 – 2,000"] },
      { backgroundColor: "#fdae6b", range: ["2,000 – 7,000"] },
      { backgroundColor: "#fd8d3c", range: ["7,000 – 20,000"] },
      { backgroundColor: "#e6550d", range: ["20,000 – 50,000"] },
      { backgroundColor: "#a63603", range: ["> 50,000"] }
    ],
    notes: "Line width proportional to total motorized vehicles per day"
  },



  states: {
    visible: "visible",
    popUps: true,
    icons: false,
    filterCat: false,
    highlight: true,
    filterLayer: false,
    dateRange: false
  },

  popUpFeatures: {
    event: "click",
    fields: [
      "name_street",
      "lanes",
      "total_flow",
      "ab_flow",
      "ba_flow"
    ]
  }

},





];
