oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g segafetch
$ segafetch COMMAND
running command...
$ segafetch (--version)
segafetch/0.0.0 linux-x64 node-v16.13.2
$ segafetch --help [COMMAND]
USAGE
  $ segafetch COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`segafetch hello PERSON`](#segafetch-hello-person)
* [`segafetch hello world`](#segafetch-hello-world)
* [`segafetch help [COMMAND]`](#segafetch-help-command)
* [`segafetch plugins`](#segafetch-plugins)
* [`segafetch plugins:inspect PLUGIN...`](#segafetch-pluginsinspect-plugin)
* [`segafetch plugins:install PLUGIN...`](#segafetch-pluginsinstall-plugin)
* [`segafetch plugins:link PLUGIN`](#segafetch-pluginslink-plugin)
* [`segafetch plugins:uninstall PLUGIN...`](#segafetch-pluginsuninstall-plugin)
* [`segafetch plugins update`](#segafetch-plugins-update)

## `segafetch hello PERSON`

Say hello

```
USAGE
  $ segafetch hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/node/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `segafetch hello world`

Say hello world

```
USAGE
  $ segafetch hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `segafetch help [COMMAND]`

Display help for segafetch.

```
USAGE
  $ segafetch help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for segafetch.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `segafetch plugins`

List installed plugins.

```
USAGE
  $ segafetch plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ segafetch plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `segafetch plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ segafetch plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ segafetch plugins:inspect myplugin
```

## `segafetch plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ segafetch plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ segafetch plugins add

EXAMPLES
  $ segafetch plugins:install myplugin 

  $ segafetch plugins:install https://github.com/someuser/someplugin

  $ segafetch plugins:install someuser/someplugin
```

## `segafetch plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ segafetch plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ segafetch plugins:link myplugin
```

## `segafetch plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ segafetch plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ segafetch plugins unlink
  $ segafetch plugins remove
```

## `segafetch plugins update`

Update installed plugins.

```
USAGE
  $ segafetch plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
