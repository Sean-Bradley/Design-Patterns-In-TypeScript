// Prototype Concept Sample Code

import Document from "./document";

export default interface IProtoType {
    // interface with clone method
    clone(mode: number): Document
    // The clone, deep or shallow.
    // It is up to you how you  want to implement
    // the details in your concrete class"""
}