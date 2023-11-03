import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './models/AddProduct/add-product/add-product.component';
import { EditProductComponent } from './models/EditProduct/edit-product/edit-product.component';
import { ProductListComponent } from './Pages/InventoryDashboard/product-list/product-list.component';
import { AddSpecificationComponent } from './models/AddSpecification/add-specification/add-specification.component';
import { BrandChartsComponent } from './Pages/MainDashboard/BarChartView/brand-charts/brand-charts.component';
import { ProductChartsComponent } from './Pages/MainDashboard/ProductCards/product-charts/product-charts.component';
import { OrderViewComponent } from './Pages/OrderDashboard/order-view/order-view.component';
import { UserProfileComponent } from './Pages/ProfileDashboard/user-profile/user-profile.component';
import { AnalyticsDashboardComponent } from './Pages/analytics-dashboard/analytics-dashboard/analytics-dashboard.component';
import { VoiceAudioComponent } from './models/voice-audio/voice-audio.component';
import { PaymentDashboardComponent } from './Pages/PaymentDashboard/paymentDashboard/payment-dashboard/payment-dashboard.component';
import { ReportDashboardComponent } from './Pages/ReportDashboard/report-dashboard/report-dashboard.component';
import { ShopSelectorComponent } from './models/shop-selector/shop-selector.component';
import { SignUpComponent } from './components/SignUp/sign-up/sign-up.component';
import { SignInComponent } from './components/signIn/sign-in/sign-in.component';
import { Shop2SignInComponent } from './components/shop2signIn/shop2-sign-in/shop2-sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: 'shopSelector', pathMatch: 'full'},
  // // {path: 'add-category', component: AddCategoryComponent},
  // // {path: 'add-brand', component: AddBrandComponent},
  {path: 'shop1-signin', component: SignInComponent},
  {path: 'shop2-signin', component: Shop2SignInComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'shopSelector', component: ShopSelectorComponent },
  {path: 'dashboard', component: ProductChartsComponent },
  {path: 'inventory', component: ProductListComponent},
  {path: 'add-specification', component: AddSpecificationComponent},
  {path: 'view-brandChart', component: BrandChartsComponent},
  {path: 'view-productChart', component: ProductChartsComponent},
  {path: 'order', component: OrderViewComponent},
  {path: 'user-profile', component: UserProfileComponent},
  {path: 'analytics', component: AnalyticsDashboardComponent},
  {path: 'voice', component: VoiceAudioComponent},
  {path: 'payments', component: PaymentDashboardComponent},
  {path: 'reports', component: ReportDashboardComponent}
  // {path: 'edit-product', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
