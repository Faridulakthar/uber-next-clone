import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = "pk.eyJ1IjoiZmFyaWR1bGFrdGhhciIsImEiOiJja3c1MXMydXkxc3o1MzBybzh6djlmaW14In0.c9e-XSDn1pDHIDFuKILj9w"

const map = (props) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
          center: [-99.29011, 39.39172],
          zoom: 3,
        });
       
        if(props.pickupCoords) {
          addToMap(map, props.pickupCoords)
        }

        if(props.dropoffCoords) {
          addToMap(map, props.dropoffCoords)
        }

        if(props.pickupCoords && props.dropoffCoords) {[
          map.fitBounds([
            props.pickupCoords,
            props.dropoffCoords
          ], {
            padding: 70 
          }) 
        ]}

      }, [props.pickupCoords, props.dropoffCoords]);

      const addToMap = (map, coords) => {
        const marker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map);
      }

    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
  flex-1 h-1/2
`
