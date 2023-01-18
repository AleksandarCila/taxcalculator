import React,{useContext} from 'react';

import { TaxContext } from '../../Context';
import { IncomeCalculator, TimeFrame } from '../../Models/IncomeCalculator';

import { GridItem } from './components';

export function SalaryGrid() {
    const {gross,timeFrame} = useContext(TaxContext);

    const taxCalculator = new IncomeCalculator();
	return <div className='w-[100%] flex flex-wrap justify-center items-center gap-5 p-5'>
        <GridItem title="Weekly" data={taxCalculator.getResult(gross,timeFrame, TimeFrame.WEEKLY)}/>
        <GridItem title="Forthnightly" data={taxCalculator.getResult(gross,timeFrame,TimeFrame.FORTHNIGHTLY)}/>
        <GridItem title="Monthly" data={taxCalculator.getResult(gross,timeFrame,TimeFrame.MONTHLY)}/>
        <GridItem title="Annual" data={taxCalculator.getResult(gross,timeFrame,TimeFrame.ANNUAL)}/>
    </div>;
}
