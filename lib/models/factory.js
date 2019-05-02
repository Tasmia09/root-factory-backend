import mongoose from 'mongoose'

const { Schema } = mongoose
//const Schema = mongoose.Schema

const FactorySchema = new Schema({
      name: { type: String },
      children:[{ type: Number }],
      num_children: { type: Number },
      upper_limit: { type: Number },
      lower_limit: { type: Number }        
})

const Factory = mongoose.model('Factory', FactorySchema)
export default Factory