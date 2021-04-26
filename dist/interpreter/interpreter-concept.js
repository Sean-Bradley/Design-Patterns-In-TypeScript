"use strict";
// The Interpreter Pattern Concept
class Numeral {
    constructor(value) {
        this.value = parseInt(value);
    }
    interpret() {
        return this.value;
    }
}
class Add {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}
class Subtract {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }
    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}
// The Client
// The sentence complies with a simple grammar of
// Number -> Operator -> Number -> etc,
const SENTENCE = '5 + 4 - 3 + 7 - 2';
console.log(SENTENCE);
// Split the sentence into individual expressions that will be added to
// an Abstract Syntax Tree(AST) as Terminal and Non - Terminal expressions
const TOKENS = SENTENCE.split(' ');
console.log(JSON.stringify(TOKENS));
// Manually Creating an Abstract Syntax Tree from the tokens
const AST = []; // An array of AbstractExpressions
AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))); // 5 + 4
AST.push(new Subtract(AST[0], new Numeral(TOKENS[4]))); // ^ - 3
AST.push(new Add(AST[1], new Numeral(TOKENS[6]))); // ^ + 7
AST.push(new Subtract(AST[2], new Numeral(TOKENS[8]))); // ^ - 2
// Use the final AST row as the root node.
const AST_ROOT = AST.pop();
// Interpret recursively through the full AST starting from the root.
console.log(AST_ROOT.interpret());
// Print out a representation of the AST_ROOT
console.dir(AST_ROOT, { depth: null });
