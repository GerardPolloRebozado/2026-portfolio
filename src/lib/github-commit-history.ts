type CacheData = {
    commits: any[];
    timestamp: number;
};

let commitCache: CacheData | null = null;

// Set Cache Time-To-Live (TTL) to 1 hour (in milliseconds)
const CACHE_TTL = 60 * 60 * 1000;

export async function getCachedCommits(username: string, token: string) {
    const now = Date.now();

    if (commitCache && now - commitCache.timestamp < CACHE_TTL) {
        console.log("Serving commits from cache...");
        return commitCache.commits;
    }

    const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    };

    try {
        const eventsUrl = `https://api.github.com/users/${username}/events/public`;
        const response = await fetch(eventsUrl, { headers });

        if (!response.ok)
            throw new Error(`Events fetch failed: ${response.status}`);

        const events = await response.json();
        let fetchedCommits = [];
        const pushEvents = events.filter((e: any) => e.type === "PushEvent");

        for (const event of pushEvents) {
            if (fetchedCommits.length >= 3) break;

            const repoName = event.repo.name;
            const headSha = event.payload.head;

            if (!headSha) continue;

            const commitUrl = `https://api.github.com/repos/${repoName}/commits/${headSha}`;
            const commitResponse = await fetch(commitUrl, { headers });

            if (commitResponse.ok) {
                const commitData = await commitResponse.json();
                fetchedCommits.push({
                    repo: repoName,
                    shortHash: commitData.sha.substring(0, 7),
                    message: commitData.commit.message.split("\n")[0],
                    url: commitData.html_url,
                });
            }
        }

        commitCache = {
            commits: fetchedCommits,
            timestamp: now,
        };

        return fetchedCommits;
    } catch (error) {
        console.error("Failed to retrieve commits:", error);
        return commitCache ? commitCache.commits : [];
    }
}
