export interface IContact {
  name: string;
  phoneNumber: string;
}

export const Contacts = {
  getContacts: async () => {
    const response = await fetch("http://backend:3000/contacts");
    return (await response.json()) as IContact[];
  },
  addContact: async (contact: IContact) => {
    await fetch("http://backend:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
  },
};
