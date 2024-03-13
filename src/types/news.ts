export interface INews{
    id: number,
    title: string,
    description: string,
    createdAt: Date,
    refreshPage: () => void;
}