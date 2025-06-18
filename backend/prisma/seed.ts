import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.media.deleteMany() // Clear existing data (optional for dev)

  await prisma.media.createMany({
    data: [
      { title: 'The Matrix', type: 'movie' },
      { title: 'Breaking Bad', type: 'tv' },
      { title: 'Red Dead Redemption 2', type: 'game' },
      { title: 'The Name of the Wind', type: 'book' },
    ],
  })

  console.log('✅ Seed complete')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })
