# @deaafrizal

## Introduction

My personal JS/TS Tooling library @deaafrizal. JSR Powered library designed to provide simple & easy to use javascript module

[![JSR](https://jsr.io/badges/@deaafrizal/tools)](https://jsr.io/@deaafrizal/tools)
[![JSR Score](https://jsr.io/badges/@deaafrizal/tools/score)](https://jsr.io/@deaafrizal/tools)
[![JSR Scope](https://jsr.io/badges/@deaafrizal)](https://jsr.io/@deaafrizal)

## Usage

to import my package, use this following syntax:

```js
// change packageName depends on your needed.
// please take a look at available package name in this docs.

import { packageName1, packageName2 } from "@deaafrizal/tools";
```

## Available Packages

```md
censoredEmail, censoredUsername, ...
```

### Example Without Prefix

```js
import { censoredEmail, censoredUsername } from "@deaafrizal/tools";

const email = censoredEmail("dea.testmail@email.com");
const username = censoredUsername("deaafrizal");

output:
*ea*t*st***l@email.com
d***fr*z*l
```

Or

```js
import * as mod from "@deaafrizal/tools";

mod.censoredEmail("dea.testmail@email.com");
mod.censoredUsername("deaafrizal");

output:
*ea*t*st***l@email.com
d***fr*z*l
```

### Example With Prefix

```js
import * as mod from "@deaafrizal/tools";

mod.censoredEmail("dea.testmail@email.com", "$");
mod.censoredUsername("deaafrizal", "&");

output:
de$.$$$$mai$@email.com
d&&&fr&z&l
```

## Installation

To install in your project, use the following command:

```bash
npx jsr add @deaafrizal/tools
```

```bash
yarn dlx jsr add @deaafrizal/tools
```

```bash
pnpm dlx jsr add @deaafrizal/tools
```

```bash
bunx jsr add @deaafrizal/tools
```
