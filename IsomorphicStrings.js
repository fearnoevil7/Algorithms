

const c = 'foo';
const d = 'bar';

const e = 'paper';
const f = 'title';

const q = 'lava'

const a = 'egg';
const b = 'add';


function IsomorphicValidator(s, t) {

    var isItIsomorphic = false;

    let myContainer = [];

    for(var x = 0; x < s.length; x++) {
        for(var i = x; i < s.length; i++) {
            if(i != x && s[i] === s[x]) {
                let microContainer = [];
                // console.log("Index", x, "Letter", s[x], "test", "Index", i, "Letter", s[i]);
                microContainer.push({"Index" : x, "Letter" : s[x]});
                microContainer.push({"Index" : i, "Letter" : s[i]});
                myContainer.push(microContainer);
            };
        };
    };
    console.log("*", myContainer);

    var counter = 0;
    var pristine = true;
    for(var a = 0; a < myContainer.length; a++){
        for(var v = 0; v < myContainer[a].length; v++) {
            console.log(t[myContainer[a][v].Index], t[myContainer[a][v+1].Index], t[myContainer[a][v].Index] === t[myContainer[a][v+1].Index]);
            if(t[myContainer[a][v].Index] === t[myContainer[a][v+1].Index]) {
                counter++;
                pristine = false;
            };
            break;
        };
    };
    if(counter === myContainer.length && pristine === false) {
        isItIsomorphic = true;
    }
    return isItIsomorphic;
}

// const y = 'aa';
// const z = 'bb'; 
// const y = 'aab';
// const z = 'aaa'; 
const y = '32767';
const z = '65535'; 
console.log(IsomorphicValidator(e, f));

