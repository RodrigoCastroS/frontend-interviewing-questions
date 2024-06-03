// Create a sleep function that takes one parameter (time) and
// will wait "time" ms

function sleep(time){
    return new Promise((res, rej)=> {
        setTimeout(()=>{
            res()
        }, time)

        rej(err => console.log(err))
    })
}


/*
    async function run() {
        await sleep(500);
        console.log('hello');
        await sleep(500);
        console.log('world');
    }
*/
