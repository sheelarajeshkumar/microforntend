function asyncActivity(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            const result = Math.random();
            result > 0.5 ? resolve(result) : reject('... NA')
        })
    })
}

asyncActivity()
    .then(r => console.log(r))
    .catch(rr => console.log(rr))