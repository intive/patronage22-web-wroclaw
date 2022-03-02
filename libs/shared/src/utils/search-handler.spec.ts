import Fuse from "fuse.js";

import { PresentationSearchItem } from "../components/search-bar/types";
import { SEARCH_CONFIG } from "../constants";
import { searchHandler } from "./search-handler";

const testData: Record<string, Fuse.FuseResult<PresentationSearchItem>[]> = {
  java: [
    { item: { title: "Javascript for begginers", id: "3d7812ee-43b5-43f3-8a3e-ea8938cbf8c1" }, refIndex: 1 },
    { item: { title: "Advanced Javascript", id: "1523a989-ceee-422a-b460-d5e2b842f742" }, refIndex: 3 },
    { item: { title: "Advanced typescript", id: "8ef796d1-b39d-4c4b-91a4-689534944d66" }, refIndex: 0 },
    { item: { title: "Advanced React", id: "db5d7672-b143-4fa4-941c-5aa71e0eb575" }, refIndex: 2 }
  ],
  react: [
    { item: { title: "React for begginers", id: "73bae9d6-3af9-4927-998b-605fc215dfac" }, refIndex: 5 },
    { item: { title: "Advanced React", id: "db5d7672-b143-4fa4-941c-5aa71e0eb575" }, refIndex: 2 }
  ]
};

const mockedSearch = jest.fn().mockImplementation((mockedPhrase: string) => testData[mockedPhrase]);

jest.mock("fuse.js", () => {
  return jest.fn().mockImplementation(() => ({ search: mockedSearch }));
});

describe("search-handler", () => {
  const searchPhrase = ["java", "react"];

  it("should return proper table of filtered items", () => {
    searchPhrase.forEach(phrase => {
      jest.clearAllMocks();

      expect(searchHandler({ keys: ["title"], text: phrase, offset: SEARCH_CONFIG.offset, limit: SEARCH_CONFIG.limit })).toEqual(
        testData[phrase]
      );
      expect(mockedSearch).toHaveBeenCalledWith(phrase.slice(SEARCH_CONFIG.offset, SEARCH_CONFIG.limit));
    });
  });
});
