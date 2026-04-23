import Hyperswarm from 'hyperswarm'
import Hypercore from 'hypercore'

const swarm = new Hyperswarm()
const hypercore = new Hypercore('./storage-a')
await hypercore.ready()

console.log('====Peer A====')

swarm.on('connection', (connection) => {
  console.log('connection')
  hypercore.replicate(connection)
})

swarm.join(hypercore.discoveryKey)
await swarm.flush()

console.log('Hypercore public key:', hypercore.key.toString('hex'))

let n = 0
setInterval(async () => {
  const buffer = Buffer.alloc(4)
  buffer.writeUInt32BE(n++, 0)
  await hypercore.append(buffer)
}, 1000)

