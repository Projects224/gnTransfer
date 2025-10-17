import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(credentials: any): Promise<{
        message: string;
    }>;
    register(userData: any): Promise<{
        message: string;
    }>;
}
