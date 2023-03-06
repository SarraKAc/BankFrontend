// import { Servicesdem } from "./servicesdem";
// import { Servicesoff } from "./servicesoff";
// import { Solde } from "./solde";

export class Utilisateur {
    id?:string
    Nom?: string
    Prenom?: string
    dob?: Date
    email?:string
    IndicatifPays?: string
    NumTel?: Number
    CIN?: Number 
    agence?: string
    Identifiant?: string
    MDP?: string
    solde?: Number
    passwordHash?: string
    isAdmin?:boolean
    // compte?:[]
    // servicesdem?: Servicesdem[] |any
    // servicesoff?: Servicesoff[] |any
    constructor(
        id?:string,
        Nom?: string, 
        Prenom?: string,
        dob?: Date,
        email?:string,
        IndicatifPays?: string,
        NumTel?: Number,
        CIN?: Number,
        agence?: string,
        Identifiant?: string,
        MDP?: string,
        solde?: Number,
        passwordHash?:string,
        isAdmin?: boolean,
        // compte?:[],
        //  servicesdem?: Servicesdem[] | any ,
        //  servicesoff?: Servicesoff[] |any
    ){}
}