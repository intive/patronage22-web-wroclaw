import Fuse from "fuse.js";

export const items = [
  { title: "Advenced typescript", id: "8ef796d1-b39d-4c4b-91a4-689534944d66" },
  { title: "Javascript for begginers", id: "3d7812ee-43b5-43f3-8a3e-ea8938cbf8c1" },
  { title: "Advenced React", id: "db5d7672-b143-4fa4-941c-5aa71e0eb575" },
  { title: "Advenced Javascript", id: "1523a989-ceee-422a-b460-d5e2b842f742" },
  { title: "Typescript for begginers", id: "acf31308-3432-4b08-a807-538d4f8e288d" },
  { title: "React for begginers", id: "73bae9d6-3af9-4927-998b-605fc215dfac" }
];

export const SearchHandler = (key: string, text?: string) => {
  const fuse = new Fuse(items, {
    keys: [key]
  });

  return text
    ? fuse.search(text)
    : items.map((item, index) => ({
        item,
        matches: [],
        score: 1,
        refIndex: index
      }));
};
