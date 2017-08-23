# PostCSS Letter Tracking [![Build Status][ci-img]][ci]

[PostCSS] plugin to generate relative, Photoshop-compatible letter tracking for improved letter spacing.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/letsjaam/postcss-letter-tracking.svg
[ci]:      https://travis-ci.org/letsjaam/postcss-letter-tracking

#### Input
```css
.foo {
    letter-tracking: 100;
}
```

#### Output
```css
.foo {
    letter-spacing: 0.1em;
}
```

## Usage

```js
postcss([ require('postcss-letter-tracking') ])
```

See [PostCSS] docs for examples for your environment.
