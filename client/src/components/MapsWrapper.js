import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from './Map';

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

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
                    center={{ lat: -25.363, lng: 131.044 }}
                    zoom={3}
                    style={{ flexGrow: "1", height: "100%" }}
                >
                    {/* {markers.map((marker) => {
                        return <Marker position={marker} />;
                    })} */}
                </Map>
        );
    }
};

const MapsWrapper = () => {
    return (
        <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
            <Wrapper apiKey={googleMapsApiKey} render={render} />
        </div>
    );
};

export default MapsWrapper;