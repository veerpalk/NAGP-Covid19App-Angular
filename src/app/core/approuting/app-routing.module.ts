import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from 'src/app/login/login.module';
import { AdminLoginComponent } from 'src/app/login/admin-login/admin-login.component';
import { NewsModule } from 'src/app/news/news.module';
import { LatestNewsComponent } from 'src/app/news/latest-news/latest-news.component';
import { newsRoutes } from 'src/app/news/news-routing.module';
import { PageNotFoundComponent } from 'src/app/common/page-not-found/page-not-found.component';
import { PrecautionsModule } from 'src/app/precautions/precautions.module';
import { PrecautionsComponent } from 'src/app/precautions/precautions/precautions.component';
import { MainDashboardModule } from 'src/app/main-dashboard/main-dashboard.module';
import { MainDashboardComponent } from 'src/app/main-dashboard/main-dashboard/main-dashboard.component';
import { mainDashboardRoutes } from 'src/app/main-dashboard/main-dashboard-routing.module';


const routes: Routes = [
  {path:'', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'dashboard', component: MainDashboardComponent, children: [...mainDashboardRoutes]},
  {path:'news', component: LatestNewsComponent, children: [...newsRoutes]},
  {path:'login', component: AdminLoginComponent},
  {path:'precautions', component: PrecautionsComponent},
  {path:'**', component: PageNotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            LoginModule, NewsModule, PrecautionsModule, MainDashboardModule],
  exports: [RouterModule, LoginModule, NewsModule, PrecautionsModule, MainDashboardModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('App Routing module loaded.');
  }
 }
