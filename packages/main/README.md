# @fuus/main

`@fuus/main` is a package from `@http404/fuu`

## Example

```js
import { delay } from '@fuus/main'
delay(() => console.log('👋'), 500);
```

## API

- `delay(fn, ms)`\
Delays the execution of an asynchronous function.

- `debounce(fn, ms)`\
Creates a debounced function that delays invoking the provided function until at least ms milliseconds have elapsed since the last time it was invoked.

- `throttle(fn, ms)`\
Creates a throttled function that only invokes the provided function at most once every defined milliseconds
