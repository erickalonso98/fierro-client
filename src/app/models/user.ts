export class User{
    constructor(
        public id:number,
        public name:string,
        public surname:string,
        public lastname:string,
        public email:string,
        public password:string,
        public description:string,
        public image:string,
        public roles:Array<any>
    ){
        
    }
}