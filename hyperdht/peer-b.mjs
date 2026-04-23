import DHT from 'hyperdht'
import FramedStream from 'framed-stream'

console.log('====Peer B====')

const publicKey = Buffer.from(process.argv[2], 'hex')

const node = new DHT()
const connection = node.connect(publicKey)
const stream = new FramedStream(connection)

stream.on('data', (data) => {
  console.log('Peer A says:', data.toString())
})

stream.write('hello I am Peer B')
