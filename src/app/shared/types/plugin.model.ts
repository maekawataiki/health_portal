export interface Plugin {
    _id?: string;
    unique_id?: string;
    author?: string;
    scripts?: Script[];
    // public
    version?: string;
    title?: string;
    description?: string;
    // rating?: number;
    reviews?: any;
    doc?: string;
}

export interface Script {
    name: string;
    code: string;
    state?: object;
}