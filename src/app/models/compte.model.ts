// import { Servicesdem } from "./servicesdem";
// import { Servicesoff } from "./servicesoff";
// import { Solde } from "./solde";

export class Compte {
    id?:string
    numCompte?: string
    intituleCompte?: string
    dernierMouvement?: string
    soldeComptable?: Number 
    soldeDepart?: Number
    dateDepart?: string
    dateOperation?: string
    reference?: string
    devise?: string
    tvaCom?:string
    deductionBanqueADistance?: string
    codeBanque?: Number   
    codeAgence?: Number
    cleRib?: Number
    ibanCompte?: string
    adresseCompte?: string
    domiciliation?: string
    ville?: string
    numTel?: Number
    bic?: string
    
    constructor(
        id?:string,
        numCompte?: string,
        intituleCompte?: string,
        dernierMouvement?: string,
        soldeComptable?: Number,
        soldeDispo?: Number,
        soldeDepart?: Number,
        dateDepart?: string,
        dateOperation?: string,
        reference?: string,
        devise?: string,
        tvaCom?:string,
        deductionBanqueADistance?: string,
        codeBanque?: Number,
        codeAgence?: Number,
        cleRib?: Number,
        ibanCompte?: string,
        adresseCompte?: string,
        domiciliation?: string,
        ville?: string,
        numTel?: Number,
        bic?: string,
    ){}
}