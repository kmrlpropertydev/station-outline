import "./styles.css";
import {
  MapContainer,
  TileLayer,
  Polygon,
  SVGOverlay,
  LayersControl,
  text
} from "react-leaflet";

const polygon = [
  [10.058294214638137, 76.3216420964961],

  [10.058219760417614, 76.32189026913831],

  [10.058951150193053, 76.3221220670534],
  [10.059017579336041, 76.32190683707104],

  [10.058679015899914, 76.32177572934668],
  [10.058907972513131, 76.32152340867525],
  [10.058839772674922, 76.32142940670563],
  [10.05850851623989, 76.3217188333581],
  [10.058294214638137, 76.3216420964961]
];

export default function App() {
  return (
    <div className="container">
      <MapContainer
        id="map"
        center={[10.058294214638137, 76.3216420964961]}
        zoom={100}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon positions={polygon} />
        <LayersControl position="topright" name="floors">
          <LayersControl.BaseLayer
            name="First Floor"
            onClick={console.log("floor1")}
          >
            <SVGOverlay attributes={{ stroke: "red" }} bounds={polygon}>
              <circle r="5" cx="95" cy="19" fill="red" />
              <text x="93" y="20" fontSize="5px" stroke="white">
                1
              </text>
              <circle r="5" cx="70" cy="120" fill="red" />
              <text x="68" y="121" fontSize="5px" stroke="white">
                2
              </text>
              <circle r="5" cx="15" cy="35" fill="red" />
              <text x="13" y="36" fontSize="5px" stroke="white">
                3
              </text>
            </SVGOverlay>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer
            checked
            name="second floor"
            onClick={console.log("floor2")}
          >
            <SVGOverlay attributes={{ stroke: "green" }} bounds={polygon}>
              <circle r="5" cx="115" cy="30" fill="green" />
              <text x="113" y="31" fontSize="5px" stroke="white">
                1
              </text>
              <circle r="5" cx="60" cy="80" fill="green" />
              <text x="58" y="81" fontSize="5px" stroke="white">
                2
              </text>
              <circle r="5" cx="90" cy="115" fill="green" />
              <text x="88" y="116" fontSize="5px" stroke="white">
                3
              </text>
            </SVGOverlay>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer
            checked
            name="third floor"
            onClick={console.log("floor3")}
          >
            <SVGOverlay attributes={{ stroke: "yellow" }} bounds={polygon}>
              <circle r="5" cx="110" cy="19" fill="yellow" />
              <text x="108" y="20" fontSize="5px" stroke="white">
                1
              </text>
              <circle r="5" cx="90" cy="100" fill="yellow" />
              <text x="88" y="101" fontSize="5px" stroke="white">
                2
              </text>
              <circle r="5" cx="40" cy="70" fill="yellow" />
              <text x="38" y="71" fontSize="5px" stroke="white">
                3
              </text>
            </SVGOverlay>
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>

      {/* <div className="available-spaces">
        <h2>Available Spaces</h2>
        <div className="floor"></div>
      </div> */}
    </div>
  );
}
