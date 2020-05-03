import { StateDataInfo } from './state-data-info';
import { CaseTimeSeriesData } from './case-time-series-data';
import { TestedData } from './tested-data';

export class CovidStateData{
    cases_time_series : CaseTimeSeriesData[];
    statewise : StateDataInfo[];
    tested : TestedData[];
}