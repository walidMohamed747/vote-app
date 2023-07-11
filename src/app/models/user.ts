export interface User {
  username: string;
  password:string;
}
export interface editData{
auth: any;
voteID: string,
startDate: string,
endDate: string,
movies:[
    {
        ID: number,
        name: string,
        image:string
  }
]
}
