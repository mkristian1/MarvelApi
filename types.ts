export interface ICharacters {
    id: number,
    thumbnail: {
        path: string,
        extension: string,
    }
    name: string,
    description: string,
}

export interface ICategory {
    count: number,
    limit: number,
    offset: number,
    results: ICharacters[],
    total: number,
}