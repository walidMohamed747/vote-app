import { MatTableDataSource } from "@angular/material/table";

export interface vots {
    Status: string,
    CurrentVote: {
        ID: number,
        startDateTime: string,
        endDateTime: string,
        movieCount: 1,
        movies: [
            {
                ID: number,
                votingID: number,
                x: string,
                name: string,
                createdAt: string,
                updatedAt: string,
                uservotes: [
                    {
                        voteCount: number;
                    }
                ]
            },
        ]
    }
}


export interface votsDetail {
    ID: number,
    votingID: number,
    image: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    uservotes: uservote[] | MatTableDataSource<uservote>;
}
export interface uservote {
    voteCount: number;
}
export interface userDatasource {
    ID: number,
    votingID: number,
    image: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    uservotes?: MatTableDataSource<uservote>;

}

export interface postMovie {
    startDate: string,
    endDate: string,
    movies: [
        {
            name: string,
            image: string
        }
    ]
}