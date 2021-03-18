import { Plugin } from './plugin.model';

export interface Setting{
    _id?: string;
    owner: string;
    plugins: Plugin[];
    data: any;
}