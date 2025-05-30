
interface PartyDetails{
    name:string
    email:string
    phone:number
}


export  interface CreateContractDto {
    AggrementName: string
    Amount: number 
    ExpirationDate: string
    firstPartDetails : PartyDetails| null
    secoundPartDetails : PartyDetails | null
}
