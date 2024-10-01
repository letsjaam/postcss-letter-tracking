const postcss = require('postcss')
const plugin = require('./')

const run = input => postcss([ plugin ]).process(input, { from: undefined } )

test('converts 1000 to 1em', () => {
    return run('div { letter-tracking: 1000; }').then(result => {
        expect(result.css).toBe('div { letter-spacing: 1em; }')
        expect(result.warnings().length).toBe(0)
    })
})

test('fallback to letter-spacing with NaN warning', () => {
    return run('div { letter-tracking: 1em; }').then(result => {
        expect(result.css).toBe('div { letter-spacing: 1em; }')
        expect(result.warnings().length).toBe(1)
    })
})
