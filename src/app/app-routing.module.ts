import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path: 'eqz', component: EquationsComponent},
  {path: 'function', component: FunctionsComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'geometry', component: AnalyticGeometryComponent},
  {path: 'goniometry', component: GoniometryComponent},
  {path: 'trigonometry', component: TrigonometryComponent},
  {path: 'complex_numbers', component: ComplexNumbersComponent},
  {path: 'limits', component: LimitsComponent},
  {path: 'calculus_differential', component: DifferentialCalculusComponent},
  {path: 'calculus_integral', component: IntegralCalculusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
