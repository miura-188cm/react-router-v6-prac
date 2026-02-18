import {
  Outlet,
  Link,
  useLoaderData,
  Form
} from "react-router-dom";
import { getContacts } from "../type";
import type { Contact } from "../type";

export async function loader(): Promise<{ contacts: Contact[] }> {
  const contacts = [...getContacts]
  return { contacts }
}

export async function action() {
  return { id: 'test', createdAt: 20260327 };
}

export default function Root() {
  const contacts = useLoaderData() as { contacts: Contact[] }
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <Form >
            <button type='submit'>New</button>
          </Form>
        </div>
        <nav>
          {contacts.contacts ? (
            <ul>
              {contacts.contacts.map((contact) => (
                <li key={contact.last}>
                  <Link to={`contacts/${contact}`}>
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
