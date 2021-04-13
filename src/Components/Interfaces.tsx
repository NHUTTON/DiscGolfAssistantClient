export interface IData {
    user: IUser
    message: string
    sessionToken: string
}

interface IUser {
    admin: string
}

export interface ICourse {
    id: string
    image: string,
    name: string, 
    city: string, 
    state: string, 
    holes: string, 
    distance: number, 
    tee: string,
    modal: boolean
}