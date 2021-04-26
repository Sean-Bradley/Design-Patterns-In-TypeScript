// The Interpreter Pattern Concept

interface IAbstractExpression {
    // All Terminal and Non-Terminal expressions will implement an `interpret` method
    interpret(): number
}

class Numeral implements IAbstractExpression {
    // Terminal Expression

    value: number

    constructor(value: string) {
        this.value = parseInt(value)
    }

    interpret(): number {
        return this.value
    }
}

class Add implements IAbstractExpression {
    // Non-Terminal Expression.
    left: IAbstractExpression
    right: IAbstractExpression

    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }

    interpret() {
        return this.left.interpret() + this.right.interpret()
    }
}

class Subtract implements IAbstractExpression {
    // Non-Terminal Expression.
    left: IAbstractExpression
    right: IAbstractExpression

    constructor(left: IAbstractExpression, right: IAbstractExpression) {
        this.left = left
        this.right = right
    }

    interpret() {
        return this.left.interpret() - this.right.interpret()
    }
}

// The Client
// The sentence complies with a simple grammar of
// Number -> Operator -> Number -> etc,
const SENTENCE = '5 + 4 - 3 + 7 - 2'
console.log(SENTENCE)

// Split the sentence into individual expressions that will be added to
// an Abstract Syntax Tree(AST) as Terminal and Non - Terminal expressions
const TOKENS = SENTENCE.split(' ')
console.log(JSON.stringify(TOKENS))

// Manually Creating an Abstract Syntax Tree from the tokens
const AST: IAbstractExpression[] = [] // An array of AbstractExpressions
AST.push(new Add(new Numeral(TOKENS[0]), new Numeral(TOKENS[2]))) // 5 + 4
AST.push(new Subtract(AST[0], new Numeral(TOKENS[4]))) // ^ - 3
AST.push(new Add(AST[1], new Numeral(TOKENS[6]))) // ^ + 7
AST.push(new Subtract(AST[2], new Numeral(TOKENS[8]))) // ^ - 2

// Use the final AST row as the root node.
const AST_ROOT = AST.pop()

// Interpret recursively through the full AST starting from the root.
console.log((AST_ROOT as IAbstractExpression).interpret())

// Print out a representation of the AST_ROOT
console.dir(AST_ROOT, { depth: null })
