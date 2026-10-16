import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import * as am5plugins_json from '@amcharts/amcharts5/plugins/json';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Adaptive from '@amcharts/amcharts5/themes/Adaptive';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';

export default function CompactRotatingGlobe() {
  useEffect(() => {
    // Create root element targeting the specific widget div
    let root = am5.Root.new("globe-widget-div");

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
        "boxZoom": false, // Disabled for a clean widget widget experience
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
            "fillOpacity": 0 // Fully transparent background to match your space theme
          }
        },
        "zoomControl": {
          "type": "ZoomControl",
          "properties": {
            "homeButton": {
              "settings": {
                "visible": false // Hidden for a clean decorative footer widget
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
                      "strokeOpacity": 0.15,
                      "stroke": "#00ffaa" // Matches your cyan/green tech aesthetic
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
                      "strokeWidth": 0.5,
                      "stroke": "#00ffaa",
                      "fill": "#004422"
                    },
                    "states": [
                      {
                        "key": "hover",
                        "settings": {
                          "fill": "#00ffaa",
                          "fillOpacity": 0.8
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
        console.error("amCharts globe widget failed to parse:", e);
      });

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '240px',
        height: '240px',
        pointerEvents: 'auto',
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      <div id="globe-widget-div" style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
}