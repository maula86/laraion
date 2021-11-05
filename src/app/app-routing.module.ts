import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'coba',
    loadChildren: () => import('./coba/coba.module').then( m => m.CobaPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'anggota',
    loadChildren: () => import('./pages/anggota/anggota.module').then( m => m.AnggotaPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'transaksi',
    loadChildren: () => import('./pages/transaksi/transaksi.module').then( m => m.TransaksiPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bookadd',
    loadChildren: () => import('./pages/bookadd/bookadd.module').then( m => m.BookaddPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'bookedit/:id',
    loadChildren: () => import('./pages/bookedit/bookedit.module').then( m => m.BookeditPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'anggotaadd',
    loadChildren: () => import('./pages/anggotaadd/anggotaadd.module').then( m => m.AnggotaaddPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
