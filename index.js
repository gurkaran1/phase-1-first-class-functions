function receivesAFunction (spy) {
console.log (spy())
} 
function returnsANamedFunction() {
return function helloName(name){
    return name !=''
}
}
function returnsAnAnonymousFunction() {
    return function() {

    }

}
