var baseCoordinates = [2.16067522513251, 41.39093798964388];
var baseBounds = [
  [1.5703315311961603, 40.972277499709804], // Southwest coordinates
  [2.7920111626752373, 41.84544156594339], // Northeast coordinates
];
var mainAttribution = "Map by BSC - DataViz Team";
//Order by: lower layers first, top layers last
var layers = [
  {
    name: "Accidents Points",
    sourceLayerName: "accidents2024", //source-layer & source
    attribution:  "",
    sourceType: "geojson",
    layerType: "circle",
    symbolization: {      
      "circle-stroke-width": 1,
      "circle-stroke-color": "#333",
      "circle-color": [
              "match",
              ["get", "Evaluation"],   // property name in your GeoJSON
              "Accessible", "#A6D96A",
              /* default color */ "hsl(0, 0%, 70%)"
            ],
      "circle-radius": [
        "interpolate",
        ["linear"],
        ["zoom"],
        12, 0,
        15, 5
      ]

    },
    legend: {
      id: "legend-a",
      class: "legend",
      items: [
    {
      styleHeight: "12px",
      display: "inline-block",
      backgroundColor: "#A6D96A",
      range: ["Accessible"]
    }
      ],
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
      fields: []
      // img: "image" // optional, you can add later if needed
    },
    filterBy: {
      active: false,
      fFeature: "Type",
    },
  }


];
