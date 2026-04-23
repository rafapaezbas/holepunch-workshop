import Hyperswarm from 'hyperswarm'
import Hypercore from 'hypercore'

const swarm = new Hyperswarm()
const hypercore = new Hypercore('./storage-b', Buffer.from(process.argv[2], 'hex'))
await hypercore.ready()

console.log('====Peer B====')

console.log('Hypercore public key:', hypercore.key.toString('hex'))

swarm.on('connection', (connection) => {
  console.log('connection')
  hypercore.replicate(connection)
})

swarm.join(hypercore.discoveryKey)

const readStream = hypercore.createReadStream({ start: 0, live: true })
for await (const data of readStream) {
  const n = data.readUInt32BE(0)
  console.log('data:', n)
}

