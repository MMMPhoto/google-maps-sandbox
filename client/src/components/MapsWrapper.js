import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import Map from './Map';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

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
        return <h1>Success</h1>;
    }
};

const MapsWrapper = () => {

    return (
        <div>
            <Wrapper apiKey={apiKey} render={render} />
        </div>
    );
};

export default MapsWrapper;