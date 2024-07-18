// exporting function(named export)
export function sub(num1, num2) {
    const resut = num1 - num2;
    return `Subtraction: ${resut}`;
}
//exporting Division(Default export)
// we only can do "export default" one time in one file
export default function divi(no1, no2) {
    const result = no1 / no2;
    return result;
}
