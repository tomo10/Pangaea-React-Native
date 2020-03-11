
export const rhino = {name: 'Black Rhino Project', funding_required: 1000, image: 'na'}
export const elephant = {name: 'Save The Elephant', funding_required: 4000, image: 'na'}
export const rainforest = {name: 'Rainforest Conservation', funding_required: 50000, image: 'na'}
export const leopard = {name: 'Snow Leopard Protection', funding_required: 300, image: 'na'}


export const data: Array<Project> = [rhino, elephant, rainforest, leopard];

export interface Project {
    name: string;
    funding_required: number;
    image: string;
}

