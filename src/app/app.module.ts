import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotasMusicaisComponent } from './notas-musicais/notas-musicais.component';
import { NotasMusicaisMenoresComponent } from './notas-musicais-menores/notas-musicais-menores.component';
import { NotasMusicaisSustenidasComponent } from './notas-musicais-sustenidas/notas-musicais-sustenidas.component';
import { RitmicaComponent } from './ritmica/ritmica.component';
import { CampoHarmonicoComponent } from './campo-harmonico/campo-harmonico.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {FormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { NotasMusicaisDComponent } from './notas-musicais-d/notas-musicais-d.component';
import { NotasMusicaisFComponent } from './notas-musicais-f/notas-musicais-f.component';
import { NotasMusicaisEComponent } from './notas-musicais-e/notas-musicais-e.component';
import { NotasMusicaisGComponent } from './notas-musicais-g/notas-musicais-g.component';
import { NotasMusicaisAComponent } from './notas-musicais-a/notas-musicais-a.component';
import { NotasMusicaisBComponent } from './notas-musicais-b/notas-musicais-b.component';
import { NotasIntroComponent } from './notas-intro/notas-intro.component';
import { NotasMenoresIntroComponent } from './notas-menores-intro/notas-menores-intro.component';
import { NotasMenoresCComponent } from './notas-menores-c/notas-menores-c.component';
import { NotasMenoresDComponent } from './notas-menores-d/notas-menores-d.component';
import { NotasMenoresEComponent } from './notas-menores-e/notas-menores-e.component';
import { NotasMenoresFComponent } from './notas-menores-f/notas-menores-f.component';
import { NotasMenoresGComponent } from './notas-menores-g/notas-menores-g.component';
import { NotasMenoresAComponent } from './notas-menores-a/notas-menores-a.component';
import { NotasMenoresBComponent } from './notas-menores-b/notas-menores-b.component';
import { NotasSustenidasIntroComponent } from './notas-sustenidas-intro/notas-sustenidas-intro.component';
import { NotasSustenidasCComponent } from './notas-sustenidas-c/notas-sustenidas-c.component';
import { NotasSustenidasDComponent } from './notas-sustenidas-d/notas-sustenidas-d.component';
import { NotasSustenidasEComponent } from './notas-sustenidas-e/notas-sustenidas-e.component';
import { NotasSustenidasFComponent } from './notas-sustenidas-f/notas-sustenidas-f.component';
import { NotasSustenidasGComponent } from './notas-sustenidas-g/notas-sustenidas-g.component';
import { NotasSustenidasAComponent } from './notas-sustenidas-a/notas-sustenidas-a.component';
import { NotasSustenidasBComponent } from './notas-sustenidas-b/notas-sustenidas-b.component';

const rotas: Routes = [
  {path:'login', component:LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'notas-musicais', component:NotasMusicaisComponent},
  {path:'notas-musicais-menores', component:NotasMusicaisMenoresComponent},
  {path:'notas-musicais-sustenidas', component:NotasMusicaisSustenidasComponent},
  {path:'ritmica', component:RitmicaComponent},
  {path:'campo-harmonico', component:CampoHarmonicoComponent},
  {path:'menu', component:MenuComponent},
  {path:'notas-musicais-d', component:NotasMusicaisDComponent},
  {path:'notas-musicais-e', component:NotasMusicaisEComponent},
  {path:'notas-musicais-f', component:NotasMusicaisFComponent},
  {path:'notas-musicais-g', component:NotasMusicaisGComponent},
  {path:'notas-musicais-a', component:NotasMusicaisAComponent},
  {path:'notas-musicais-b', component:NotasMusicaisBComponent},
  {path:'notas-intro', component:NotasIntroComponent},
  {path:'notas-menores-intro', component:NotasMenoresIntroComponent},
  {path:'notas-menores-c', component:NotasMenoresCComponent},
  {path:'notas-menores-d', component:NotasMenoresDComponent},
  {path:'notas-menores-e', component:NotasMenoresEComponent},
  {path:'notas-menores-f', component:NotasMenoresFComponent},
  {path:'notas-menores-g', component:NotasMenoresGComponent},
  {path:'notas-menores-a', component:NotasMenoresAComponent},
  {path:'notas-menores-b', component:NotasMenoresBComponent},
  {path:'notas-sustenidas-intro', component:NotasSustenidasIntroComponent},
  {path:'notas-sustenidas-c', component:NotasSustenidasCComponent},
  {path:'notas-sustenidas-d', component:NotasSustenidasDComponent},
  {path:'notas-sustenidas-e', component:NotasSustenidasEComponent},
  {path:'notas-sustenidas-f', component:NotasSustenidasFComponent},
  {path:'notas-sustenidas-g', component:NotasSustenidasGComponent},
  {path:'notas-sustenidas-a', component:NotasSustenidasAComponent},
  {path:'notas-sustenidas-b', component:NotasSustenidasBComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    NotasMusicaisComponent,
    NotasMusicaisMenoresComponent,
    NotasMusicaisSustenidasComponent,
    RitmicaComponent,
    CampoHarmonicoComponent,
    CadastroComponent,
    NotasMusicaisDComponent,
    NotasMusicaisFComponent,
    NotasMusicaisEComponent,
    NotasMusicaisGComponent,
    NotasMusicaisAComponent,
    NotasMusicaisBComponent,
    NotasIntroComponent,
    NotasMenoresIntroComponent,
    NotasMenoresCComponent,
    NotasMenoresDComponent,
    NotasMenoresEComponent,
    NotasMenoresFComponent,
    NotasMenoresGComponent,
    NotasMenoresAComponent,
    NotasMenoresBComponent,
    NotasSustenidasIntroComponent,
    NotasSustenidasCComponent,
    NotasSustenidasDComponent,
    NotasSustenidasEComponent,
    NotasSustenidasFComponent,
    NotasSustenidasGComponent,
    NotasSustenidasAComponent,
    NotasSustenidasBComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rotas),
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
