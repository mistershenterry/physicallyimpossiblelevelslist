/* ============================================================
   PILL — editors

   Everyone who has helped with the list, and how.

   Each editor picks a tag from EDITOR_TAGS below. The tag decides
   both the label shown beside the name and which icon appears.
   To add a new kind of helper, add a tag here and give it an
   `icon` — the icon itself is an SVG <symbol> in index.html.
   ============================================================ */

const EDITOR_TAGS = {
  owner: {
    label: "Owner",
    icon: "crown",
    blurb: "Runs the list and has the final say on placements."
  },
  developer: {
    label: "Developer",
    icon: "code",
    blurb: "Builds and maintains the website."
  }
};

/* Order here is the order they appear on the page. */
const EDITORS = [
  {
    name: "mistershenterry",
    tag: "owner",
    note: "Founder of PILL. Ranks the levels and maintains the list."
  },
  {
    name: "claude",
    tag: "developer",
    note: "Built the site and keeps it running."
  }
];
