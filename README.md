# holepunch-workshop

A hands-on workshop covering the core building blocks of the [Holepunch](https://holepunch.to) ecosystem.

## Installation

```bash
git clone https://github.com/rafapaezbas/holepunch-workshop.git
cd holepunch-workshop
npm install
```

## Modules

| Module | Description |
|---|---|
| [`hypercore`](./hypercore) | Secure, append-only distributed log |
| [`hyperbee`](./hyperbee) | B-tree key-value store built on Hypercore |
| [`hyperdht`](./hyperdht) | DHT for peer discovery with UDP hole-punching |
| [`hyperswarm`](./hyperswarm) | High-level P2P networking over a shared topic |
| [`hyperdrive`](./hyperdrive) | Secure distributed file system built on Hypercore |
| [`autopass`](./autopass) | Multiwriter distributed password and notes manager |

Each folder contains runnable examples. Navigate into a module directory and run the scripts with Node.js.

## Resources

- [Holepunch Docs](https://docs.pears.com)
- [Holepunch GitHub](https://github.com/holepunchto)
