interface ILocation {
    lat: number,
    long: number
}

export interface IJob {
    address: string,
    benefits: string[],
    createdAt: Date,
    description: string,
    email: string,
    employment_type: string[],
    id: string,
    location: ILocation,
    name: string,
    phone: string,
    pictures: string[],
    salary: string,
    title: string,
    updatedAt?: Date
}