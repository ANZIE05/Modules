// exporting function(named export)

export function sub(num1: number, num2: number): string{
    const resut: number = num1 - num2;
    return `Subtraction: ${resut}`

}

//exporting Division(Default export)
// we only can do "export default" one time in one file
export default function divi(no1: number, no2: number): number{
    const result: number = no1 / no2;
    return result;
}