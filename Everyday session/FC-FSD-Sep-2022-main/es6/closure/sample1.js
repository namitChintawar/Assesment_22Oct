function greet(){
    let name="john";
    function displayName(){
        return 'Hi' + ' ' + name;
    }
    return displayName;

}
const g1 = greet();
console.log(g1);
console.log(g1());