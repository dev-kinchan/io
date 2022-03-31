<img src="https://github.com/dev-kinchan/io/blob/main/assets/io-logo.png?raw=true" width="200" height="200">

# io

Pleasantly useful functions that brightens your day.

`io` started as a personal project intended to assimilate lodash's functionality.

## Before You Jump the Gun

This package is intended for test use only. It may not suited for production. Please use at your own risk.

## Instillation

```bash
npm install @kinchan/io
```

## Basic Usage

```js
import {
    maxIndex
    within
} from "@kinchan/io";

maxIndex([1, 2, 3])
// -> 2

within(5, ["a", "b", "c"])
// -> false
```

## API Reference

Type definition files are included in this package. 

Examples are written in each module's test file. You can reference them on GitHub repo.

### Array

`maxIndex` : (array: any[]) => number

`within` : (index: number, array: any[]) => boolean

`outOfRange` : (index: number, array: any[]) => boolean

`complied` : (array: any[], index: number) => number

`last` or `latest` : (array: Type[]) => Type | undefined

### Object

`reveal` : (data: object | undefined | null) => object

### String

`trimmed` : (text: string) => string

editing...
