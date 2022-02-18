import Fuse from "fuse.js";

export const presentations = [
  { title: "Advenced typescript", id: "qwerty", data: ["1", "2"] },
  { title: "Javascript for begginers", id: "ytrewq", data: ["1", "2"] },
  { title: "Advenced React", id: "asdfgh", data: ["1", "2"] },
  { title: "Advenced Javascript", id: "asvgtt", data: ["1", "2"] },
  { title: "Typescript for begginers", id: "ghdfgh", data: ["1", "2"] },
  { title: "React for begginers", id: "askogh", data: ["1", "2"] }
];

export const SearchService = (text: string) => {
  const fuse = new Fuse(presentations, {
    keys: ["title"]
  });

  return text === ""
    ? presentations.map((val, inx) => ({
        item: val,
        matches: [],
        score: 1,
        refIndex: inx
      }))
    : fuse.search(text);
};
