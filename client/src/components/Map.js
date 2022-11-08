import { useRef, useEffect, useState, React, Children } from "react";

const markers = [
  { lat: -25.363, lng: 131.044 },
  { lat: -15.363, lng: 122.044 }
];

const Map = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style} />
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

// const Marker = (options) => {
//   const [marker, setMarker] = useState();
//   const contentRef = useRef(null);

//   useEffect(() => {
//     if (!marker) {
//       setMarker(new window.google.maps.Marker());
//     }

//     return () => {
//       if (marker) {
//         marker.setMap(null);
//       }
//     };
//   }, [marker]);

//   useEffect(() => {
//     if (marker) {
//       const infowindow = new window.google.maps.InfoWindow({
//         content: `daver`
//       });
//       marker.setOptions(options);

//       marker.addListener("click", () => {
//         infowindow.open({
//           anchor: marker,
//           shouldFocus: false
//         });
//       });
//     }
//   }, [marker, options]);

//   return null;
// };

// export default function App() {
//   return (
//     // <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
//     //   <Wrapper apiKey={""}>
//         <Map
//           center={{ lat: -25.363, lng: 131.044 }}
//           zoom={3}
//           style={{ flexGrow: "1", height: "100%" }}
//         >
//           {markers.map((marker) => {
//             return <Marker position={marker} />;
//           })}
//         </Map>
//     //   </Wrapper>
//     // </div>
//   );
// }

export default Map;
