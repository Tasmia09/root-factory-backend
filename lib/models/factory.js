import mongoose from 'mongoose'

const { Schema } = mongoose

const FactorySchema = new Schema({
      name: { type: String },
      children:[{ type: Number }],
})

const Factory = mongoose.model('Factory', FactorySchema)
export default Factory