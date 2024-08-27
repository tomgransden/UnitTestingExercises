import { render, screen, waitFor } from "@testing-library/react";
import CalendarSwitcher from "../calendar-switcher";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const user = userEvent.setup();

describe("calendar-switcher", () => {
  it("renders day by default", () => {
    render(<CalendarSwitcher />);
    expect(screen.getByText("Currently selected mode: day")).toBeVisible();
  });

  it("renders week when week icon pressed", async () => {
    render(<CalendarSwitcher />);
    user.click(screen.getByAltText("Calendar week view"));
    await waitFor(() =>
      expect(screen.getByText("Currently selected mode: week")).toBeVisible()
    );
  });

  it("renders month when month icon pressed", async () => {
    render(<CalendarSwitcher />);
    user.click(screen.getByAltText("Calendar month view"));
    await waitFor(() =>
      expect(screen.getByText("Currently selected mode: month")).toBeVisible()
    );
  });

  it("renders agenda when agenda icon pressed", async () => {
    render(<CalendarSwitcher />);
    user.click(screen.getByAltText("Calendar agenda view"));
    await waitFor(() =>
      expect(screen.getByText("Currently selected mode: agenda")).toBeVisible()
    );
  });
});
