
  export interface IPercentualData {
    period: string;
    value: number;
  }
  
  export interface IStackedData {
    period: string;
    entry: [label: string, value: number];
  }

  export interface IData {
    country?: string;
    state?: string;
    city?: string;
    label?: string;
    period: string;
    value: number;
  }