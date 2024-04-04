import  { prisma } from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: 'a87a534b-818d-4a80-80fa-330f99697bd6',
      title: 'Unite Summit',
      slug: 'unite-sumit',
      details: 'Um evento p/ devs apaixonado(as) por código',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})