import { toNumber } from "lodash";
import "./styles/index.scss";

interface TipsElements {
  bill: HTMLInputElement;
  numberOfPerson: HTMLInputElement;
  numberCustom: HTMLInputElement;
  buttonsPorcent: NodeListOf<HTMLButtonElement>;
  amountTip: HTMLElement;
  totalTip: HTMLElement;
  reset: HTMLButtonElement;
}

export class Tips implements TipsElements {
  buttonsPorcent: NodeListOf<HTMLButtonElement>;
  amountTip: HTMLElement;
  totalTip: HTMLElement;
  bill: HTMLInputElement;
  numberOfPerson: HTMLInputElement;
  numberCustom: HTMLInputElement;
  reset: HTMLButtonElement;

  constructor(tipsElements: TipsElements) {
    this.bill = tipsElements.bill;
    this.numberOfPerson = tipsElements.numberOfPerson;
    this.numberCustom = tipsElements.numberCustom;
    this.buttonsPorcent = tipsElements.buttonsPorcent;
    this.totalTip = tipsElements.totalTip;
    this.amountTip = tipsElements.amountTip;
    this.reset = tipsElements.reset;
  }

  initEvent(): void {
    this.buttonsPorcent.forEach((button) => {
      button.addEventListener("click", () => this.calcPorcentBill(button));
    });
    this.reset.addEventListener("click", () => this.resetValues());
    this.numberCustom.addEventListener("keyup", () => this.calcPorcentBill());
  }
  resetValues() {
    this.numberCustom.value = "";
    this.numberOfPerson.value = "";
    this.bill.value = "";
    this.amountTip.innerHTML = "$0,00";
    this.totalTip.innerHTML = "$0,00";
  }

  calcPorcentBill(button: HTMLButtonElement | null = null): void {
    let porcent = null;
    if (button == null) {
      if(Number(this.numberCustom.value) > 100) return this.resetValues()
      porcent = Number(this.numberCustom.value) / 100;
    } else {
      porcent = Number(button.textContent?.replace("%", "")) / 100;
    }
    
    if (this.validNumberOfPeople()) {
      let porcentByPeople =
        Number(this.bill.value) / Number(this.numberOfPerson.value);
      let total = porcentByPeople * porcent;
      this.totalTip.innerHTML = `$${porcentByPeople
        .toString()
        .replace(".", ",")}`;
      this.amountTip.innerHTML = `$${total.toString().replace(".", ",")}`;
    }
  }
  validNumberOfPeople(): boolean {
    let valid = true;
    const cantBe0 = document.querySelector(".invalid-text");
    if (Number(this.numberOfPerson.value) < 1) {
      cantBe0?.classList.add("invalid");
      this.numberOfPerson.classList.add("invalid");
      valid = false;
    } else {
      cantBe0?.classList.remove("invalid");
      this.numberOfPerson.classList.remove("invalid");
      valid = true;
    }
    return valid;
  }
}

const tips = new Tips({
  bill: document.querySelector(".input-bill") as HTMLInputElement,
  numberCustom: document.querySelector(".input-custom") as HTMLInputElement,
  numberOfPerson: document.querySelector(".input-people") as HTMLInputElement,
  buttonsPorcent: document.querySelectorAll(
    ".porcent-button"
  ) as NodeListOf<HTMLButtonElement>,
  amountTip: document.querySelector(".total-tip-amount") as HTMLElement,
  totalTip: document.querySelector(".total") as HTMLElement,
  reset: document.querySelector(".reset") as HTMLButtonElement,
});
tips.initEvent();
