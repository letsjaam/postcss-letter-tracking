const postcss = require('postcss')

const plugin = () => {
    return {
        postcssPlugin: 'postcss-letter-tracking',
        Once (root, { result }) {
            root.walkDecls('letter-tracking', decl => {
                if ( isNaN(decl.value) ) {
                    result.warn(`${decl.prop} is not a number. Converting property to letter-spacing.`, { node: decl })
                    decl.prop = 'letter-spacing'
                } else {
                    decl.cloneBefore({ prop: 'letter-spacing', value: `${decl.value / 1000}em` })
                    decl.remove()
                }
            })
        }
    }
}

plugin.postcss = true

module.exports = plugin
