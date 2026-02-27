import React, { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/bookService";
import BookForm from "./BookForm";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch books from backend
  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Refresh books and close form
  const refreshBooks = () => {
    fetchBooks();
    setEditingBook(null);
    setShowForm(false);
  };

  // Delete book
  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      await deleteBook(id);
      fetchBooks();
    }
  };

  return (
    <div id="books">
      {/* Add Book Button */}
      <button
        onClick={() => { setShowForm(true); setEditingBook(null); }}
        style={{
          backgroundColor: "#9999ff",
          color: "#fff",
          padding: "8px 15px",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
          cursor: "pointer"
        }}
      >
        Add Book
      </button>

      {/* Book Form */}
      {showForm && (
        <BookForm
          bookToEdit={editingBook || undefined}
          onSuccess={refreshBooks}
          onCancel={() => setShowForm(false)}
        />
      )}

      {/* Book List */}
      <div style={{ display: "grid", gap: "20px" }}>
        {books.map((book) => (
          <div key={book.id} style={{
            backgroundColor: "#e6e6ff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ margin: "0 0 5px 0", color: "#3d1d28" }}>{book.title}</h3>
            <p style={{ margin: "0 0 5px 0", color: "#3333ff" }}>Author: {book.author}</p>
            <p style={{ margin: "0 0 10px 0" }}>{book.description}</p>
            <div>
              <button
                onClick={() => { setEditingBook(book); setShowForm(true); }}
                style={{
                  marginRight: "10px",
                  backgroundColor: "#9999ff",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book.id)}
                style={{
                  backgroundColor: "#000066",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
