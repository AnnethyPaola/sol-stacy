import { conditions } from "../enums/Conditions.enums";
import { status } from "../enums/status.enums";
import { base } from "./base.models";

export interface QueuePerson extends base{
    QueueId: number,
    PersonId: number
    Status: status,
    Conditions: conditions,
    DateTime : Date,
}