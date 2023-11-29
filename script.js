
/*
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/


const salaryCalculator = (wage, hours, days) => {
    const grossIncomePerMonth = wage * hours * days
    return grossIncomePerMonth
}

const taxation = (wage, tax) => {
    const wageTax = (wage * tax) / 100;
    const taxedWage = wage - wageTax
    return taxedWage

}

const wage = 300
const hours = 8
const days = 23
const tax = 15

const grossSalary = salaryCalculator(wage, hours, days)
const netSalary = taxation(grossIncomePerMonth, taxPercentage)

console.log("<p>Gross Salary: ${grossSalary} CZK</p>")



