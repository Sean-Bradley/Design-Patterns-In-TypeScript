"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("./add");
const numeral_1 = require("./numeral");
const roman_numeral_1 = require("./roman-numeral");
const subtract_1 = require("./subtract");
class Parser {
    // Dynamically create the Abstract Syntax Tree
    static parse(sentence) {
        // Create the AST from the sentence
        const tokens = sentence.split(' ');
        const tree = []; // Abstract Syntax Tree
        while (tokens.length > 1) {
            const leftExpression = Parser.decideLeftExpression(tree, tokens);
            // get the operator, make the token list shorter
            const operator = tokens.shift();
            const right = tokens[0];
            if (!Number(right)) {
                tree.push(new roman_numeral_1.default(right));
                if (operator === '-') {
                    tree.push(new subtract_1.default(leftExpression, tree[tree.length - 1]));
                }
                if (operator === '+') {
                    tree.push(new add_1.default(leftExpression, tree[tree.length - 1]));
                }
            }
            else {
                const rightExpression = new numeral_1.default(right);
                if (!tree.length) {
                    // Empty Data Structures return False by default
                    if (operator === '-') {
                        tree.push(new subtract_1.default(leftExpression, rightExpression));
                    }
                    if (operator === '+') {
                        tree.push(new add_1.default(leftExpression, rightExpression));
                    }
                }
                else {
                    if (operator === '-') {
                        tree.push(new subtract_1.default(tree[tree.length - 1], rightExpression));
                    }
                    if (operator === '+') {
                        tree.push(new add_1.default(tree[tree.length - 1], rightExpression));
                    }
                }
            }
        }
        return tree.pop();
    }
    static decideLeftExpression(tree, tokens) {
        // On the First iteration, the left expression can be either a
        // number or roman numeral.Every consecutive expression is
        // reference to an existing AST row
        const left = tokens.shift();
        let leftExpression;
        if (!tree.length) {
            // only applicable if first round
            if (!Number(left)) {
                // if 1st token a roman numeral
                tree = [];
                tree.push(new roman_numeral_1.default(left));
                leftExpression = tree[tree.length - 1];
            }
            else {
                leftExpression = new numeral_1.default(left);
            }
            return leftExpression;
        }
        else {
            leftExpression = tree[tree.length - 1];
            return leftExpression;
        }
    }
}
exports.default = Parser;
