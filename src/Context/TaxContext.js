import { createContext } from 'react';
import { TimeFrame } from '../Models';
import { SalaryType } from '../Models';

const initialValue = {
    gross:15000,
    timeFrame:TimeFrame.MONTHLY,
    salaryType: SalaryType.GROSS,
    setGross:()=>{},
    setTimeFrame:()=>{},
}

export const TaxContext = createContext(initialValue);
