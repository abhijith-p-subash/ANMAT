import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path:'',
    component: LayoutComponent,
    data:{
      layout:'empty'
    },
    children:[
      {
        path:'sign-in',
        loadChildren: ()=> import('./modules/auth/sign-in/sign-in.module').then((m)=> m.SignInModule)
      }
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/admin/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/admin/user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];
