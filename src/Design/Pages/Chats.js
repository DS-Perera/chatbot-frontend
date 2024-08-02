import React, { useState } from "react";
import TopBar from "../Components/TopBar";

const initialContacts = [
  {
    id: 1,
    name: "Contact Name 1",
    messages: [
      { from: "user", text: "User Message 1" },
      { from: "bot", text: "Bot Message 1" },
    ],
  },
  {
    id: 2,
    name: "Contact Name 2",
    messages: [
      { from: "user", text: "User Message 2" },
      { from: "bot", text: "Bot Message 2" },
      { from: "user", text: "User Message 2" },
      { from: "bot", text: "Bot Message 2" },
      { from: "user", text: "User Message 2" },
      { from: "bot", text: "Bot Message 2" },
    ],
  },
  {
    id: 3,
    name: "Contact Name 3",
    messages: [
      { from: "user", text: "User Message 3" },
      { from: "bot", text: "Bot Message 3" },
    ],
  },
  {
    id: 4,
    name: "Contact Name 4",
    messages: [
      { from: "user", text: "User Message 4" },
      { from: "bot", text: "Bot Message 4" },
    ],
  },
];

export default function Chatbots(prop) {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <TopBar userName={prop.userName} title="Dashboard > Conversations" />
      <div className="container card rounded-3 py-5 px-5">
        <div className="d-flex justify-content-between">
          <h2 className="page-title mb-3 primary-clr">
            People engaged with Chatbot
          </h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="list-group">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  type="button"
                  className={`list-group-item list-group-item-action ${
                    selectedContact.id === contact.id ? "active" : ""
                  }`}
                  onClick={() => handleContactClick(contact)}
                >
                  {contact.name}
                </button>
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{selectedContact.name}</h5>
                <div className="chat-window">
                  {selectedContact.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={
                        msg.from === "user" ? "user-message" : "bot-message"
                      }
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message"
                  />
                  <button className="btn btn-primary" type="button">
                    Send
                  </button>
                  <button className="btn btn-secondary" type="button">
                    Automate Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
