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

// Filling Book Shelf

//
// We have a sequence of books: the i-th book has thickness books[i][0] and height books[i][1].
//
//     We want to place these books in order onto bookcase shelves that have total width shelfWidth.
//
//     We choose some of the books to place on this shelf (such that the sum of their thickness is <= shelf_width), then build another level of shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.
//
//     Return the height of the bookshelf after placing shelves in this manner.
//
//
//
// Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelf_width = 4
// Output: 8
// Explanation: The sum of the heights of the 3 shelves are 3 + 3 + 2 = 8.
// Constraints:
//     1 <= books.length <= 1000
// 1 <= books[i][0] <= shelf_width <= 1000
// 1 <= books[i][1] <= 1000
