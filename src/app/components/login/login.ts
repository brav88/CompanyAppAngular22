import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = signal('');
  pwd = signal('');
  message = signal('');

  async onSubmit() {
    const ok = await this.authService.login(this.user(), this.pwd());
    this.message.set(ok ? 'Login correcto' : 'Credenciales inválidas');
    if (ok) {
      this.router.navigate(['/movies']);
    } else {
      this.message.set('Credenciales inválidas');
    }
  }
}
