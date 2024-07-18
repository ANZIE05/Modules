//exporting function(named expot)

export function add(num1: number, num2: number): string{
    const result: number = num1 + num2;
    return `Addition: ${result}`;
}
//exporting variable(named export)

export const addDone: string = "Addition is done";

//exporting multiplication(default export)

export default function multi(no1: number, no2: number): number{
    const result: number = no1 * no2;
    return result;
}
