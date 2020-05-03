import { Delta } from './delta-changes'

export class DistrictCaseDetail {
    districtName: string
    notes: string
    active: number
    confirmed: number
    deceased: number
    recovered: number
    delta: Delta;
}

