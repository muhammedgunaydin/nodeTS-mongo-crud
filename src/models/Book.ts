import mongoose, { Schema, Document } from 'mongoose'

export interface IBook extends Document {
  name: string
  author: string
  page: number
  year: number
}

const BookSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
  },
})

export default mongoose.model<IBook>('Book', BookSchema)
