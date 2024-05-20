import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { EquationsComponent } from './components/chapters/equations/equations.component';
import { FunctionsComponent } from './components/chapters/functions/functions.component';
import { AnalysisComponent } from './components/chapters/analysis/analysis.component';
import { AnalyticGeometryComponent } from './components/chapters/analytic-geometry/analytic-geometry.component';
import { GoniometryComponent } from './components/chapters/goniometry/goniometry.component';
import { TrigonometryComponent } from './components/chapters/trigonometry/trigonometry.component';
import { ComplexNumbersComponent } from './components/chapters/complex-numbers/complex-numbers.component';
import { LimitsComponent } from './components/chapters/limits/limits.component';
import { DifferentialCalculusComponent } from './components/chapters/differential-calculus/differential-calculus.component';
import { IntegralCalculusComponent } from './components/chapters/integral-calculus/integral-calculus.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavbarComponent,
    EquationsComponent,
    ComplexNumbersComponent,
    TrigonometryComponent,
    GoniometryComponent,
    AnalysisComponent,
    LimitsComponent,
    DifferentialCalculusComponent,
    IntegralCalculusComponent,
    FunctionsComponent,
    AnalyticGeometryComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
