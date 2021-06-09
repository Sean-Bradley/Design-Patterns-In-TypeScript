// A Custom Parser for creating an Abstract Syntax Tree
import IAbstractExpression from "./iabstract-expression"
import Add from './add'
import Numeral from './numeral'
import RomanNumeral from './roman-numeral'
import Subtract from './subtract'

export default class Parser {
    // Dynamically create the Abstract Syntax Tree

    static parse(sentence: string): IAbstractExpression | undefined {
        // Create the AST from the sentence

        const tokens = sentence.split(' ')

        const tree: IAbstractExpression[] = [] // Abstract Syntax Tree
        while (tokens.length > 1) {
            const leftExpression = Parser.decideLeftExpression(tree, tokens)

            // get the operator, make the token list shorter
            const operator = tokens.shift()

            const right = tokens[0]

            if (!Number(right)) {
                tree.push(new RomanNumeral(right))
                if (operator === '-') {
                    tree.push(new Subtract(leftExpression, tree[tree.length - 1]))
                }
                if (operator === '+') {
                    tree.push(new Add(leftExpression, tree[tree.length - 1]))
                }
            } else {
                const rightExpression = new Numeral(right)
                if (!tree.length) {
                    // Empty Data Structures return False by default
                    if (operator === '-') {
                        tree.push(new Subtract(leftExpression, rightExpression))
                    }
                    if (operator === '+') {
                        tree.push(new Add(leftExpression, rightExpression))
                    }
                } else {
                    if (operator === '-') {
                        tree.push(
                            new Subtract(tree[tree.length - 1], rightExpression)
                        )
                    }
                    if (operator === '+') {
                        tree.push(new Add(tree[tree.length - 1], rightExpression))
                    }
                }
            }
        }
        return tree.pop()
    }

    static decideLeftExpression(
        tree: IAbstractExpression[],
        tokens: string[]
    ): IAbstractExpression {
        // On the First iteration, the left expression can be either a
        // number or roman numeral.Every consecutive expression is
        // reference to an existing AST row
        const left = tokens.shift()
        let leftExpression: IAbstractExpression
        if (!tree.length) {
            // only applicable if first round
            if (!Number(left)) {
                // if 1st token a roman numeral
                tree = []
                tree.push(new RomanNumeral(left as string))
                leftExpression = tree[tree.length - 1] as IAbstractExpression
            } else {
                leftExpression = new Numeral(left as string)
            }
            return leftExpression
        } else {
            leftExpression = tree[tree.length - 1] as IAbstractExpression
            return leftExpression
        }
    }
}
