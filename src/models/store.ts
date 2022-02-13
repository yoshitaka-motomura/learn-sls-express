import mongoose from 'mongoose'
import { mongoConnectUri } from '../config'

const storeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    loc: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number],
        default: [0, 0],
        required: true,
      },
    },
    distance: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)
storeSchema.index({ loc: '2dsphere' }, { name: '_loc_' })

const db = mongoose.createConnection(mongoConnectUri)
const Store = db.model('Store', storeSchema)

export default Store
