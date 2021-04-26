// The Template Pattern Use Case Example

import TextDocument from './text-document'
import HTMLDocument from './html-document'

const TEXT_DOCUMENT = new TextDocument()
TEXT_DOCUMENT.createDocument('Some Text')

const HTML_DOCUMENT = new HTMLDocument()
HTML_DOCUMENT.createDocument('Line 1\nLine 2')
