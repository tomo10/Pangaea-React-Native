
export const rhino = {name: 'Black Rhino Project', funding_required: 1000, image: 'https://lh3.googleusercontent.com/proxy/wX5t9E6W7B9ROjV7gw11pp8OX5PC8neRJAPgho1mTXcUmkIm_837JheKw43seAeH9HiP42kkWsxQAGZc47km328ASWA7-UHuK_tUFqL-GKrDa47ONUPynaoqWSBKVY9NlJ-YwJkRgf4TKD59zAMpdCf8gRci1MxkD9TmBIcjJPn8gb4a-bDZ48RYVDWzOL0Zcyyfmmx4Z2yo', donors: [
    {name: 'Thomas'},
    {name: 'Harry'},
    {name: 'Kristina'},
    {name: 'Alex'},
    {name: 'Alice'},
    {name: 'Angus'},
    {name: 'Tony'},
    {name: 'Dickie'},
    {name: 'Freddie'},
    {name: 'Hans'},
    {name: 'Totto'},
    {name: 'Lewis'},
    {name: 'Sebastian'},
    {name: 'Max'},
]}
export const elephant = {name: 'Save The Elephant', funding_required: 4000, image: 'https://c402277.ssl.cf1.rackcdn.com/photos/14206/images/hero_small/WW187785.jpg?1576774644', donors: [
    {name: 'Thomas'},
    {name: 'Harry'},
    {name: 'Kristina'},
    {name: 'Alex'},
    {name: 'Alice'},
    {name: 'Angus'},
    {name: 'Tony'},
    {name: 'Dickie'},
    {name: 'Freddie'},
    {name: 'Hans'},
    {name: 'Totto'},
    {name: 'Lewis'},
    {name: 'Sebastian'},
    {name: 'Max'},
]}
export const rainforest = {name: 'Rainforest Conservation', funding_required: 50000, image: 'https://www.dw.com/image/40320815_303.jpg', donors: [
    {name: 'Thomas'},
    {name: 'Harry'},
    {name: 'Kristina'},
    {name: 'Alex'},
    {name: 'Alice'},
    {name: 'Angus'},
    {name: 'Tony'},
    {name: 'Dickie'},
    {name: 'Freddie'},
    {name: 'Hans'},
    {name: 'Totto'},
    {name: 'Lewis'},
    {name: 'Sebastian'},
    {name: 'Max'},
]}
export const leopard = 
{
    name: 'Snow Leopard Protection', 
    funding_required: 300, 
    image: 'https://scx2.b-cdn.net/gfx/news/2017/snowleopard.jpg',
    donors: [
        {name: 'Thomas'},
        {name: 'Harry'},
        {name: 'Kristina'},
        {name: 'Alex'},
        {name: 'Alice'},
        {name: 'Angus'},
        {name: 'Tony'},
        {name: 'Dickie'},
        {name: 'Freddie'},
        {name: 'Hans'},
        {name: 'Totto'},
        {name: 'Lewis'},
        {name: 'Sebastian'},
        {name: 'Max'},
    ]
}

import { Project } from "../src/Project" 

export const data: Array<Project> = [rhino, elephant, rainforest, leopard];

// export interface Project {
//     name: string;
//     funding_required: number;
//     image: string;
// }

