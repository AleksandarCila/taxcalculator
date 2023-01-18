import { createContext } from 'react';
import { TimeFrame } from '../Models/IncomeCalculator';

const initialValue = {
    gross:15000,
    timeFrame:TimeFrame.MONTHLY,
    setGross:()=>{},
    setTimeFrame:()=>{},
}

export const TaxContext = createContext(initialValue);
