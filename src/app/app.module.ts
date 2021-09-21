//Estos dos modulos se importan por defecto de Angular 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Componente principal por defecto 
import { AppComponent } from './app.component';

//Para poder usar ngModule 
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//Importaciones para las rutas de la aplicacion 
import { RouterModule, Routes } from '@angular/router';

//librerias de Angular material 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { SearchPipe } from './pipes/search.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';


//Componente creados por mi 
import { JsonComponent } from './json/json.component';
import { InicioComponent } from './inicio/inicio.component';
import { ConcionesPlantillasComponent } from './conciones-plantillas/conciones-plantillas.component';
import { AtributosEventosNgModelComponent } from './atributos-eventos-ng-model/atributos-eventos-ng-model.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { UserComponent } from './input-output/usuarios/user/user.component';
import { InOut2Component } from './input-output/Ejemplo2/in-out2/in-out2.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { SubjectObservablesComponent } from './subject-observables/subject-observables.component';
//ClientesModule es como app.module pero para el apartado de subjects y observables 
import { ClientesModule } from './subject-observables/clientes/clientes.module';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { PaginatePipe } from './paginacion/pipes/paginate.pipe';
import { CustomMatPaginatorIntl } from './paginacion/paginacion-es';
import { ApiService } from './servicios/services/api.service';
import { UppercasePipe } from './paginacion/pipes/uppercase.pipe';
import { SortPipe } from './paginacion/pipes/sort.pipe';
import { SortByPipe } from './paginacion/pipes/sort-by.pipe';
import { ViewChildComponent } from './view-child/view-child.component';
import { HijoComponent } from './view-child/hijo/hijo/hijo.component';
import { SearchComponent} from './view-child/search/search/search.component';
import { BuscadorPipe } from './view-child/pipe/buscador.pipe';
import { SpotyComponent } from './spoty/spoty.component';
//import { SongComponent } from './spoty/song/song/song.component';
import { NgOnChangesSimpleChnagesComponent } from './ng-on-changes-simple-chnages/ng-on-changes-simple-chnages.component';
import { CochesComponent } from './ng-on-changes-simple-chnages/componente/coches/coches.component';
import { TypscriptComponent } from './typscript/typscript.component';
import { ResolversComponent } from './resolvers/resolvers.component';
import { ExplorerComponent } from './resolvers/Componentes/explorer/explorer.component';
import { SongResolver } from './resolvers/resolver/song.resolver';
import { SongComponent } from './resolvers/Componentes/song/song/song.component';
import { LoaderComponent } from './resolvers/Componentes/loader/loader.component';

//Rutas de la aplicacion path: nombreRuta component: nombreComponente 
const routes: Routes = [
  { path: '', component: InicioComponent, pathMatch: 'full' }, //cuando no haya direccion se redirigira a inicio 
  //{ path: '**', redirectTo: '/', pathMatch: 'full' }, //si la ruta es erronea nos lleva a inicio 
  { path: 'typscript', component: TypscriptComponent },
  { path: 'ConcionesPlantillasComponent', component: ConcionesPlantillasComponent },
  { path: 'AtributosEventosNgModelComponent', component: AtributosEventosNgModelComponent },
  { path: 'ServiciosComponent', component: ServiciosComponent },
  { path: 'InputOutputComponent', component: InputOutputComponent },
  { path: 'FormulariosComponent', component: FormulariosComponent },
  { path: 'SubjectObservablesComponent', component: SubjectObservablesComponent },
  { path: 'PaginacionComponent', component: PaginacionComponent },
  { path: 'ViewChildComponent', component: ViewChildComponent },
  { path: 'SpotyComponent', component: SpotyComponent },
  { path: 'NgOnChangesSimpleChnagesComponent', component:NgOnChangesSimpleChnagesComponent},
  { path: 'ResolversComponent', component: ResolversComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'explorer'
      },
      {
        path: 'explorer',
        component: ExplorerComponent,
        
      }

    ]
  },
  {
    //este es un hijo dentro de un hijo y abre una nueva pestaña con el componente seleccionada 
    path: 'song/:id',
    component: SongComponent,
    resolve:{
      song: SongResolver
    }
  }

];


@NgModule({
  declarations: [
    AppComponent,
    TypscriptComponent,
    JsonComponent,
    SearchComponent,
    SearchPipe,
    InicioComponent,
    ConcionesPlantillasComponent,
    AtributosEventosNgModelComponent,
    ServiciosComponent,
    InputOutputComponent,
    UserComponent,
    InOut2Component,
    FormulariosComponent,
    SubjectObservablesComponent,
    PaginacionComponent,
    PaginatePipe,
    UppercasePipe,
    SortPipe,
    SortByPipe,
    ViewChildComponent,
    HijoComponent,
    SearchComponent,
    BuscadorPipe,
    SpotyComponent,
    NgOnChangesSimpleChnagesComponent,
    CochesComponent,
    TypscriptComponent,
    //Apartado Resolvers componente padre 
    ResolversComponent,
    //componentes hijos que saldran en el padre  usando rutas hijas 
    ExplorerComponent,
    SongComponent,
    LoaderComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    ClientesModule,
    MatPaginatorModule,
    MatSelectModule,
    
    //RouterModule.forRoot(routes2)



   
    
   
    
    
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

