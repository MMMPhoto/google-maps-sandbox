import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from './Map';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

const startCenter = { lat: -25.363, lng: 131.044 };
const startZoom = 5;
const mapStyle = { flexGrow: "1", height: "100%" };

const MapsWrapper = () => {

    const render = (status) => {
        switch (status) {
          case Status.LOADING:
            console.log('Loading');
            return <h1>Loading</h1>;
          case Status.FAILURE:
            console.log('Error');
            return <h1>Error</h1>;
          case Status.SUCCESS:
            console.log('Success');
            return (
                    <Map
                        center={startCenter}
                        zoom={startZoom}
                        style={mapStyle}
                    >
                        {/* {markers.map((marker) => {
                            return <Marker position={marker} />;
                        })} */}
                    </Map>
            );
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
            <Wrapper apiKey={googleMapsApiKey} render={render} />
        </div>
    );
};

export default MapsWrapper;