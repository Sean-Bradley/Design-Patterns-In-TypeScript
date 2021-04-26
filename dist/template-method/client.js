"use strict";
// The Template Pattern Use Case Example
Object.defineProperty(exports, "__esModule", { value: true });
const text_document_1 = require("./text-document");
const html_document_1 = require("./html-document");
const TEXT_DOCUMENT = new text_document_1.default();
TEXT_DOCUMENT.createDocument('Some Text');
const HTML_DOCUMENT = new html_document_1.default();
HTML_DOCUMENT.createDocument('Line 1\nLine 2');
