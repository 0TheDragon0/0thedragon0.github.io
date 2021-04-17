import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseContentComponent } from './components/browse-content/browse-content.component';
import { ContentHomepageComponent } from './components/content-homepage/content-homepage.component';
import { ContributeComponent } from './components/contribute/contribute.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthGuardService } from './services/guards/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'content-home', component: ContentHomepageComponent, canActivate: [AuthGuardService] },
    { path: 'contribute', component: ContributeComponent, canActivate: [AuthGuardService] },
    { path: 'browse-content', component: BrowseContentComponent, canActivate: [AuthGuardService] }
];

@NgModule({
    providers: [AuthGuardService],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }