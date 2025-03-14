import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { AirlineComponent } from './airline/airline.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'search', component: SearchComponent },
    {path: 'airlines', component: AirlineComponent },
    {path: 'details/:id', component: DetailsComponent },
    {path: '**', redirectTo: '' }

];
//u liniji 8 znaci da definise da bilo koja druga putanja a da ne odgovara ovim navedenim iznad
//ide na home page i na taj nacin ako neko da pogresan link nece dobiti praznu belu stranicu vec ce videti pocetnu stranicu
//>reload window i on ce sam ponovo da ucita sve biblioteke koje smo instalirali
//ova details komponenta znaci da doprema jos nek podatak kroz svoju putanju