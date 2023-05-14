import { createGlobalStyle } from 'styled-components'

import BoldFont from './Montserrat-Bold.ttf'
import RegularFont from './Montserrat-Regular.ttf'
import BoldItalicFont from './Montserrat-BoldItalic.ttf'
import ItalicFont from './Montserrat-Italic.ttf'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'bold';
        src: url(${BoldFont})
    }

    @font-face {
        font-family: 'regular';
        src: url(${RegularFont})
    }

    @font-face {
        font-family: 'bold italic';
        src: url(${BoldItalicFont})
    }

    @font-face {
        font-family: 'italic';
        src: url(${ItalicFont})
    }
`
export default FontStyles
