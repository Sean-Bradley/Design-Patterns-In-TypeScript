// A Singleton Dictionary of Users

import Reports from './reports'
import Wallets from './wallets'

export default class Users {
    private static instance: Users
    private users: { [id: string]: { [id: string]: string } } = {}
    private reports = new Reports()
    private wallets = new Wallets()

    constructor() {
        if (Users.instance) {
            return Users.instance
        }
        Users.instance = this
    }

    registerUser(new_user: { [id: string]: string }): string {
        // register a user
        if (!(new_user['user_name'] in this.users)) {
            // generate really complicated unique user_id.
            // Using the existing user_name as the id for simplicity
            const user_id = new_user['user_name']
            this.users[user_id] = new_user
            this.reports.logEvent(`new user '${user_id}' created`)
            // create a wallet for the new user
            this.wallets.createWallet(user_id)
            // give the user a sign up bonus
            this.reports.logEvent(`Give new user '${user_id}' sign up bonus of 10`)
            this.wallets.adjustBalance(user_id, 10)
            return user_id
        }
        return ''
    }

    editUser(user_id: string, user: { [id: string]: string }): boolean {
        'do nothing. Not implemented yet'
        console.log(user_id)
        console.log(user)
        return false
    }

    changePwd(user_id: string, password: string): boolean {
        'do nothing. Not implemented yet'
        console.log(user_id)
        console.log(password)
        return false
    }
}
