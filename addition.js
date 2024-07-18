//exporting function(named expot)
export function add(num1, num2) {
    const result = num1 + num2;
    return `Addition: ${result}`;
}
//exporting variable(named export)
export const addDone = "Addition is done";
//exporting multiplication(default export)
export default function multi(no1, no2) {
    const result = no1 * no2;
    return result;
}
