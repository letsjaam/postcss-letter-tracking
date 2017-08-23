const postcss = require('postcss')

module.exports = postcss.plugin('postcss-letter-tracking', () => {
    return (root, result) => {
        root.walkDecls(decl => {
            if ( decl.prop === 'letter-tracking' ) {
                if ( isNaN(decl.value) ) {
                    result.warn(`${decl.prop} is not a number. Converting property to letter-spacing.`, { node: decl })
                    decl.prop = 'letter-spacing'
                } else {
                    decl.cloneBefore({ prop: 'letter-spacing', value: `${decl.value / 1000}em` })
                    decl.remove()
                }
            }
        })
    }
})
