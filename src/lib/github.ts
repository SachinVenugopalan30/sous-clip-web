export const REPO = "SachinVenugopalan30/sous-clip";
export const REPO_URL = `https://github.com/${REPO}`;

// One request per build, shared by every <GitHubStars> on the page. null when GitHub is unreachable
// or rate-limited: the badge then renders without a number and the browser fills it in.
let pending: Promise<number | null> | undefined;

export function buildTimeStars(): Promise<number | null> {
  pending ??= fetch(`https://api.github.com/repos/${REPO}`, {
    headers: { Accept: "application/vnd.github+json" },
  })
    .then((r) => (r.ok ? r.json() : null))
    .then((d) => (typeof d?.stargazers_count === "number" ? d.stargazers_count : null))
    .catch(() => null);
  return pending;
}
