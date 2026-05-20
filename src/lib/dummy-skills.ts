export const dummySkills: SkillRecord[] = [
	{
		id: "9e1472bb-27be-4c72-9597-27dac62a9f43",
		title: "Write Code",
		description:
			"Generate clean TypeScript snippets and scaffold common app patterns.",
		category: "Development",
		tags: ["typescript", "react", "boilerplate"],
		installCommand: "npx skild add write-code",
		createdAt: "2026-04-03T14:18:00.000Z",
		author: {
			clerkId: "user_3DrCnkAp9PFBekURJNnU4WjR3Xb",
			email: "hazem.ece@gmail.com",
			username: "hazem",
			imageUrl: "https://github.com/hazem.png",
		},
		upvotes: 3,
		commentCount: 1,
		usageExample:
			"Create a typed React hook for fetching paginated users with loading, error, and retry states.",
		promptConfig:
			"You are a senior TypeScript engineer. Generate clean, typed, production-ready code that follows React best practices. Prefer small reusable functions, explicit types, readable names, and include brief notes only where implementation choices matter.",
	},
	{
		id: "f1adf6d4-9d48-4dd5-bc0f-0e930cb74d9d",
		title: "Refactor Safely",
		description:
			"Improve structure while preserving behavior with focused, low-risk edits.",
		category: "Code Quality",
		tags: ["refactor", "maintainability", "clean-code"],
		installCommand: "npx skild add refactor-safely",
		createdAt: "2026-04-07T09:42:00.000Z",
		author: {
			clerkId: "user_3DrCnkAp9PFBekURJNnU4WjR3Xb",
			email: "hazem.ece@gmail.com",
			username: "hazem",
			imageUrl: "https://github.com/hazem.png",
		},
		upvotes: 1,
		commentCount: 0,
		usageExample:
			"Refactor this dashboard component to reduce duplication while keeping the same props, output, and behavior.",
		promptConfig:
			"You are a careful refactoring assistant. Preserve existing behavior and public APIs. Make minimal, focused changes, explain risk areas, avoid broad rewrites, and recommend tests for behavior that should remain unchanged.",
	},
	{
		id: "2c4f58af-157e-4a65-9e26-6a0d2d85f9d4",
		title: "Test Coverage Boost",
		description:
			"Create unit and integration test cases for edge paths and regressions.",
		category: "Testing",
		tags: ["vitest", "testing-library", "coverage"],
		installCommand: "npx skild add test-coverage-boost",
		createdAt: "2026-04-11T16:05:00.000Z",
		author: {
			clerkId: "user_3DrCnkAp9PFBekURJNnU4WjR3Xb",
			email: "hazem.ece@gmail.com",
			username: "hazem",
			imageUrl: "https://github.com/hazem.png",
		},
		upvotes: 4,
		commentCount: 2,
		usageExample:
			"Add Vitest and Testing Library tests for this login form, including validation errors and failed submit states.",
		promptConfig:
			"You are a testing specialist. Write meaningful tests for core behavior, edge cases, regressions, and user interactions. Prefer readable test names, realistic setup, minimal mocking, and assertions that verify outcomes instead of implementation details.",
	},
	{
		id: "7bdb20e7-d34f-4727-9c19-5b646fd0baf4",
		title: "API Contract Builder",
		description:
			"Draft typed request and response contracts for REST endpoints.",
		category: "Backend",
		tags: ["api", "zod", "contracts"],
		installCommand: "npx skild add api-contract-builder",
		createdAt: "2026-04-18T11:27:00.000Z",
		author: {
			clerkId: "user_3DrCnkAp9PFBekURJNnU4WjR3Xb",
			email: "hazem.ece@gmail.com",
			username: "hazem",
			imageUrl: "https://github.com/hazem.png",
		},
		upvotes: 2,
		commentCount: 1,
		usageExample:
			"Define Zod schemas and TypeScript types for POST /api/projects with success and error responses.",
		promptConfig:
			"You are a backend API contract designer. Create precise request, response, and error schemas using Zod and TypeScript. Include validation rules, inferred types, status-code-aware responses, and keep contracts easy to reuse across server and client code.",
	},
	{
		id: "c4825d7a-6ac6-4a50-9a67-7b4f71db9d9d",
		title: "Performance Tuner",
		description:
			"Identify render bottlenecks and optimize expensive client-side work.",
		category: "Optimization",
		tags: ["profiling", "memoization", "web-vitals"],
		installCommand: "npx skild add performance-tuner",
		createdAt: "2026-04-22T08:51:00.000Z",
		author: {
			clerkId: "user_3DrCnkAp9PFBekURJNnU4WjR3Xb",
			email: "hazem.ece@gmail.com",
			username: "hazem",
			imageUrl: "https://github.com/hazem.png",
		},
		upvotes: 0,
		commentCount: 0,
		usageExample:
			"Review this React page for unnecessary re-renders and optimize the slow table filtering interaction.",
		promptConfig:
			"You are a frontend performance engineer. Identify expensive renders, unnecessary recalculations, excessive effects, and avoidable network or bundle costs. Suggest targeted optimizations using profiling evidence, memoization, virtualization, debouncing, and Web Vitals best practices.",
	},
];
