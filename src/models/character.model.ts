export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
}

export const EmptyCharacter: Character = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: ''
}
