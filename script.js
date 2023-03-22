// console.log("First");

// setTimeout(function() {
//     console.log("Second");
// }, 10);

// setTimeout(function() {
//     console.log("Forth");
// }, 0);

// console.log("Third");

function foo() {
    console.log("foo");
}
function bar() {
    foo();
    console.log("bar");
}
function baz() {
    bar();
    console.log("baz");
}

// foo();
// bar();
baz();

// baz => bar => foo



function getBook(book, result) {
    result(book);
}

getBook("Исскусство программирования", function(b) {
    console.log(b + " is good!");
});

/*
    tom1(function() {
        tom2(function() {
            tom3(function() {
                tom4(function() {
                    console.log("done!")
                })
            })
        })
    })
    console.log("4 books is ready")
*/

/*
    Мама готовит ужин и попросила дочку порезать хлеб. Также мама попросила сына сходить в магазин за хлебом.

    ? Брат пошел в магазин
    - когда вернется брат?
    - а точно ли брат вернется с хлебом?
    ! Сестра с ножом ждет брата у двери
    - сестра занимается своими делами
    - когда будет хлеб, тогда она его порежет
*/

let p1 = new Promise(function(resolve, reject) {
    let n = Math.random();
    if (n > 0.5) {
        resolve("Хлеб был куплен.");
    } else {
        reject("Проблемки с хлебушком =(");
    }
});
let p2 = new Promise(function(resolve, reject) {
    let n = Math.random();
    if (n > 0.2) {
        resolve("Хлебушек нарезан");
    } else {
        reject("Что-то пошло не так");
    }
})

p1
    .then(function(result) {
        console.log(result);
        return p2;
    })
    .then(function(result) {
        console.log(result);
        console.log("Ужин удался")
    })
    .catch(function(err) {
        console.warn(err);
    })


