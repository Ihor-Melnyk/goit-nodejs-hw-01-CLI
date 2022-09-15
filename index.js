const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const contactById = await contacts.getContactById(id);
      console.log(contactById);
      break;

    case "add":
      const contactAdd = await contacts.addContact({ name, email, phone });
      console.log(contactAdd);
      break;

    case "update":
      const contactUpdate = await contacts.updateContact({
        id,
        name,
        email,
        phone,
      });
      console.log(contactUpdate);
      break;

    case "remove":
      const contactRemove = await contacts.removeContact(id);
      console.log(contactRemove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "35" });
// invokeAction({
//   action: "add",
//   name: "Cheburator",
//   email: "lotok@magazin.s.yaicami",
//   phone: "(066) 555-44-33",
// });
// invokeAction({
//   action: "update",
//   id: "pWcVled3bJOFo_egWqmD7",
//   name: "Cheburator2022",
//   email: "lotok@magazin.s.yaicami",
//   phone: "(066) 555-44-33",
// });
// invokeAction({
//   action: "remove",
//   id: "29Ij-JMjNIjicRLnEQpRw",
// });
