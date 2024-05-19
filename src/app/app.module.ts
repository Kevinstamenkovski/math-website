import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { EquationsComponent } from './component/chapters/equations/equations.component';
import { ComplexNumbersComponent } from './component/chapters/complex-numbers/complex-numbers.component';
import { TrigonometryComponent } from './component/chapters/trigonometry/trigonometry.component';
import { GoniometryComponent } from './component/chapters/goniometry/goniometry.component';
import { AnalysisComponent } from './component/chapters/analysis/analysis.component';
import { LimitsComponent } from './component/chapters/limits/limits.component';
import { DifferentialCalculusComponent } from './component/chapters/differential-calculus/differential-calculus.component';
import { IntegralCalculusComponent } from './component/chapters/integral-calculus/integral-calculus.component';
import { FunctionsComponent } from './component/chapters/functions/functions.component';
import { AnalyticGeometryComponent } from './component/chapters/analytic-geometry/analytic-geometry.component';

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
    AnalyticGeometryComponent
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
