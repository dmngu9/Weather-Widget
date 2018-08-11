module.exports = {
    syntax: 'scss',
    processors: ['stylelint-processor-styled-components'],
    plugins: ['stylelint-declaration-strict-value'],
    extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
    rules: {
        indentation: 4,

        'scale-unlimited/declaration-strict-value': [
            {
                ignoreKeywords: {
                    '': ['inherit', 'transparent', 'currentColor', 'initial'],
                    '/height/': ['100%', '0', 'initial', 'inherit', 'auto'],
                    '/width/': ['100%', '0', 'initial', 'inherit', 'auto'],
                    '/margin/': ['100%', '0', 'initial', 'inherit', 'auto'],
                    '/padding/': ['100%', '0', 'initial', 'inherit'],
                    top: ['0', 'initial', 'inherit'],
                    left: ['0', '50%', 'initial', 'inherit'],
                    right: ['0', 'initial', 'inherit'],
                    bottom: ['0', 'initial', 'inherit'],
                    'box-shadow': ['none'],
                },
                ignoreFunctions: false,
            },
        ],

        'rule-empty-line-before': null,
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],

        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-semicolon-newline-after': 'always',

        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',

        'color-hex-case': 'lower',
        'color-no-invalid-hex': true,

        'comment-whitespace-inside': 'always',

        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-duplicate-properties': [
            true,
            {
                ignore: ['consecutive-duplicates'],
            },
        ],
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': null,
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-newline-after': null,
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': null,

        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-whitespace-after': 'always',

        'keyframe-declaration-no-important': true,

        'length-zero-no-unit': true,

        'max-empty-lines': null,
        'comment-empty-line-before': null,

        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',

        'no-eol-whitespace': true,
        'no-extra-semicolons': true,
        'no-invalid-double-slash-comments': true,

        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,

        'property-case': 'lower',

        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-list-comma-newline-after': null,
        'selector-list-comma-space-before': 'never',
        'selector-max-empty-lines': 0,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-pseudo-element-no-unknown': true,

        'selector-type-case': null,

        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: '$dummyValue',
            },
        ],

        'shorthand-property-no-redundant-values': true,

        'string-no-newline': true,

        'unit-case': 'lower',
        'unit-no-unknown': true,

        'value-list-comma-newline-after': null,
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-list-max-empty-lines': null,
    },
};