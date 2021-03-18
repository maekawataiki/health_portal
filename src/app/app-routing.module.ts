import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './pages/auth/auth.guard';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(mod => mod.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'developer',
    loadChildren: () => import('./pages/developer/developer.module').then(mod => mod.DeveloperModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module').then(mod => mod.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
