import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query
  if (!file || typeof file !== 'string') return res.status(400).end('file required')

  const assetsDir = path.join(process.cwd(), '..', 'attached_assets', 'generated_images')
  const filePath = path.join(assetsDir, file)

  if (!fs.existsSync(filePath)) return res.status(404).end('not found')

  const stream = fs.createReadStream(filePath)
  const ext = path.extname(file).toLowerCase()
  const contentType = ext === '.png' ? 'image/png' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'application/octet-stream'
  res.setHeader('Content-Type', contentType)
  stream.pipe(res)
}
