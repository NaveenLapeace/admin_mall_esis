import { NgModule,  CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AddProductComponent } from './models/AddProduct/add-product/add-product.component';
import { EditProductComponent } from './models/EditProduct/edit-product/edit-product.component';
import { ProductListComponent } from './Pages/InventoryDashboard/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { AddSpecificationComponent } from './models/AddSpecification/add-specification/add-specification.component';
import { EditCategoryComponent } from './models/EditCategory/edit-category/edit-category.component';
import { EditBrandComponent } from './models/EditBrand/edit-brand/edit-brand.component';
import { FormsModule } from '@angular/forms';
import { BrandChartsComponent } from './Pages/MainDashboard/BarChartView/brand-charts/brand-charts.component';
import { ProductChartsComponent } from './Pages/MainDashboard/ProductCards/product-charts/product-charts.component';
import { CountUpModule } from 'ngx-countup';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './Pages/MainDashboard/PieChartView/pie-chart/pie-chart.component';
import { ProductViewComponent } from './Pages/MainDashboard/ProductTable/product-view/product-view.component';
import { CategoryViewComponent } from './Pages/InventoryDashboard/CategoryTable/category-view/category-view.component';
import { BrandViewComponent } from './Pages/InventoryDashboard/BrandTable/brand-view/brand-view.component';
import { SlideBarComponent } from './components/Slidebar/slide-bar/slide-bar.component';
import { DashboardHeaderComponent } from './components/Header/dashboard-header/dashboard-header.component';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { NavbarViewComponent } from './components/Footer/navbar-view/navbar-view.component';
import { DisplayViewComponent } from './Pages/MainDashboard/ProductView/display-view/display-view.component';
import { InventoryDashboardComponent } from './Pages/InventoryDashboard/inventory-dashboard/inventory-dashboard.component';
import { OrderViewComponent } from './Pages/OrderDashboard/order-view/order-view.component';
import { AddproductPopupComponent } from './Pages/InventoryDashboard/addproduct-popup/addproduct-popup.component';
import { UserProfileComponent } from './Pages/ProfileDashboard/user-profile/user-profile.component';
import { OrderChartComponent } from './Pages/OrderDashboard/OrderLineChart/order-chart/order-chart.component';
import { EditStatusComponent } from './Pages/OrderDashboard/edit-status/edit-status.component';
import { AnalyticsDashboardComponent } from './Pages/analytics-dashboard/analytics-dashboard/analytics-dashboard.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import { ProfileCardComponent } from './Pages/ProfileDashboard/profile-card/profile-card/profile-card.component';
import { ProfileDetailsComponent } from './Pages/ProfileDashboard/profile-details/profile-details/profile-details.component';
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { AnalyticalReviewComponent } from './Pages/analytics-dashboard/analytics-review/analytical-review/analytical-review.component';
import { AnalyticalBarchartComponent } from './Pages/analytics-dashboard/analytics-barchart/analytical-barchart/analytical-barchart.component';
import { AnalyticalTestmonialsComponent } from './Pages/analytics-dashboard/analytics-testmonials/analytical-testmonials/analytical-testmonials.component';
import { AnalyticalImageComponent } from './Pages/analytics-dashboard/analytics-testmonials/analyical-image/analytical-image/analytical-image.component';
import { TestmonialsComponent } from './Pages/analytics-dashboard/analytics-testmonials/testmonials/testmonials/testmonials.component';
import { ProfileBioComponent } from './Pages/ProfileDashboard/profile-bio/profile-bio/profile-bio.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddImagePopupComponent } from './Pages/InventoryDashboard/add-image-popup/add-image-popup.component';
import { OpenBrandPopupComponent } from './Pages/InventoryDashboard/open-brand-popup/open-brand-popup.component';
import { OpenCategoruPopupComponent } from './Pages/InventoryDashboard/open-categoru-popup/open-categoru-popup.component';
import { BrandTableComponent } from './Pages/InventoryDashboard/brand-table/brand-table.component';
import { CategoryTableComponent } from './Pages/InventoryDashboard/category-table/category-table.component';
import { OpenProductPopupComponent } from './Pages/InventoryDashboard/open-product-popup/open-product-popup.component';
import { ViewSpecificationComponent } from './Pages/InventoryDashboard/viewSpecification/view-specification/view-specification.component';
import { VoiceAudioComponent } from './models/voice-audio/voice-audio.component';
import { PaymentTableComponent } from './Pages/PaymentDashboard/PaymentTable/payment-table/payment-table.component';
import { PaymentGatewayComponent } from './Pages/PaymentDashboard/PaymentGateway/payment-gateway/payment-gateway.component';
import { PaymentDashboardComponent } from './Pages/PaymentDashboard/paymentDashboard/payment-dashboard/payment-dashboard.component';
import { ReportDashboardComponent } from './Pages/ReportDashboard/report-dashboard/report-dashboard.component';
import { ProductPieChartComponent } from './Pages/ReportDashboard/productPieChart/product-pie-chart/product-pie-chart.component';
import { ProductPlotChartComponent } from './Pages/ReportDashboard/productPlotChart/product-plot-chart/product-plot-chart.component';
import { ShopSelectorComponent } from './models/shop-selector/shop-selector.component';
import { SignInComponent } from './components/signIn/sign-in/sign-in.component';
import { SignUpComponent } from './components/SignUp/sign-up/sign-up.component';
import { AdminHeaderComponent } from './components/AdminHeader/admin-header/admin-header.component';
import { Shop2SignInComponent } from './components/shop2signIn/shop2-sign-in/shop2-sign-in.component';
import { Shop2ViewSpecificationComponent } from './Pages/InventoryDashboard/shop2-view-specification/shop2-view-specification.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    EditProductComponent,
    ProductListComponent,
    AddSpecificationComponent,
    EditCategoryComponent,
    EditBrandComponent,
    BrandChartsComponent,
    ProductChartsComponent,
    PieChartComponent,
    ProductViewComponent,
    CategoryViewComponent,
    BrandViewComponent,
    SlideBarComponent,
    DashboardHeaderComponent,
    CanvasJSChart,
    NavbarViewComponent,
    DisplayViewComponent,
    InventoryDashboardComponent,
    OrderViewComponent,
    AddproductPopupComponent,
    UserProfileComponent,
    OrderChartComponent,
    EditStatusComponent,
    AnalyticsDashboardComponent,
    AnalyticalReviewComponent,
    AnalyticalBarchartComponent,
    AnalyticalTestmonialsComponent,
    AnalyticalImageComponent,
    TestmonialsComponent,
    ProfileCardComponent,
    ProfileDetailsComponent,
    ProfileBioComponent,
    AddImagePopupComponent,
    OpenBrandPopupComponent,
    OpenCategoruPopupComponent,
    BrandTableComponent,
    CategoryTableComponent,
    OpenProductPopupComponent,
    ViewSpecificationComponent,
    VoiceAudioComponent,
    PaymentTableComponent,
    PaymentGatewayComponent,
    PaymentDashboardComponent,
    ReportDashboardComponent,
    ProductPieChartComponent,
    ProductPlotChartComponent,
    ShopSelectorComponent,
    SignInComponent,
    SignUpComponent,
    AdminHeaderComponent,
    Shop2SignInComponent,
    Shop2ViewSpecificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    CountUpModule,
    FusionChartsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
