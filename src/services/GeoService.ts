import Store from '../models/store'

type fetchByGeocodeOption = {
  lat: string;
  lng: string;
  distance: number | string;
}
export const fetchByGeocode = async (options: fetchByGeocodeOption) => {
  return await Store.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [Number(options.lng), Number(options.lat)],
        },
        distanceField: 'distance',
        spherical: true,
        maxDistance: Number(options.distance),
        query: {},
      },
    },
    {
      $project: { _id: 1, name: 1, address: 1, distance: 1, loc: 1 },
    },
    {
      $limit: 50,
    },
  ])
}
