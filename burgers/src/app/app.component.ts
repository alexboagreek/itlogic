import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData = [
    {
      image: 'burger_1',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_2',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_3',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_4',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_5',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_6',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_7',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_8',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_9',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_10',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_11',
      title: 'Бургер чеддер & бекон',
      text: 'Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус',
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: 'burger_12',
      title: 'Двойной бургер чеддар',
      text: '  Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень',
      price: 8,
      basePrice: 8,
      grams: 360
    }
  ]

  constructor(private fb: FormBuilder) {

  }

  scrollTo(target: HTMLElement):void {
    target.scrollIntoView({ behavior: "smooth" });
  }

  confirmOrder():void {
    if (this.form.valid) {
      alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
      this.form.reset();
    }
  }
}
