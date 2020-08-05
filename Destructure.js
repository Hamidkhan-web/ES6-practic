const person = { name:'jack William', age: 18, job:'facebooking', gfName: 'Ema Watsone', address:'Kochu Khet', phoneNumbers: '0178222222', friends:['Tom hucks', 'tom cruise', 'tom yearn'] }

const{phoneNumbers} = person;
const complexObject = {
    name: 'abcd',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader',

    }
}

const {leader} = complexObject.info

//const { phoneNumbers, gfName, address, job} = person;
//const gfName = person.gfName;
//const phoneNumbers = person.phoneNumbers
//console.log(gfName, phoneNumbers, address, job);


const friends = ['sakib khan', 'salman khan', 'arman khan', 'amir khan']
const [chotoFriends, nextFriends, ...restFriends] = friends;
//console.log(chotoFriends, nextFriends);
console.log(restFriends);