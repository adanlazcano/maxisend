/* eslint-disable @typescript-eslint/no-explicit-any */
import EntriesComponent from "@/components/entries";
import * as useEntriesHook from "@/hooks/entries/useEntries";
import { MemoryRouter } from "react-router-dom";
import { store } from "@/redux/store";
import { Entry } from "@/types";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Entries", () => {
  const useEntriesS: any = vi.spyOn(useEntriesHook, "useEntries");

  let items: Entry[];

  it("it should render the data", () => {
    items = [
      {
        title: "Rake",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

        images: {
          "Poster Art": {
            url: "https://streamcoimg-a.akamaihd.net/000/165/9/1659-PosterArt-b326059d852397768897083483b44324.jpeg",
            width: 1000,
            height: 1500,
          },
        },
        releaseYear: 2010,
      },
    ];

    useEntriesS.mockReturnValue({
      currentRecords: items,
    });
  });

  it("should render the the list of entries", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Provider store={store}>
          <EntriesComponent />
        </Provider>
      </MemoryRouter>
    );
    expect(getByTestId("entries-list").children.length).toBe(items.length);
  });
});
