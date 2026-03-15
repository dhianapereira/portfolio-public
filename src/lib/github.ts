const GITHUB_API_BASE_URL = "https://api.github.com";
const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const DEFAULT_REPOSITORY_LIMIT = 6;

export type GitHubRepository = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    topics: string[];
    language: string | null;
    homepage: string | null;
    fork: boolean;
};

export async function fetchRecentRepositories(limit = DEFAULT_REPOSITORY_LIMIT) {
    if (!GITHUB_USERNAME) {
        throw new Error("Missing VITE_GITHUB_USERNAME");
    }

    const searchParams = new URLSearchParams({
        sort: "updated",
        direction: "desc",
        per_page: String(Math.max(limit * 2, limit)),
    });

    const response = await fetch(`${GITHUB_API_BASE_URL}/users/${GITHUB_USERNAME}/repos?${searchParams.toString()}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch repositories: ${response.status}`);
    }

    const repositories = (await response.json()) as GitHubRepository[];

    return repositories.filter((repository) => !repository.fork).slice(0, limit);
}
