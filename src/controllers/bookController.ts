import { Request, Response } from 'express'
import Book, { IBook } from '../models/Book'

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = new Book(req.body)
    const savedBook = await book.save()
    res.json(savedBook)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error!' })
    }
  }
}
