import mongoose from "mongoose";

export interface IFood extends mongoose.Document {
    GROUP: number;
    CODE: number;
    INDEX: number;
    Tagnames: string;
    REFUSE: number;
    ENERC_KCAL: number;
    ENERC: number;
    WATER: number;
    PROT: number;
    PROTCAA: number;
    FAT: number;
    FATNLEA: number;
    FASAT: number;
    FAMS: number;
    FAPU: number;
    CHOLE: number;
    CARB: number;
    CHOAVLM: number;
    FIBSOLS: number;
    FIBSOLL: number;
    FIBSOL: number;
    FIBINS: number;
    FIBTG: number;
    ASH: number;
    NA: number;
    K: number;
    CA: number;
    MG: number;
    P: number;
    FE: number;
    ZN: number;
    CU: number;
    MN: number;
    ID: number;
    SE: number;
    CR: number;
    MO: number;
    RETOL: number;
    CARTA: number;
    CARTB: number;
    CRYPXB: number;
    CARTBEQ: number;
    VITA_RAE: number;
    VITD: number;
    TOCPHA: number;
    TOCPHB: number;
    TOCPHG: number;
    TOCPHD: number;
    VITK: number;
    THIAHCL: number;
    RIBF: number;
    NIA: number;
    NIAEQ: number;
    VITB6A: number;
    VITB12: number;
    FOL: number;
    PANTAC: number;
    BIOT: number;
    VITC: number;
    NACL_EQ: number;
    ALC: number;
    NITRA: number;
    THEBRN: number;
    CAFFN: number;
    TAN: number;
    POLYPHENT: number;
    ACEAC: number;
    OIL: number;
    OA: number;
    CWEIGHT: number;
    NOTE: string;
}

const foodSchema = new mongoose.Schema({
    GROUP: { type: Number, required: false },
    CODE: { type: Number, required: false },
    INDEX: { type: Number, required: false },
    Tagnames: { type: String, required: true, text: true },
    REFUSE: { type: Number, required: false },
    ENERC_KCAL: { type: Number, required: false },
    ENERC: { type: Number, required: false },
    WATER: { type: Number, required: false },
    PROT: { type: Number, required: false },
    PROTCAA: { type: Number, required: false },
    FAT: { type: Number, required: false },
    FATNLEA: { type: Number, required: false },
    FASAT: { type: Number, required: false },
    FAMS: { type: Number, required: false },
    FAPU: { type: Number, required: false },
    CHOLE: { type: Number, required: false },
    CARB: { type: Number, required: false },
    CHOAVLM: { type: Number, required: false },
    FIBSOLS: { type: Number, required: false },
    FIBSOLL: { type: Number, required: false },
    FIBSOL: { type: Number, required: false },
    FIBINS: { type: Number, required: false },
    FIBTG: { type: Number, required: false },
    ASH: { type: Number, required: false },
    NA: { type: Number, required: false },
    K: { type: Number, required: false },
    CA: { type: Number, required: false },
    MG: { type: Number, required: false },
    P: { type: Number, required: false },
    FE: { type: Number, required: false },
    ZN: { type: Number, required: false },
    CU: { type: Number, required: false },
    MN: { type: Number, required: false },
    ID: { type: Number, required: false },
    SE: { type: Number, required: false },
    CR: { type: Number, required: false },
    MO: { type: Number, required: false },
    RETOL: { type: Number, required: false },
    CARTA: { type: Number, required: false },
    CARTB: { type: Number, required: false },
    CRYPXB: { type: Number, required: false },
    CARTBEQ: { type: Number, required: false },
    VITA_RAE: { type: Number, required: false },
    VITD: { type: Number, required: false },
    TOCPHA: { type: Number, required: false },
    TOCPHB: { type: Number, required: false },
    TOCPHG: { type: Number, required: false },
    TOCPHD: { type: Number, required: false },
    VITK: { type: Number, required: false },
    THIAHCL: { type: Number, required: false },
    RIBF: { type: Number, required: false },
    NIA: { type: Number, required: false },
    NIAEQ: { type: Number, required: false },
    VITB6A: { type: Number, required: false },
    VITB12: { type: Number, required: false },
    FOL: { type: Number, required: false },
    PANTAC: { type: Number, required: false },
    BIOT: { type: Number, required: false },
    VITC: { type: Number, required: false },
    NACL_EQ: { type: Number, required: false },
    ALC: { type: Number, required: false },
    NITRA: { type: Number, required: false },
    THEBRN: { type: Number, required: false },
    CAFFN: { type: Number, required: false },
    TAN: { type: Number, required: false },
    POLYPHENT: { type: Number, required: false },
    ACEAC: { type: Number, required: false },
    OIL: { type: Number, required: false },
    OA: { type: Number, required: false },
    CWEIGHT: { type: Number, required: false },
    NOTE: { type: String, required: false }
});

export const Food = mongoose.model<IFood>('Food', foodSchema);
