import {
  ComponentFactoryResolver,
  Directive,
  Input,
  ViewContainerRef,
} from '@angular/core';

import { FormGroup } from '@angular/forms';
// import { Field } from '../../../core/question/field';
import { BooleanComponent } from '../boolean/boolean.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { ChipDistributionComponent } from '../chip-distribution/chip-distribution.component';
import { DateComponent } from '../date/date.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { FreeTextComponent } from '../free-text/free-text.component';
import { GroupNumberComponent } from '../group-number/group-number.component';
import { LongTextComponent } from '../long-text/long-text.component';
import { NumericalComponent } from '../numerical/numerical.component';
import { PlainBannerComponent } from '../plain-banner/plain-banner.component';
import { RadioComponent } from '../radio/radio.component';
import { RankingComponent } from '../ranking/ranking.component';
import { RatingComponent } from '../rating/rating.component';
import { ShortTextComponent } from '../short-text/short-text.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { CustomSliderComponent } from '../custom-slider/custom-slider.component';
import { Field } from 'src/app/core/question/option';

const componentMapper = {
  RADIO: RadioComponent,
  CHECKBOX: CheckboxComponent,
  INPUT_DATE: DateComponent,
  SHORT_TEXT: TextareaComponent,
  RANKING: RankingComponent,
  RATING: RatingComponent,
  SELECTION_YES_NO: BooleanComponent,
  CHIP_DISTRIBUTION: ChipDistributionComponent,
  NUMERICAL: NumericalComponent,
  GROUP_NUMBER: GroupNumberComponent,
  PLAIN_BANNER: PlainBannerComponent,
  CHECKBOX_WITH_FREE_TEXT: FreeTextComponent,
  DROPDOWN: DropdownComponent,
  DROPDOWN_SINGLE: DropdownComponent,
  FREE_TEXT_SINGLE_LINE: LongTextComponent,
  FREE_TEXT_MULTI_LINE: ShortTextComponent,
  SLIDER:CustomSliderComponent
};

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective {
  @Input() field : Field;
  
  @Input() group : FormGroup;

  componentRef : any;

  constructor( 
    private resolver : ComponentFactoryResolver,
    private container : ViewContainerRef
  ) {}

  ngOnInit() {
    console.log("option type==>",this.field)
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field[0].optionType]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.option = this.field;
    this.componentRef.instance.group = this.group;
  }
}
