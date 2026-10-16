import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5plugins_json from '@amcharts/amcharts5/plugins/json';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Adaptive from '@amcharts/amcharts5/themes/Adaptive';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

export default function RotatingGlobe() {
  useEffect(() => {
    // Create root element
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root),
      am5themes_Adaptive(root, {
        "count": 10,
        "mapShade": true,
        "keepContrast": true,
        "baseColor": "#00ffaa",
        "baseColor2": "#ff0000"
      }),
      am5themes_Responsive.new(root)
    ]);

    const config = {
      "type": "MapChart",
      "settings": {
        "autoHome": true,
        "panX": "rotateX",
        "panY": "rotateY",
        "boxZoom": "shift",
        "minZoomLevel": 0.5,
        "zoomLevel": 0.95,
        "homeZoomLevel": 0.95,
        "animationDuration": 800,
        "background": {
          "type": "RoundedRectangle",
          "settings": {
            "fill": {
              "type": "Color",
              "value": "#101318"
            },
            "fillOpacity": 0
          }
        },
        "zoomControl": {
          "type": "ZoomControl",
          "properties": {
            "homeButton": {
              "settings": {
                "visible": true
              }
            }
          }
        },
        "animations": [
          {
            "key": "rotationX",
            "from": 0,
            "to": 360,
            "duration": 30000,
            "loops": 0
          }
        ],
        "projectionName": "geoOrthographic",
        "width": {
          "type": "Percent",
          "value": 100
        },
        "height": {
          "type": "Percent",
          "value": 100
        }
      },
      "properties": {
        "series": [
          "#series-0",
          "#series-1",
          "#series-2",
          "#series-3"
        ]
      },
      "children": [
        {
          "type": "Label",
          "settings": {
            "text": "Imagery: NASA Earth Observatory",
            "fontSize": 12,
            "fill": {
              "type": "Color",
              "value": "#ffffff"
            },
            "fillOpacity": 0.6,
            "x": {
              "type": "Percent",
              "value": 100
            },
            "centerX": {
              "type": "Percent",
              "value": 100
            },
            "dx": -10,
            "y": 10,
            "visible": false
          },
          "index": 2
        }
      ],
      "refs": [
        {
          "data-0": [
            {
              "geometry": {
                "type": "GeoRectangle",
                "north": 90,
                "east": 180,
                "south": -90,
                "west": -180
              },
              "__parse": true
            }
          ]
        },
        {
          "data-1": []
        },
        {
          "data-2": []
        },
        {
          "series-0": {
            "type": "MapPolygonSeries",
            "properties": {
              "data": "#data-0",
              "mapPolygons": {
                "properties": {
                  "template": {
                    "settings": {
                      "fill": "@root.interfaceColors.get('alternativeBackground')",
                      "fillOpacity": 0.05,
                      "strokeOpacity": 0
                    }
                  }
                }
              }
            }
          }
        },
        {
          "series-1": {
            "type": "MapRasterSeries",
            "settings": {
              "visible": false,
              "affectsBounds": false
            }
          }
        },
        {
          "series-2": {
            "type": "GraticuleSeries",
            "properties": {
              "mapLines": {
                "properties": {
                  "template": {
                    "settings": {
                      "strokeOpacity": 0.08,
                      "stroke": "@root.interfaceColors.get('alternativeBackground')"
                    }
                  }
                }
              }
            }
          }
        },
        {
          "series-3": {
            "type": "MapPolygonSeries",
            "settings": {
              "geoJSON": am5geodata_worldLow
            },
            "properties": {
              "mapPolygons": {
                "properties": {
                  "template": {
                    "settings": {
                      "tooltipText": "{name}",
                      "interactive": true,
                      "strokeWidth": 0.5
                    },
                    "states": [
                      {
                        "key": "hover",
                        "settings": {
                          "fill": "@root.interfaceColors.get('primaryButtonHover')",
                          "fillOpacity": 1
                        }
                      },
                      {
                        "key": "active",
                        "settings": {
                          "fill": "@root.interfaceColors.get('primaryButtonActive')",
                          "fillOpacity": 1
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ]
    };

    am5plugins_json.JsonParser.new(root)
      .parse(config, { parent: root.container })
      .catch(function (e) {
        console.error("amCharts: the chart config failed to parse — nothing was rendered.", e);
      });

    // Cleanup root element on component unmount
    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh', background: '#ffffff' }}>
      <div id="chartdiv" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
}