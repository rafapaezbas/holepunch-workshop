import Hyperdrive from 'hyperdrive'
import Corestore from 'corestore'
import Hyperswarm from 'hyperswarm'

console.log('====Peer B====')

const key = Buffer.from(process.argv[2], 'hex')

const store = new Corestore('./storage-b')
const drive = new Hyperdrive(store, key)
const swarm = new Hyperswarm()

swarm.on('connection', connection => store.replicate(connection))
swarm.join(drive.discoveryKey)

await swarm.flush()

await drive.update({ wait: true })

for await (const file of drive.list('/')) {
  const buf = await drive.get(file.key)
  console.log(file.key, '->', buf.toString())
}

await swarm.destroy()
await drive.close()
