export interface User {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    photo_id: string;
    created_at: Date;
    updated_at: Date;
    roles: string[];
    permissions: string[];
    profilePictureUrl?: string; // Optional field for user profile picture URL
}
