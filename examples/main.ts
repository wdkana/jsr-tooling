import { censoredUsername } from "../modules/censored-username"
import { censoredEmail } from "../modules/censored-email"

const emailCheck = (email: string): void => {
    const result = censoredEmail(email)
    console.log("email without prefix -> ", result)
}

const usernameCheck = (username: string): void => {
    const result = censoredUsername(username)
    console.log("username without prefix -> ", result)
}

const emailCheckWithPrefix = (email: string): void => {
    const result = censoredEmail(email, '^')
    console.log("email using prefix -> ", result)
}

const usernameCheckWithPrefix = (username: string): void => {
    const result = censoredUsername(username, '$')
    console.log("email using prefix -> ", result)
}

function main() {
    const email = "deatest.123@gmail.com"
    const username = "deatest123.afrizal"

    emailCheck(email)
    usernameCheck(username)

    emailCheckWithPrefix(email)
    usernameCheckWithPrefix(username)
}

main()
