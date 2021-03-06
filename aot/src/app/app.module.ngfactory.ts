/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../src/app/app.module';
import * as i2 from '../../../src/app/app.component';
import * as i3 from '../../node_modules/@angular/material/typings/index.ngfactory';
import * as i4 from './forms/productForm/form.component.ngfactory';
import * as i5 from './forms/salesForm/sales-form.component.ngfactory';
import * as i6 from './views/viewProduct/view-product.component.ngfactory';
import * as i7 from './radio-button/radio-button.component.ngfactory';
import * as i8 from './app.component.ngfactory';
import * as i9 from '@angular/common';
import * as i10 from '@angular/platform-browser';
import * as i11 from '@angular/animations/browser';
import * as i12 from '@angular/platform-browser/animations';
import * as i13 from '@angular/animations';
import * as i14 from '@angular/forms';
import * as i15 from '@angular/cdk';
import * as i16 from '@angular/material';
import * as i17 from '@angular/http';
import * as i18 from '../../../src/app/services/search.service';
import * as i19 from '@angular/router';
import * as i20 from '../../../src/app/services/add-classification.service';
import * as i21 from '../../../src/app/forms/productForm/form.component';
import * as i22 from '../../../src/app/forms/salesForm/sales-form.component';
import * as i23 from '../../../src/app/views/viewProduct/view-product.component';
import * as i24 from '../../../src/app/radio-button/radio-button.component';
import * as i25 from '../../../src/app/shared/shared.module';
import * as i26 from '../../../src/app/pagination/pagination.model';
import * as i27 from '../../../src/app/forms/productForm/form.module';
import * as i28 from '../../../src/app/forms/salesForm/sales-form.module';
import * as i29 from '../../../src/app/forms/labelForm/label-form.module';
import * as i30 from '../../../src/app/forms-center/forms-center.module';
import * as i31 from '../../../src/app/radio-button/radio-button.module';
import * as i32 from '../../../src/app/table/table.module';
import * as i33 from '../../../src/app/classification-center/add-classification/add-classification.module';
import * as i34 from '../../../src/app/modal-box/modal-box.module';
import * as i35 from '../../../src/app/views/viewProduct/view-product.module';
export const AppModuleNgFactory:i0.NgModuleFactory<i1.AppModule> = i0.ɵcmf(i1.AppModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.MdDialogContainerNgFactory,i3.MdDatepickerContentNgFactory,i4.FormComponentNgFactory,
              i5.SalesFormComponentNgFactory,i6.ViewProductComponentNgFactory,i7.RadioButtonComponentNgFactory,
              i8.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],i0.NgModuleRef]),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i9.NgLocalization,
              i9.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.APP_ID,i0.ɵf,
              ([] as any[])),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i10.DomSanitizer,
              i10.ɵe,[i9.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i10.DomSanitizer]),
          i0.ɵmpd(4608,i10.HAMMER_GESTURE_CONFIG,i10.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i10.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i10.ɵDomEventsPlugin(p0_0),new i10.ɵKeyEventsPlugin(p1_0),
                new i10.ɵHammerGesturesPlugin(p2_0,p2_1)];
          },[i9.DOCUMENT,i9.DOCUMENT,i9.DOCUMENT,i10.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i10.EventManager,i10.EventManager,[i10.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i10.ɵDomSharedStylesHost,i10.ɵDomSharedStylesHost,[i9.DOCUMENT]),
          i0.ɵmpd(4608,i10.ɵDomRendererFactory2,i10.ɵDomRendererFactory2,[i10.EventManager,
              i10.ɵDomSharedStylesHost]),i0.ɵmpd(5120,i11.AnimationDriver,i12.ɵc,([] as any[])),
          i0.ɵmpd(5120,i11.ɵAnimationStyleNormalizer,i12.ɵd,([] as any[])),i0.ɵmpd(4608,
              i11.ɵAnimationEngine,i12.ɵb,[i11.AnimationDriver,i11.ɵAnimationStyleNormalizer]),
          i0.ɵmpd(5120,i0.RendererFactory2,i12.ɵe,[i10.ɵDomRendererFactory2,i11.ɵAnimationEngine,
              i0.NgZone]),i0.ɵmpd(6144,i10.ɵSharedStylesHost,(null as any),[i10.ɵDomSharedStylesHost]),
          i0.ɵmpd(4608,i0.Testability,i0.Testability,[i0.NgZone]),i0.ɵmpd(4608,i10.Meta,
              i10.Meta,[i9.DOCUMENT]),i0.ɵmpd(4608,i10.Title,i10.Title,[i9.DOCUMENT]),
          i0.ɵmpd(4608,i13.AnimationBuilder,i12.ɵBrowserAnimationBuilder,[i0.RendererFactory2]),
          i0.ɵmpd(4608,i14.FormBuilder,i14.FormBuilder,([] as any[])),i0.ɵmpd(4608,
              i14.ɵi,i14.ɵi,([] as any[])),i0.ɵmpd(6144,i15.DIR_DOCUMENT,(null as any),
              [i10.DOCUMENT]),i0.ɵmpd(4608,i15.Directionality,i15.Directionality,[[2,
              i15.DIR_DOCUMENT]]),i0.ɵmpd(4608,i15.Platform,i15.Platform,([] as any[])),
          i0.ɵmpd(5120,i16.ScrollDispatcher,i16.ɵe,[[3,i16.ScrollDispatcher],i0.NgZone,
              i15.Platform]),i0.ɵmpd(5120,i16.ViewportRuler,i16.ɵc,[[3,i16.ViewportRuler],
              i16.ScrollDispatcher]),i0.ɵmpd(4608,i16.ScrollStrategyOptions,i16.ScrollStrategyOptions,
              [i16.ScrollDispatcher,i16.ViewportRuler]),i0.ɵmpd(5120,i16.FocusOriginMonitor,
              i16.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY,[[3,i16.FocusOriginMonitor],
                  i0.NgZone,i15.Platform]),i0.ɵmpd(4608,i15.InteractivityChecker,i15.InteractivityChecker,
              [i15.Platform]),i0.ɵmpd(4608,i15.FocusTrapFactory,i15.FocusTrapFactory,
              [i15.InteractivityChecker,i15.Platform,i0.NgZone]),i0.ɵmpd(5120,i15.LiveAnnouncer,
              i15.LIVE_ANNOUNCER_PROVIDER_FACTORY,[[3,i15.LiveAnnouncer],[2,i15.LIVE_ANNOUNCER_ELEMENT_TOKEN],
                  i15.Platform]),i0.ɵmpd(5120,i16.OverlayContainer,i16.ɵa,[[3,i16.OverlayContainer]]),
          i0.ɵmpd(4608,i16.ɵt,i16.ɵt,[i16.ViewportRuler]),i0.ɵmpd(4608,i16.Overlay,
              i16.Overlay,[i16.ScrollStrategyOptions,i16.OverlayContainer,i0.ComponentFactoryResolver,
                  i16.ɵt,i0.ApplicationRef,i0.Injector,i0.NgZone]),i0.ɵmpd(4608,i9.CurrencyPipe,
              i9.CurrencyPipe,[i0.LOCALE_ID]),i0.ɵmpd(4608,i16.MdDialog,i16.MdDialog,
              [i16.Overlay,i0.Injector,[2,i9.Location],[3,i16.MdDialog]]),i0.ɵmpd(4608,
              i16.MdDatepickerIntl,i16.MdDatepickerIntl,([] as any[])),i0.ɵmpd(4608,
              i17.BrowserXhr,i17.BrowserXhr,([] as any[])),i0.ɵmpd(4608,i17.ResponseOptions,
              i17.BaseResponseOptions,([] as any[])),i0.ɵmpd(5120,i17.XSRFStrategy,
              i17.ɵb,([] as any[])),i0.ɵmpd(4608,i17.XHRBackend,i17.XHRBackend,[i17.BrowserXhr,
              i17.ResponseOptions,i17.XSRFStrategy]),i0.ɵmpd(4608,i17.RequestOptions,
              i17.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i17.Http,i17.ɵc,[i17.XHRBackend,
              i17.RequestOptions]),i0.ɵmpd(4608,i16.MdIconRegistry,i16.MdIconRegistry,
              [[2,i17.Http],i10.DomSanitizer]),i0.ɵmpd(4608,i16.DateAdapter,i16.NativeDateAdapter,
              ([] as any[])),i0.ɵmpd(4608,i15.MdMutationObserverFactory,i15.MdMutationObserverFactory,
              ([] as any[])),i0.ɵmpd(5120,i16.UniqueSelectionDispatcher,i16.ɵh,[[3,
              i16.UniqueSelectionDispatcher]]),i0.ɵmpd(4608,i18.SearchService,i18.SearchService,
              [i17.Http]),i0.ɵmpd(5120,i19.ActivatedRoute,i19.ɵf,[i19.Router]),i0.ɵmpd(4608,
              i19.NoPreloading,i19.NoPreloading,([] as any[])),i0.ɵmpd(6144,i19.PreloadingStrategy,
              (null as any),[i19.NoPreloading]),i0.ɵmpd(135680,i19.RouterPreloader,
              i19.RouterPreloader,[i19.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i19.PreloadingStrategy]),i0.ɵmpd(4608,i19.PreloadAllModules,
              i19.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i19.ROUTER_INITIALIZER,
              i19.ɵi,[i19.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i19.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i20.AddClassificationService,i20.AddClassificationService,
              [i17.Http]),i0.ɵmpd(512,i9.CommonModule,i9.CommonModule,([] as any[])),
          i0.ɵmpd(1024,i0.ErrorHandler,i10.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,
              () => {
                return [i19.ɵb()];
              },([] as any[])),i0.ɵmpd(512,i19.ɵg,i19.ɵg,[i0.Injector]),i0.ɵmpd(1024,
              i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any) => {
                return [i10.ɵc(p0_0,p0_1),i19.ɵh(p1_0)];
              },[[2,i10.NgProbeToken],[2,i0.NgProbeToken],i19.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,
              i0.ApplicationInitStatus,[[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,
              i0.ɵe,[i0.NgZone,i0.ɵConsole,i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,
                  i0.ApplicationInitStatus]),i0.ɵmpd(2048,i0.ApplicationRef,(null as any),
              [i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,i0.ApplicationModule,[i0.ApplicationRef]),
          i0.ɵmpd(512,i10.BrowserModule,i10.BrowserModule,[[3,i10.BrowserModule]]),
          i0.ɵmpd(512,i12.BrowserAnimationsModule,i12.BrowserAnimationsModule,([] as any[])),
          i0.ɵmpd(1024,i19.ɵa,i19.ɵd,[[3,i19.Router]]),i0.ɵmpd(512,i19.UrlSerializer,
              i19.DefaultUrlSerializer,([] as any[])),i0.ɵmpd(512,i19.ChildrenOutletContexts,
              i19.ChildrenOutletContexts,([] as any[])),i0.ɵmpd(256,i19.ROUTER_CONFIGURATION,
              {},([] as any[])),i0.ɵmpd(1024,i9.LocationStrategy,i19.ɵc,[i9.PlatformLocation,
              [2,i9.APP_BASE_HREF],i19.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i9.Location,
              i9.Location,[i9.LocationStrategy]),i0.ɵmpd(512,i0.Compiler,i0.Compiler,
              ([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,i0.SystemJsNgModuleLoader,
              [i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),i0.ɵmpd(1024,i19.ROUTES,
              () => {
                return [[{path:'search',component:i21.FormComponent},{path:'salesSearch',
                    component:i22.SalesFormComponent},{path:'viewproduct/:id',component:i23.ViewProductComponent},
                    {path:'radiobutton',component:i24.RadioButtonComponent},{path:'',
                        redirectTo:'/radiobutton',pathMatch:'full'}]];
              },([] as any[])),i0.ɵmpd(1024,i19.Router,i19.ɵe,[i0.ApplicationRef,i19.UrlSerializer,
              i19.ChildrenOutletContexts,i9.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i19.ROUTES,i19.ROUTER_CONFIGURATION,[2,i19.UrlHandlingStrategy],
              [2,i19.RouteReuseStrategy]]),i0.ɵmpd(512,i19.RouterModule,i19.RouterModule,
              [[2,i19.ɵa],[2,i19.Router]]),i0.ɵmpd(512,i14.ɵba,i14.ɵba,([] as any[])),
          i0.ɵmpd(512,i14.ReactiveFormsModule,i14.ReactiveFormsModule,([] as any[])),
          i0.ɵmpd(512,i14.FormsModule,i14.FormsModule,([] as any[])),i0.ɵmpd(512,i16.CompatibilityModule,
              i16.CompatibilityModule,([] as any[])),i0.ɵmpd(512,i15.BidiModule,i15.BidiModule,
              ([] as any[])),i0.ɵmpd(256,i16.MATERIAL_SANITY_CHECKS,true,([] as any[])),
          i0.ɵmpd(512,i16.MdCommonModule,i16.MdCommonModule,[[2,i10.DOCUMENT],[2,i16.MATERIAL_SANITY_CHECKS]]),
          i0.ɵmpd(512,i16.MdCardModule,i16.MdCardModule,([] as any[])),i0.ɵmpd(512,
              i16.MdProgressBarModule,i16.MdProgressBarModule,([] as any[])),i0.ɵmpd(512,
              i15.PlatformModule,i15.PlatformModule,([] as any[])),i0.ɵmpd(512,i16.MdInputModule,
              i16.MdInputModule,([] as any[])),i0.ɵmpd(512,i16.ScrollDispatchModule,
              i16.ScrollDispatchModule,([] as any[])),i0.ɵmpd(512,i16.MdRippleModule,
              i16.MdRippleModule,([] as any[])),i0.ɵmpd(512,i16.StyleModule,i16.StyleModule,
              ([] as any[])),i0.ɵmpd(512,i16.MdButtonModule,i16.MdButtonModule,([] as any[])),
          i0.ɵmpd(512,i15.A11yModule,i15.A11yModule,([] as any[])),i0.ɵmpd(512,i15.PortalModule,
              i15.PortalModule,([] as any[])),i0.ɵmpd(512,i16.OverlayModule,i16.OverlayModule,
              ([] as any[])),i0.ɵmpd(512,i16.MdSidenavModule,i16.MdSidenavModule,([] as any[])),
          i0.ɵmpd(512,i16.MdSelectionModule,i16.MdSelectionModule,([] as any[])),i0.ɵmpd(512,
              i16.MdOptionModule,i16.MdOptionModule,([] as any[])),i0.ɵmpd(512,i16.MdSelectModule,
              i16.MdSelectModule,([] as any[])),i0.ɵmpd(512,i16.MdSliderModule,i16.MdSliderModule,
              ([] as any[])),i0.ɵmpd(512,i25.SharedModule,i25.SharedModule,([] as any[])),
          i0.ɵmpd(512,i26.PaginationModelModule,i26.PaginationModelModule,([] as any[])),
          i0.ɵmpd(512,i27.FormModule,i27.FormModule,([] as any[])),i0.ɵmpd(512,i16.MdDialogModule,
              i16.MdDialogModule,([] as any[])),i0.ɵmpd(512,i16.MdDatepickerModule,
              i16.MdDatepickerModule,([] as any[])),i0.ɵmpd(512,i28.SalesFormModule,
              i28.SalesFormModule,([] as any[])),i0.ɵmpd(512,i29.LabelFormModule,i29.LabelFormModule,
              ([] as any[])),i0.ɵmpd(512,i30.FormsCenterModule,i30.FormsCenterModule,
              ([] as any[])),i0.ɵmpd(512,i17.HttpModule,i17.HttpModule,([] as any[])),
          i0.ɵmpd(512,i16.MdIconModule,i16.MdIconModule,([] as any[])),i0.ɵmpd(512,
              i16.NativeDateModule,i16.NativeDateModule,([] as any[])),i0.ɵmpd(512,
              i16.MdNativeDateModule,i16.MdNativeDateModule,([] as any[])),i0.ɵmpd(512,
              i15.ObserveContentModule,i15.ObserveContentModule,([] as any[])),i0.ɵmpd(512,
              i16.MdTabsModule,i16.MdTabsModule,([] as any[])),i0.ɵmpd(512,i16.MdRadioModule,
              i16.MdRadioModule,([] as any[])),i0.ɵmpd(512,i31.RadioButtonModule,i31.RadioButtonModule,
              ([] as any[])),i0.ɵmpd(512,i32.CustumTableModule,i32.CustumTableModule,
              ([] as any[])),i0.ɵmpd(512,i33.AddClassificationModule,i33.AddClassificationModule,
              ([] as any[])),i0.ɵmpd(512,i34.ModalBoxModule,i34.ModalBoxModule,([] as any[])),
          i0.ɵmpd(512,i35.ViewProductModule,i35.ViewProductModule,([] as any[])),i0.ɵmpd(512,
              i1.AppModule,i1.AppModule,([] as any[])),i0.ɵmpd(256,i16.MD_DATE_FORMATS,
              i16.MD_NATIVE_DATE_FORMATS,([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3JvbWFyaW8vYW5ndWxhcmFwaS9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
