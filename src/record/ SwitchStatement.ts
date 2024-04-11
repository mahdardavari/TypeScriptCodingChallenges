// TypeScript: Prefer Record over a Switch Statement

type UserRole = 'admin' | 'user';

const userRolePermissions: Record<UserRole, string[]> = {
    admin: ['create', 'read', 'update', 'delete'],
    user: ['read']
}

const adminPermissions = userRolePermissions['admin'];
