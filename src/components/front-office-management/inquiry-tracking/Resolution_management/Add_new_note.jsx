import React, { useState } from "react";

export default function Add_new_note() {
  // State to control dialog visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to manage notes
  const [notes, setNotes] = useState([
    {
      id: 1,
      author: "Godwin David",
      content: "Whatever the notification turns out to be, let it be anyhow you want it. The notification turn out to be. Let it be anyhow you want it.",
      date: "12/02/2024",
    },
  ]);

  const [newNote, setNewNote] = useState("");

  // Open dialog
  const openDialog = () => setIsOpen(true);

  // Close dialog
  const closeDialog = () => setIsOpen(false);

  // Handle adding a new note
  const handleAddNote = () => {
    if (newNote.trim()) {
      setNotes([
        ...notes,
        {
          id: notes.length + 1,
          author: "You",
          content: newNote,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setNewNote(""); // Clear input
    }
  };

  return (
    <div>
      {/* Button to open the dialog */}
      <button onClick={openDialog} className="font-medium">
        Add Notes
      </button>

      {/* Modal dialog */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "20px",
              width: "400px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Dialog Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: 'relative' }}>
              <h3>Notes</h3>
              <button
                onClick={closeDialog} className="absolute cursor-pointer top-1 right-0 text-gray-500 border border-gray-500 rounded-full w-[25px] h-[25px] outline-none flex justify-center items-center"
              >
                &times;
              </button>
            </div>
            <p style={{ fontSize: "14px", color: "#666" }}>Tracking ID: 123456</p>

            {/* Notes Section */}
            <div style={{ margin: "20px 0" }}>
              {notes.map((note) => (
                <div key={note.id} style={{ marginBottom: "10px" }}>
                  <p className="font-bold mb-3 flex items-center gap-2">
                    <p className="w-[30px] h-[30px] rounded-full bg-yellow-600"></p>
                    {note.author}
                  </p>
                  <p style={{ margin: "5px 0", fontSize: "14px" }}>{note.content}</p>
                  <p style={{ fontSize: "12px", color: "#999", textAlign: 'end'}}>{note.date}</p>
                </div>
              ))}
            </div>

            {/* Add Note Input */}
            <p className="font-medium pb-2">Add note</p>
            <textarea className="w-full outline-none border rounded-md p-3 mb-6"
              rows="3"
              placeholder="Enter note"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
                <button className="w-[100px] font-medium bg-blue-900 text-white p-2 border-none rounded-md cursor-pointer" onClick={handleAddNote}>
                Send
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
