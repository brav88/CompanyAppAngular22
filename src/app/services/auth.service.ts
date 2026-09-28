import { Injectable, Service } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
    
    async login(user: string, pwd: string): Promise<boolean> {
        // Dummy: simula una espera de red y siempre autentica
        await new Promise((resolve) => setTimeout(resolve, 500));
        return true;
    }
}
