
/*
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/



const Salarycalculator = (wage, hours, days) => {
    const grossMonthlySalary = wage * hours * days
    return grossMonthlySalary
}

const taxedSalary = (amount, taxPercentage) => {
    const taxAmount = (amount * taxPercentage) / 100
    const taxedAmount = amount - taxAmount
    return taxedAmount
}

const wagePerHour = 300 
const hoursDaily = 8 
const daysMonthly = 23 
const taxPercentage = 15 

const grossSalary = Salarycalculator(wagePerHour, hoursDaily, daysMonthly)
const netSalary = taxedSalary(grossSalary, taxPercentage)

console.log(`Gross Salary: ${grossSalary} CZK`)
console.log(`Net Salary (after ${taxPercentage}% taxation): ${netSalary} CZK`)


