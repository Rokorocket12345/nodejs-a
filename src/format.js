import chalk from "chalk";

export const currency = process.env.CURRENCY;

export default function formatExpense(expense) {
    const { id,descirption,amount} = expense;
    // ^destrukturiranje objekta
    return `${id}. ${description}: ${chalk.green(amount)} ${currency}`;
}