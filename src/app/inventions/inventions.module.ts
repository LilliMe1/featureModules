import { NgModule } from "@angular/core";
import { InventionsComponent } from "./inventions.component";
import { FivegComponent } from "./fiveg/fiveg.component";
import { AiComponent } from "./ai/ai.component";
import { ExtendedRealityComponent } from "./extended-reality/extended-reality.component";
import { UniversityrelationsComponent } from "./universityrelations/universityrelations.component";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from './widgets/products/products.component';
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [InventionsComponent, FivegComponent, AiComponent, ExtendedRealityComponent, UniversityrelationsComponent, ProductsComponent],
    providers: [],
    imports: [
      CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: InventionsComponent,
                children: [
                  {
                    path: '5G',
                    component: FivegComponent
                  },
                  {
                    path: 'extrel',
                    component: ExtendedRealityComponent
                  },
                  {
                    path: 'ai',
                    component: AiComponent
                  }
                ]
              },
        ])
    ]
})
export class InvModule{

}