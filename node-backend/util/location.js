const axios = require("axios");
const HttpError = require("../models/http-error");
const API_KEY =
  "pk.eyJ1IjoiYmFhemFvdWloYW16YSIsImEiOiJja3UxdTAwNTYyaThjMndtcmx4b2pzemx1In0.x0rYxm8ZAue5e1P2EXffAQ";

async function getCoordsForAddress(address) {
  // return { lat: 40.7484474, lng: -73.9871516 };
  const response =
    await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${API_KEY}
    `);
  const data = response.data;

  if (!data || data.features.length == 0) {
    const error = new HttpError(
      "Could not find location for the specified address.",
      422
    );
    throw error;
  }

  const coordinates = data.features[0].geometry.coordinates;

  return {lng:coordinates[0],lat:coordinates[1]};
}

module.exports = getCoordsForAddress;
