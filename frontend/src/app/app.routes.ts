import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { AboutComponent } from './about/about.component';
import { ChatroomComponent } from './chatroom/chatroom.component'; // Import ChatroomComponent

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'play', component: PlayComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'chatroom', component: ChatroomComponent }, // Add Chatroom route
  { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Wildcard route
];

// path '**' is a wildcard route to redirect users to the home page
// in the case of an undefined route
