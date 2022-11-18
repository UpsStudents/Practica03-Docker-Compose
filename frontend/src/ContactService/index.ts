export interface IContact {
  name: string;
  phoneNumber: string;
}

export const Contacts = {
  getContacts: async () => {
    const response = await fetch("/api/contacts");
    return (await response.json()) as IContact[];
  },
  addContact: async (contact: IContact) => {
    await fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
  },
};
