import { Routes } from '@angular/router';
import { Home as HomeComponent } from './home/home';
import { Register } from './register/register';
import { Contact } from './contact/contact';
import { Profil } from './profil/profil';
import { Login } from './login/login';


export const routes: Routes = [
    //menarug halaman utama aplikasi
    {
        path: "",
        component : HomeComponent,
        title : "Home Page"
    },
        {
        path: "profile",
        component : Profil,
        //title : "profile"
    },
        {
        path: "login",
        component : Login,
    },
            {
        path: "register",
        component :Register,
    },
            {
        path: "contact",
        component :Contact,
    },



];
