'use client'

import { useEffect, useState } from 'react'

type MediaItem = {
  id: number
  title: string
  type: string
  description?: string
}

export default function MediaList() {
  const [media, setMedia] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:4000/api/media')
      .then((res) => res.json())
      .then((data) => {
        setMedia(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to fetch media', err)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-gray-600">Loading media...</p>

  return (
    <div className="grid gap-4">
      {media.map((item) => (
        <div key={item.id} className="rounded-lg border p-4 shadow-sm hover:shadow-md transition">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-500 italic">{item.type}</p>
          {item.description && <p className="mt-2 text-gray-700">{item.description}</p>}
        </div>
      ))}
    </div>
  )
}
