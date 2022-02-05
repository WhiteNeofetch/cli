import {Command} from '@oclif/core'

export default class World extends Command {
  static description = 'Say hello fetch'

  static examples = [
    `$ oex hello fetch
hello fetch! (./src/commands/hello/world.ts)
`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    this.log('hello fetch! (./src/commands/hello/world.ts)')
  }
}
