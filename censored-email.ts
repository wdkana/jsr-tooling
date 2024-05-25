/**
 * A module providing a function to create a new censored email address.
 * 
 * @module
 *
 * @example
 * without prefix: censoredEmail("dea.testmail@email.com");
 * output: *ea*t*st***l@email.com
 * using prefix: censoredEmail("dea.testmail@email.com", "$");
 * output: de$.$$$$mai$@email.com
 */

/**
 * Censored Email Address.
 *
 * @param email The email of the input to be censored.
 * @param prefix The censor character, default value is '*' as string.
 */

/**

 */

export function censoredEmail(email: string, prefix: string = '*'): string {
    /** store splitted email by @ symbol. */
    const [localPart, domainPart] = email.split('@');

    /** validate if the email length is not great to be censored */
    if (localPart.length <= 2) {
        return email;
    }

    /** store to new local variable */
    let localPartArray = localPart.split('');

    // Documentation for the random asterisks generation logic
    const numAsterisks = Math.max(1, Math.floor(localPart.length / 2));

    /** generate random indices to replace with prefix */
    const randomIndices: number[] = new Array(numAsterisks).fill(0).map(() => {
        let index: number;
        do {
            index = Math.floor(Math.random() * localPart.length);
        } while (localPartArray[index] === prefix); // make sure the random index is not already censored
        return index;
    });

    /** replace characters at random indices with prefix */
    const censoredLocal = localPartArray.map((char, index) => (randomIndices.includes(index) ? prefix : char)).join('');

    return `${censoredLocal}@${domainPart}`;
}