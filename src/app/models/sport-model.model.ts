import { CompetitionModel } from './competition-model.model';

export class SportModel {
    constructor(public name: string, public id: { competitions: CompetitionModel[] }) { }
}
