import React from 'react';
import { calculateInvestmentResults, formatter } from "../util/investment.js";

const Results = ({ input }) => {

    const resultsData = calculateInvestmentResults(input);

    return (
        <table id="result" >
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {

                    const totalInterest = yearData.valueEndOfYear - ((yearData.annualInvestment * yearData.year) + input.initialInvestment);

                    // const investedCapital = input.initialInvestment+(yearData.annualInvestment*yearData.year);

                    const investedCapital = yearData.valueEndOfYear - totalInterest;
                    
                    return <tr key={yearData.year} >
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(investedCapital)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results
