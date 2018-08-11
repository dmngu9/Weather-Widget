import { css, SimpleInterpolation, ThemedCssFunction } from 'styled-components';

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576
};

interface Media {
    desktop: ThemedCssFunction<{}>;
    tablet: ThemedCssFunction<{}>;
    phone: ThemedCssFunction<{}>;
}

export const media: Media = Object.keys(sizes).reduce(
    (acc, label) => {
        acc[label] = (templateString: TemplateStringsArray, ...interpolation: SimpleInterpolation[]) => css`
            @media (max-width: ${sizes[label]}px) {
                ${css(templateString, ...interpolation)};
            }
        `;

        return acc;
    },
    {} as Media
);
