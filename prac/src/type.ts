export type Contact = {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
}

export const getContacts: Contact[] = [
  {
    first: "Your",
    last: "Name",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  },
  {
    first: "Ada",
    last: "Lovelace",
    avatar: "https://robohash.org/adalovelace.png?size=200x200",
    twitter: "ada_codes",
    notes: "Analytical, punctual, loves math-heavy discussions.",
    favorite: false,
  },
  {
    first: "Grace",
    last: "Hopper",
    avatar: "https://robohash.org/gracehopper.png?size=200x200",
    twitter: "grace_debugs",
    notes: "Keeps a tidy backlog and insists on clear bug reports.",
    favorite: true,
  },
  {
    first: "Linus",
    last: "Torvalds",
    avatar: "https://robohash.org/linustorvalds.png?size=200x200",
    twitter: "linus_kernel",
    notes: "Prefers concise emails and clean diffs.",
    favorite: false,
  },
  {
    first: "Margaret",
    last: "Hamilton",
    avatar: "https://robohash.org/margarethamilton.png?size=200x200",
    twitter: "margaret_builds",
    notes: "Meticulous about safety checks and edge cases.",
    favorite: true,
  },
  {
    first: "Ken",
    last: "Thompson",
    avatar: "https://robohash.org/kenthompson.png?size=200x200",
    twitter: "ken_unix",
    notes: "Low-key, prefers simple and elegant solutions.",
    favorite: false,
  }
]
