import * as react from 'react';
import { JSX } from 'react';

interface WhatIFProbs {
    check: boolean;
    if: JSX.Element;
    else: JSX.Element;
}

declare const _default: {
    WhatIF: (probs: WhatIFProbs) => react.JSX.Element;
};

export { _default as default };
