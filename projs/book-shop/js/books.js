var gId = 0;

var gBooks = [
    { id: ++gId, title: "Titanic", price: 18.90 },
    { id: ++gId, title: "The maze", price: 6.65 },
    { id: ++gId, title: "Around the World in 80 Days", price: 7.20 }
]


function renderBooks(books) {
    var $elBoard = $('.tbl');
    var strHtml = '<tr> <td>id</td> <td>title</td> <td>price</td> <td>actions</td> </tr>';
    for (var i = 0; i < books.length; i++) {
        strHtml += '<tr> <td>' + books[i].id + '</td>\
         <td>' + books[i].title + '</td> \
         <td>' + books[i].price + '</td>\
         <td> \
            <button class="btn btn-primary" onClick="bookDetails('+ books[i].id + ')" data-toggle="modal" data-target=".bd-example-modal-lg">Read</button>\
            <button type="button" onClick="readAndUpdateBook('+ books[i].id + ')" class="btn btn-warning">Update</button>\
            <button type="button" onClick="deleteBook('+ books[i].id + ')" class="btn btn-danger">Delete</button>\
          </td>';
        strHtml += '</tr>\n';
    }

    console.table(strHtml);
    $elBoard.html(strHtml);
}


renderBooks(gBooks);

function deleteBook(bookId) {
    var idx = gBooks.findIndex(function (book) {
        return book.id === bookId
    })
    gBooks.splice(idx, 1);
    renderBooks(gBooks);
}

function readAndAddNewBook() {

}


function createBook() {
    var bookName = $('.book-name').val();
    var bookPrice = $('.book-price').val();
    addBook(bookName, bookPrice);
}


function addBook(name, price) {
    var newBook = {};
    gId++;
    newBook.id = gId;
    newBook.title = name;
    newBook.price = price;
    gBooks.push(newBook);
    renderBooks(gBooks);
}

function readAndUpdateBook(bookId) {
    var newPrice = +prompt('what the new price?');
    updateBook(bookId, newPrice);
}

function updateBook(bookId, bookPrice) {
    gBooks[bookId].price = bookPrice;
    renderBooks(gBooks);
}

function bookDetails(bookId) {
    console.log('bookDetails')
    $elImg = $('.selected-pic');
    $elImg.attr('src', 'img/img' + bookId + '.jpg')
    $elName = $('.name span');
    $elName.text('' + gBooks[bookId - 1].title + '');
    $elPrice = $('.price span');
    $elPrice.text('' + gBooks[bookId - 1].price + '');
}