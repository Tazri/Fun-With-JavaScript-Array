// How to update exiting element.

const targetId = 3;
const updatingData = 'Pentm Focasa';

const users = [
    {name:'Md Tazri', id: 1},
    {name:"Tazri", id: 2},
    {name:"Focasa", id:3},
    {name:"Pentm",id:4}
]

console.log(users);

for(let i = 0; i < users.length; i++){
    if(targetId === users[i].id){
        users[i].name = updatingData;
    }
}

console.log(users);