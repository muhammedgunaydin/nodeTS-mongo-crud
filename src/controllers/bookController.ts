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

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const book = await Book.find()
    res.json(book)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error!' })
    }
  }
}

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id)
    res.json(book)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error!' })
    }
  }
}

export const updateBook = async (req: Request, res: Response) => {
  try {
    const uptatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.json(uptatedBook)
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error!' })
    }
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  try {
    await Book.findByIdAndRemove(req.params.id)
    res.json({ msg: 'Book deleted succesfully' })
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message })
    } else {
      res.status(500).json({ error: 'Unknown error!' })
    }
  }
}
