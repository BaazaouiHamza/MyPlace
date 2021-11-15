import React,{useRef,useEffect} from "react";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'
import './Map.css'
const Map = props => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYmFhemFvdWloYW16YSIsImEiOiJja3UxdTAwNTYyaThjMndtcmx4b2pzemx1In0.x0rYxm8ZAue5e1P2EXffAQ';
    const mapRef = useRef();

    const {center,zoom} = props;
    useEffect(()=>{
        const map  = new mapboxgl.Map({
            container:mapRef.current,
            center:center ,
            zoom: zoom,
            style:'mapbox://styles/baazaouihamza/cku1t6fsx5tay18s5jmcdhxv9'
        });
    },[center,zoom]);
    console.log(center);
    
    return <div ref={mapRef} className={`map ${props.className}`} style={props.style}></div>
};

export default Map;