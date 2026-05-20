interface SkillRecord {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    installCommand: string;
    createdAt: string | null; 
    upvotes: number;
    commentCount: number;
    usageExample: string;
    promptConfig: string;
    author: UserRecord
}

interface UserRecord {
    clerkId: string;
    email: string;
    username: string;
    imageUrl: string;
}