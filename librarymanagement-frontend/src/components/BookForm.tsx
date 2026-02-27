import React, { useState, useEffect } from "react";
import { createBook, updateBook } from "../services/bookService";

interface BookFormProps {
  bookToEdit?: { id: number; title: string; author: string; description: string };
  onSuccess: () => void; // callback to refresh book list
  onCancel?: () => void;  // optional cancel function
}

const BookForm: React.FC<BookFormProps> = ({ bookToEdit, onSuccess, onCancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
      setDescription(bookToEdit.description);
    }
  }, [bookToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const bookData = { title, author, description };

    try {
      if (bookToEdit) {
        // ✅ Include ID in body for backend check
        await updateBook(bookToEdit.id, { ...bookData, id: bookToEdit.id });
      } else {
        await createBook(bookData);
      }

      // Clear form
      setTitle("");
      setAuthor("");
      setDescription("");

      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Failed to save book. Check console for details.");
    }
  };

  return (
    <div style={{
      backgroundColor: "#e6e6ff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      marginBottom: "20px"
    }}>
      <h2 style={{ color: "#0000cc", marginBottom: "10px" }}>
        {bookToEdit ? "Edit Book" : "Add New Book"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #9999ff" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #9999ff" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #9999ff" }}
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#9999ff", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}
        >
          {bookToEdit ? "Update Book" : "Add Book"}
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            style={{ marginLeft: "10px", backgroundColor: "#999", color: "white", padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer" }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
};

export default BookForm;
