export class Property{
    constructor(
        public id:number,
        public name:string,
        public person_id:number,
        public exploitation_type_id:number,
        public type_tenencia_id:number,
        public image:string,
        public description:string,
        public num_parcelas:string,
        public alta_padron:Date,
        public type_superficie:string
    ){
        
    }
}