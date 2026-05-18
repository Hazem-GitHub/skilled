import { PostHog } from "posthog-node";

let posthogClient: PostHog | null = null;

const token =
	process.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN ||
	import.meta.env.VITE_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (!token) {
	throw new Error(
		"PostHog project token is required. Set VITE_PUBLIC_POSTHOG_PROJECT_TOKEN environment variable.",
	);
}

export function getPostHogClient() {
	if (!posthogClient) {
		posthogClient = new PostHog(token, {
			host: process.env.VITE_PUBLIC_POSTHOG_HOST,
			// Flush immediately in dev for testing, batch in production
			flushAt: process.env.NODE_ENV === "production" ? 20 : 1,
			flushInterval: process.env.NODE_ENV === "production" ? 10000 : 0,
		});
	}
	return posthogClient;
}

export async function shutdownPostHog() {
	if (posthogClient) {
		await posthogClient.shutdown();
		posthogClient = null;
	}
}

// Register shutdown handler
if (typeof process !== "undefined") {
	process.on("SIGTERM", shutdownPostHog);
	process.on("SIGINT", shutdownPostHog);
}
