/**
 *  Maximum allowed time.
 *  @constant
 *  @type {number}
 *  @default
 */
export const maxTime: number = Math.pow(10, 8) * 24 * 60 * 60 * 1000

/**
 *  Minimum allowed time.
 *  @constant
 *  @type {number}
 *  @default
 */
export const minTime: number = -maxTime

/**
 * Days In Year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *  @constant
 *  @type {number}
 *  @default
 */
export const daysInYear: number = 365.2425
