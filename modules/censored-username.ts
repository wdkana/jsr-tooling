/**
 * A module providing a function to create a new censored username input.
 * This function takes a `ParamProps` object as its argument and returns a censored version of the provided username string.
 * Each character in the input string that matches an element in the `sensitivityList` is replaced with the `prefix` value.
 *
 * @module
 * 
 * @example
 * without prefix: censorUsername('deaafrizal'); returns 'd**a**z*l'
 * using prefix: censorUsername('deaafrizal', '#'); returns 'd##a##z#l'
 */

/**
 * Censored Username Input.
 *
 * @param username The username of the input to be censored.
 * @param prefix The censor character, default value is '*' as string.
 */
export function censoredUsername(username: string, prefix: string = "*"): string {

    /** validate input not empty */
    if (!username || username.length <= 3 || typeof username !== "string") return username;

    // A list of vowels and uppercase vowels used for checking the sensitivity level of a given string.
    const sensitivityList = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    return username.split('').map((char) => (sensitivityList.includes(char.toLowerCase()) ? prefix || '*' : char)).join('');
}