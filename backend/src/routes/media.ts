import express from 'express'
import prisma from '../db/client'

const router = express.Router()

router.get('/', async (req, res) => {
  const media = await prisma.media.findMany()
  res.json(media)
})

export default router
