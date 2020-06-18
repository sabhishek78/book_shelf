function bookShelf(books, width) {
    if (books.some((e) => e[1] > width)) {
        return "not posssible";
    }
    if (books.length === 0) {
        return 0;
    }
    let sum = 0;
    let bookRow = [];
    let height = 0;
    for (let i = 0; i < books.length; i++) {
        sum = sum + books[i][1];
        bookRow.push(books[i]);
        if (sum > width) {
            bookRow.pop();
            sum = 0;
            height = height + Math.max(...bookRow.map((e) => e[1]));
            bookRow = [];
            i--;
        }
    }
    height = height + Math.max(...bookRow.map((e) => e[1]));
    return height;
}
console.log(
    bookShelf(
        [
            [1, 1],
            [2, 3],
            [2, 3],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 2],
        ],
        4
    )
);
console.log(
    bookShelf(
        [
            [1, 4],
            [2, 3],
            [2, 3],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 2],
        ],
        4
    )
);
console.log(
    bookShelf(
        [
            [1, 4],
            [2, 3],
            [2, 3],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 2],
            [1, 1],
        ],
        4
    )
);
console.log(
    bookShelf(
        [
            [1, 5],
            [2, 3],
            [2, 3],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 2],
            [1, 1],
        ],
        4
    )
);
console.log(bookShelf([], 4));
