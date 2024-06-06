import { formatCurrency } from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', ()=> {
  it('Converts cents into dollars', ()=> {
    expect(formatCurrency(2095)).toEqual('20.95')
  });

  it('Works with 0', ()=>{
    expect(formatCurrency(0)).toEqual('0.00')
  });

  it('rounds up to the nearest cents', ()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01')
  });
})